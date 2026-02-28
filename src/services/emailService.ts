// Get API base URL - compute dynamically based on environment
const getApiBaseUrl = () => {
  // If explicitly configured at build time, prefer that.
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  // In development, default to the local Express server.
  if (typeof window !== 'undefined') {
    const isLocalhost =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';
    return isLocalhost ? 'http://localhost:3001' : '';
  }

  return '';
};

const safeParseJson = async (response: Response) => {
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }

  const text = await response.text();
  return {
    error: 'Non-JSON response from contact API',
    details: text,
  };
};

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
  details?: string;
}

export const emailService = {
  async sendContactEmail(data: ContactFormData): Promise<EmailResponse> {
    try {
      const apiUrl = getApiBaseUrl();
      const endpoint = `${apiUrl}/api/contact`;

      if (import.meta.env.DEV) {
        console.log('Sending email to:', endpoint);
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = (await safeParseJson(response)) as EmailResponse & {
        error?: string;
        details?: string;
      };

      if (!response.ok) {
        const detailsSuffix = result.details ? `: ${result.details}` : '';
        throw new Error(
          result.error || `Failed to send email (HTTP ${response.status})${detailsSuffix}`
        );
      }

      return result;
    } catch (error) {
      console.error('Email service error:', error);

      // Return a standardized error response
      return {
        success: false,
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  },

  async checkHealth(): Promise<boolean> {
    try {
      const apiUrl = getApiBaseUrl();
      const response = await fetch(`${apiUrl}/api/health`);
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  },
};