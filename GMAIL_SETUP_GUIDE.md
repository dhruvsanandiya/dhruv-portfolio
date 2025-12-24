# Gmail App Password Setup Guide

## The Error You're Seeing

```
Error: Invalid login: 535-5.7.8 Username and Password not accepted
```

This means Gmail is rejecting your login credentials. **You MUST use a Gmail App Password, not your regular Gmail password.**

## Step-by-Step: Generate Gmail App Password

### Step 1: Enable 2-Step Verification

1. Go to https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Under "Signing in to Google", find **2-Step Verification**
4. If it's **OFF**, click it and follow the steps to enable it
   - You'll need to verify your phone number
   - This is REQUIRED before you can create App Passwords

### Step 2: Generate App Password

1. Go to https://myaccount.google.com/apppasswords
   - Or: Security → 2-Step Verification → App passwords (at the bottom)
2. You may be asked to sign in again
3. Under "Select app", choose **Mail**
4. Under "Select device", choose **Other (Custom name)**
5. Type: `Portfolio Contact Form`
6. Click **Generate**
7. **IMPORTANT:** You'll see a 16-character password like: `abcd efgh ijkl mnop`
   - **Copy this immediately** - you can only see it once!
   - Remove all spaces when using it (it should be 16 characters with no spaces)

### Step 3: Set in Netlify

1. Go to your Netlify Dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Find or add `GMAIL_APP_PASSWORD`
5. Paste the 16-character password (NO SPACES)
   - Example: `abcdefghijklmnop` (not `abcd efgh ijkl mnop`)
6. Click **Save**

### Step 4: Verify Other Variables

Make sure these are also set correctly:

- `GMAIL_USER` = `sanandiyadhruv77@gmail.com` (your full Gmail address)
- `RECIPIENT_EMAIL` = `sanandiyadhruv77@gmail.com` (where to receive emails)

### Step 5: Redeploy

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**
3. Wait for deployment to complete
4. Test the form again

## Common Mistakes

### ❌ Wrong: Using Regular Password
```
GMAIL_APP_PASSWORD=myregularpassword123
```
This will NOT work! Gmail blocks regular passwords for SMTP.

### ✅ Correct: Using App Password
```
GMAIL_APP_PASSWORD=abcdefghijklmnop
```
16 characters, no spaces, generated from App Passwords page.

### ❌ Wrong: Including Spaces
```
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```
Remove all spaces - it should be one continuous string.

### ✅ Correct: No Spaces
```
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

## Still Getting the Error?

### Check 1: Verify App Password Format
- Must be exactly 16 characters
- No spaces
- Only letters and numbers
- Generated from https://myaccount.google.com/apppasswords

### Check 2: Verify 2-Step Verification is ON
- Go to https://myaccount.google.com/security
- "2-Step Verification" should show as **ON**
- If OFF, enable it first, then generate App Password

### Check 3: Check Environment Variables in Netlify
1. Go to Site settings → Environment variables
2. Verify:
   - `GMAIL_USER` exists and is correct
   - `GMAIL_APP_PASSWORD` exists and is 16 characters (no spaces)
   - `RECIPIENT_EMAIL` exists

### Check 4: Regenerate App Password
If you're not sure if the password is correct:
1. Go to https://myaccount.google.com/apppasswords
2. Find "Portfolio Contact Form" in the list
3. Click the trash icon to delete it
4. Generate a new one
5. Update in Netlify
6. Redeploy

### Check 5: Test with Different Email
If you have another Gmail account:
1. Try setting up the form with that account
2. If it works, the issue is with the original account's settings
3. Check if "Less secure app access" is enabled (though App Passwords should work regardless)

## Alternative: Use a Different Email Service

If Gmail continues to give issues, you can use:
- SendGrid (free tier available)
- Mailgun (free tier available)
- AWS SES (free tier available)

But Gmail App Passwords should work once set up correctly!

## Quick Checklist

- [ ] 2-Step Verification is ENABLED
- [ ] App Password generated from https://myaccount.google.com/apppasswords
- [ ] App Password is exactly 16 characters (no spaces)
- [ ] `GMAIL_USER` set in Netlify = your full Gmail address
- [ ] `GMAIL_APP_PASSWORD` set in Netlify = 16-char App Password (no spaces)
- [ ] `RECIPIENT_EMAIL` set in Netlify = your email
- [ ] Site redeployed after setting variables
- [ ] Tested the form again

## Need Help?

If you've followed all steps and still get the error:
1. Check Netlify Function logs for the exact error message
2. Try regenerating the App Password
3. Make sure you're copying the password correctly (no extra spaces or characters)

