# Email Setup Instructions for Contact Form

This portfolio uses Netlify Functions with Nodemailer to send emails when users submit the contact form.

## Setup Steps

### 0. Create .env File (For Local Development)

Create a `.env` file in the root directory with the following content:

```env
# Gmail Configuration for Contact Form
GMAIL_USER=sanandiyadhruv77@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password-here
RECIPIENT_EMAIL=sanandiyadhruv77@gmail.com
```

**Note:** The `.env` file is already in `.gitignore` and won't be committed to git. This is for local testing only.

### 1. Generate Gmail App Password

Since Gmail requires app-specific passwords for SMTP:

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable it if not already enabled)
3. Scroll down to **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Enter "Portfolio Contact Form" as the name
6. Click **Generate**
7. Copy the 16-character password (you'll need this)

### 2. Set Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Add the following variables:

   - **GMAIL_USER**: Your Gmail address (e.g., `sanandiyadhruv77@gmail.com`)
   - **GMAIL_APP_PASSWORD**: The 16-character app password you generated
   - **RECIPIENT_EMAIL**: Your email where you want to receive messages (usually same as GMAIL_USER)

### 3. Deploy

After setting the environment variables, redeploy your site:

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**

### 4. Test the Form

1. Visit your deployed site
2. Fill out and submit the contact form
3. Check your email inbox for the message

## Email Format

When someone submits the form, you'll receive an email with:
- **Subject**: "Portfolio Contact Form: Message from [Name]"
- **From**: Your Gmail address
- **Reply-To**: The sender's email (so you can reply directly)
- **Content**: Formatted HTML email with name, email, and message

## Troubleshooting

### Emails not being sent?

1. Check Netlify Function logs:
   - Go to **Functions** tab in Netlify dashboard
   - Check for any error messages

2. Verify environment variables:
   - Make sure all three variables are set correctly
   - GMAIL_APP_PASSWORD should be the 16-character app password, not your regular password

3. Check Gmail settings:
   - Ensure 2-Step Verification is enabled
   - Make sure you're using an App Password, not your regular password

### Function not found error?

- Make sure `netlify/functions/sendEmail.js` exists
- Check that `netlify.toml` has `functions = "netlify/functions"` configured
- Redeploy the site after adding the function

## Security Notes

- Never commit `.env` file to git
- App passwords are safer than regular passwords
- The function runs server-side, so credentials are secure
- Consider adding rate limiting for production use

