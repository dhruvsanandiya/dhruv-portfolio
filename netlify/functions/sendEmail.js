const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the form data
    const { name, email, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "All fields are required" }),
      };
    }

    // Create transporter using Gmail SMTP
    // You'll need to set these environment variables in Netlify
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER, // Send to your email
      replyTo: email, // Allow replying directly to the sender
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ffff; border-bottom: 2px solid #00ffff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong style="color: #333;">Name:</strong> ${name}</p>
            <p><strong style="color: #333;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong style="color: #333;">Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-left: 3px solid #00ffff; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({
        message: "Email sent successfully!",
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send email",
        details: error.message,
      }),
    };
  }
};

