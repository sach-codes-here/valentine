# Valentine's Day Surprise Site 💕

A beautiful, interactive Valentine's Day website built with React, Vite, and Framer Motion.

## Features

- ✨ Beautiful animated Valentine's Day card
- 💕 Romantic messages that appear on button clicks
- 🎨 Modern UI with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 📱 Responsive design

## Configuration

### Setting the Girlfriend's Name

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Then edit `.env` and set the name:

```
VITE_GIRLFRIEND_NAME=Your Girlfriend's Name
```

Replace `Your Girlfriend's Name` with the actual name you want to display.

## Local Development

```bash
npm install
npm run dev
```

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Create a GitHub repository** (if you haven't already)
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Set the Girlfriend's Name for Production** (Optional):
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `VITE_GIRLFRIEND_NAME`
   - Value: The name you want to display (e.g., "Sarah")
   - Click **Add secret**
   
   Alternatively, you can use **Variables** instead of **Secrets** if you prefer.

4. **Push your code**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push
   ```

5. **Wait for deployment**: The GitHub Actions workflow will automatically build and deploy your site. You can check the progress in the **Actions** tab.

6. **Access your site**: Once deployed, your site will be available at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

The deployment happens automatically on every push to the `main` or `master` branch!
