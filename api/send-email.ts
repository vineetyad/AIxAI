import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aiagencyindia@gmail.com',
        pass: 'sldl aitm ixxe mrff',
      },
    });

    const mailOptions = {
      from: '"AIxAI Website" <aiagencyindia@gmail.com>',
      to: 'HQ@aixai.co.in',
      replyTo: email,
      subject: `New Lead: ${name} wants to build something amazing!`,
      text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #1B2A4A; padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Connection Request</h1>
            <p style="color: #B8D4E8; margin: 8px 0 0 0; font-size: 15px;">Someone is ready to leverage AI for their business.</p>
          </div>
          
          <div style="padding: 32px 24px; background-color: #ffffff;">
            <div style="margin-bottom: 24px;">
              <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #5A6B7D; margin: 0 0 8px 0; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #5A6B7D; font-weight: 500; width: 80px;">Name</td>
                  <td style="padding: 8px 0; color: #1A2332; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5A6B7D; font-weight: 500;">Email</td>
                  <td style="padding: 8px 0; color: #1A2332; font-weight: 600;"><a href="mailto:${email}" style="color: #4A7FB5; text-decoration: none;">${email}</a></td>
                </tr>
              </table>
            </div>
            
            <div>
              <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #5A6B7D; margin: 0 0 12px 0; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">Message</h2>
              <div style="background-color: #F5F7FA; padding: 20px; border-radius: 8px; color: #1A2332; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          
          <div style="background-color: #F5F7FA; padding: 20px 24px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #5A6B7D; font-size: 13px;">© ${new Date().getFullYear()} AIxAI — AI Agency India</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
