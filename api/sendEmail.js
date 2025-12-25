const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing environment variables");
      return res.status(500).json({
        error: "Server configuration error. Please contact the site administrator.",
      });
    }

    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Create transporter using Gmail SMTP
    // Note: GMAIL_APP_PASSWORD must be a 16-character App Password, not your regular password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      // Add timeout and connection options
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
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

    return res.status(200).json({
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Don't expose internal error details to client
    const errorMessage = error.message || "Unknown error occurred";
    
    return res.status(500).json({
      error: "Failed to send email. Please try again later or contact directly at sanandiyadhruv77@gmail.com",
      // Only include details in development
      ...(process.env.NODE_ENV === "development" && { details: errorMessage }),
    });
  }
}

