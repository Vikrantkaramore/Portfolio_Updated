# Backend Deployment

This folder contains the standalone backend API for the portfolio contact form.

## Deploying the backend

The easiest option is to deploy this folder as a separate Node service on a platform such as:

- Heroku
- Render
- Railway
- Fly.io

### Heroku deployment

1. Create a new Heroku app.
2. Set the `Root Directory` to `backend`.
3. Add environment variables under Settings:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `RECIPIENT_EMAIL`
   - `PORT` (optional; defaults to `3001`)
   - `CORS_ORIGINS` (optional)
4. Deploy the repo.

The included `Procfile` ensures Heroku runs the backend with:

```text
web: npm start
```

### Render / Railway / Fly

If you use another platform, point the service to the `backend` directory and use:

- Build command: `npm install`
- Start command: `npm start`

## Notes

- The backend expects the contact API at `/api/contact`.
- Set `VITE_API_URL` in the frontend deployment to your backend URL if the frontend is deployed separately.
- The project already ignores `.env` files in Git, so secrets will not be committed.
