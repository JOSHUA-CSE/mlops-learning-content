# Change API Back to Localhost for Testing

If you want to test the app locally again with the backend running on your machine, you only need to change the shared API client.

## Files to Change

### 1. `frontend/src/lib/api.js`
This is the main file to update.

Change the axios base URL from the ECS-friendly path to localhost:

```javascript
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
})

export default api
```

### 2. `frontend/vite.config.js` in local development
This file is optional.

You can keep the proxy as-is because it already points `/api` to `http://localhost:5000`.
If you switch the client to `http://localhost:5000/api`, the proxy is no longer required, but it will not break local testing.

### 3. `frontend/src/pages/Login.jsx`, `frontend/src/pages/Register.jsx`, `frontend/src/pages/Dashboard.jsx`
These files do not need to change if they already import the shared client from `frontend/src/lib/api.js`.

They will automatically use localhost again once `api.js` is updated.

## What You Do Not Need To Change

- No backend code changes are required.
- No Dockerfile changes are required for local testing.
- No ECS task definition changes are required unless you want to switch the production deployment too.

## Quick Revert Summary

1. Open `frontend/src/lib/api.js`.
2. Replace `baseURL: '/api'` with `baseURL: 'http://localhost:5000/api'`.
3. Start the backend locally on port `5000`.
4. Start the frontend and test the app.

## Notes

- The login, register, and dashboard pages already use the shared `api` client.
- Keeping one API client is better than hardcoding localhost in multiple components.
- If you later switch back to ECS, change only `frontend/src/lib/api.js` again.