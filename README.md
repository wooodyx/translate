# Real-time English Speech Recognition & Spanish Translation Subtitles

A web application that performs real-time English speech recognition and translates it to Spanish subtitles, designed for use with chroma key (green screen) backgrounds.

## Features

- Real-time English speech recognition
- Automatic translation to Spanish
- Chroma key compatible green background
- Toggle captions on/off with spacebar or clicking the status indicator
- Profanity filter for inappropriate content
- Fade-in/fade-out subtitle animations

## Requirements

- **Browser**: Google Chrome or Microsoft Edge (required for Web Speech API)
- **Protocol**: Must be served over HTTPS or localhost
- **Permissions**: Microphone access required

## Vercel Deployment

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wooodyx/translate)

### Manual Deployment

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

### Local Development with Vercel

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
vercel dev

# Preview deployment
npm run preview
```

## Alternative Hosting (Firebase)

If you prefer Firebase Hosting:

1. **Install Firebase CLI**:

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:

   ```bash
   firebase login
   ```

3. **Initialize Firebase project**:

   ```bash
   firebase init hosting
   ```

   - Select "Use an existing project" or create a new one
   - Set public directory to current directory (.)
   - Configure as single-page app: Yes
   - Set up automatic builds and deploys: No

4. **Deploy to Firebase**:
   ```bash
   firebase deploy
   ```

## Local Development

For local testing, you can use:

- Live Server extension in VS Code
- Python simple server: `python -m http.server 8000`
- Node.js http-server: `npx http-server`

## Usage

1. Open the hosted URL in Chrome or Edge
2. Grant microphone permissions when prompted
3. Speak in English - subtitles will appear in Spanish
4. Press spacebar or click "ON" indicator to toggle captions
5. The green background is transparent for chroma key use

## Configuration

- **Translation API**: Uses Google Translate free API
- **Speech Language**: Set to English (en-US)
- **Target Language**: Spanish (es)
- **Subtitle Duration**: 7 seconds
- **Background**: Chroma key green (#00ff00)

## Troubleshooting

- Ensure you're using Chrome or Edge browser
- Check that the site is served over HTTPS
- Verify microphone permissions are granted
- Check browser console for error messages
- For Vercel deployments, check the deployment logs in Vercel dashboard

## Environment Variables

No environment variables needed - the app uses public APIs.

## Vercel Configuration

The `vercel.json` file includes:

- Static file serving configuration
- Security headers including microphone permissions
- Cache control settings
- SPA routing configuration

## Project Scripts

```bash
npm run dev        # Start development server
npm run build      # Run build validation
npm run deploy     # Build and deploy to production
npm run preview    # Build and create preview deployment
npm run test       # Run validation tests
npm run clean      # Remove build artifacts
```
