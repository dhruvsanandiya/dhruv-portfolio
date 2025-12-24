# Troubleshooting Contact Form 500 Error

If you're getting a 500 error when submitting the contact form, follow these steps:

## Step 1: Check Netlify Function Logs

1. Go to your Netlify Dashboard
2. Navigate to **Functions** tab
3. Click on **sendEmail** function
4. Check the **Logs** section for error messages

Common errors you might see:
- `Missing environment variables` - Environment variables not set
- `Invalid login` - Wrong Gmail App Password
- `Module not found` - Nodemailer not installed

## Step 2: Verify Environment Variables

1. Go to **Site settings** → **Environment variables**
2. Make sure these three variables are set:
   - `GMAIL_USER` = `sanandiyadhruv77@gmail.com`
   - `GMAIL_APP_PASSWORD` = (your 16-character app password)
   - `RECIPIENT_EMAIL` = `sanandiyadhruv77@gmail.com`

**Important:** 
- The `GMAIL_APP_PASSWORD` must be a Gmail App Password, NOT your regular Gmail password
- App passwords are 16 characters (no spaces)
- Generate one at: https://myaccount.google.com/apppasswords

## Step 3: Verify Gmail App Password

1. Go to https://myaccount.google.com/
2. Security → 2-Step Verification (must be enabled)
3. App passwords → Check if you have one generated
4. If not, generate a new one:
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Contact Form"
   - Copy the 16-character password
   - Update it in Netlify environment variables

## Step 4: Redeploy

After setting/updating environment variables:

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**
3. Wait for deployment to complete
4. Test the form again

## Step 5: Test Locally (Optional)

If you want to test locally:

1. Make sure `.env` file exists with correct values
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Run: `netlify dev`
4. Test the form at `http://localhost:8888`

## Common Issues

### "Cannot find module 'nodemailer'"
- Make sure `nodemailer` is in `package.json` dependencies
- Run `npm install` locally
- Redeploy on Netlify

### "Invalid login: 535-5.7.8 Username and Password not accepted"
- Your Gmail App Password is incorrect
- Make sure you're using App Password, not regular password
- Regenerate the App Password and update in Netlify

### "Missing environment variables"
- Environment variables not set in Netlify
- Go to Site settings → Environment variables and add them
- Redeploy after adding

### Function returns 500 but no specific error
- Check Netlify Function logs (Step 1)
- Make sure all environment variables are set correctly
- Verify the function file exists at `netlify/functions/sendEmail.js`

## Still Not Working?

1. Check Netlify status page: https://www.netlifystatus.com/
2. Verify your Netlify plan supports Functions (all plans do, but check limits)
3. Try testing with a simple test email first
4. Contact Netlify support if the issue persists

