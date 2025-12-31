# Firebase Hosting Setup Guide

## Prerequisites
- Firebase CLI installed globally
- A Firebase account (https://firebase.google.com)
- A Firebase project created

## Setup Steps

### 1. Install Firebase CLI (if not already installed)
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Get Your Firebase Project ID
- Go to https://console.firebase.google.com
- Select your project
- Copy the Project ID

### 4. Update .firebaserc
Replace `your-firebase-project-id` in `.firebaserc` with your actual Firebase project ID:
```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

### 5. Initialize Firebase (Optional - only if firebase init wasn't run)
```bash
firebase init hosting
```

## Build & Deploy

### Option 1: Deploy with single command
```bash
npm run deploy-firebase
```
This will build your Vite project and deploy to Firebase.

### Option 2: Manual build then deploy
```bash
npm run build
firebase deploy
```

### Option 3: Deploy to specific hosting site
```bash
firebase deploy --only hosting:site-name
```

## After Deployment

Your site will be available at:
- `https://<your-firebase-project-id>.web.app`
- `https://<your-firebase-project-id>.firebaseapp.com`

## Configuration Details

### firebase.json Configuration
- **public**: Points to `dist` (Vite build output)
- **rewrites**: Routes all requests to `/index.html` for React SPA routing
- **headers**: Sets cache control policies:
  - Static assets (JS, CSS, fonts): Cache for 1 year
  - index.html: No cache (always fetch fresh)

## Testing Locally
```bash
firebase emulators:start
```

## Monitoring Deployments
```bash
firebase open hosting:site
```

## Troubleshooting

### Images not loading
- Ensure all image paths use `/` prefix for public folder assets
- Already fixed in your project ✓

### SPA routes not working
- The `rewrites` rule in firebase.json handles this ✓

### Build fails
- Clear node_modules and reinstall: `rm -r node_modules && npm install`
- Check for syntax errors: `npm run lint`
