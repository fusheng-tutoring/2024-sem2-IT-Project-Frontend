## IT Project Frontend

## Step 1: Set Up Firebase
```bash
# Install the firebase CLI
npm install -g firebase-tools
```

## Step 2: Log In
```bash
# Log In firebase account
firebase login
```

## Step 3: Firebase Initialisation
```bash
firebase init

# Are you ready to proceed => Y
# Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys => [SPACE KEY] Select => [ENTER KEY] Confirm
```

## Step 4: Create The Project Base
```bash
# Use an existing project => Select
# What do you want to use as your public directory? => out
# Configure as a single-page app (rewrite all urls to /index.html)? Y
# Set up automatic builds and deploys with GitHub? N
# ? File out/index.html already exists. Overwrite? N
```

## Step 5: Deployment
```bash
# Set up the out put folder by building them
npm run build

# Deploy to Firebase
firebase deploy
```