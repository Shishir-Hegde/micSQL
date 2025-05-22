import mailgun from "mailgun-js";

// Initialize Mailgun with your credentials
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY!,
  domain: process.env.MAILGUN_DOMAIN!,
});

export async function sendWelcomeEmail(userEmail: string, userName: string) {
  const emailData = {
    from: `Sonexis Team <no-reply@${process.env.MAILGUN_DOMAIN}>`,
    to: userEmail,
    subject: "Welcome to Sonexis - Voice Registration Required",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Welcome to Sonexis, ${userName}!</h2>
        <p>You have been added to the organization. To get started, please follow these steps:</p>
        <ol>
          <li>Log in to your account using your email and password</li>
          <li>Go to your account settings</li>
          <li>Register your voice model by clicking the microphone icon</li>
          <li>Follow the voice registration instructions</li>
        </ol>
        <p>Your voice model is essential for using voice commands in the application.</p>
        <p>If you have any questions, please contact your administrator.</p>
        <p>Best regards,<br>The Sonexis Team</p>
      </div>
    `,
  };

  try {
    const response = await mg.messages().send(emailData);
    console.log("Welcome email sent successfully to:", userEmail);
    return response;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw error;
  }
}
