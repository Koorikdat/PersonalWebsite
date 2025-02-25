#!/bin/bash


# ./deploy.sh


# Exit on error
set -e

echo "Starting the build process..."

# Run the build
npm run build

echo "Build successful! Proceeding with branch update..."

# Switch to the main branch
git checkout main

# Reset main to match Dev
git reset --hard Dev

# Push changes to GitHub
git push --force origin main

echo "Dev branch has been successfully copied to Main!"

# deploy the file from main to github pages
npm run deploy

echo "Deployed from main"
