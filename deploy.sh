#!/bin/bash


# ./deploy.sh


# Exit on error
set -e

echo "Starting the build process..."

# Step 1: Run the build
npm run build

echo "Build successful! Proceeding with branch update..."

# Step 2: Switch to the main branch
git checkout main

# Step 3: Reset main to match Dev
git reset --hard Dev

# Step 4: Push changes to GitHub
git push --force origin main

echo "Dev branch has been successfully copied to Main!"
