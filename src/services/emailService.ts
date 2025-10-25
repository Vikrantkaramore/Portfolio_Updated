const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

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
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (import.meta.env.DEV) {
        console.log('📧 Email sent successfully!');
      }

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
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
      const response = await fetch(`${API_BASE_URL}/api/health`);
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  },
};
