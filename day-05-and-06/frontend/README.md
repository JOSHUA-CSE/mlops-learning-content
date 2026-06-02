# Frontend Dashboard

This is the React frontend for the dashboard application. It provides a user interface for registration, login, and viewing the dashboard data.

## Environment Variables Setup: 

- Create a `.env` file in the `frontend` directory.
- Add the following line to point to the backend API:
```env
VITE_API_BASE_URL=Your-api-url-here
```
If frontend and backend are on different ALBs or domains, then you do need to change the frontend to use an environment variable.
