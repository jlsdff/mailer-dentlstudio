export function generateEmailTemplate(
  firstname: string,
  lastname: string,
  email: string,
  message: string
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Enquiry</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          padding: 20px 30px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        .header img {
          width: 150px;
          height: auto;
        }
        .content {
          padding: 20px 0;
        }
        .content h2 {
          margin: 0 0 10px;
          font-size: 20px;
          color: #222;
        }
        .content p {
          margin: 6px 0;
        }
        .message-box {
          margin-top: 15px;
          padding: 12px;
          background: #f4f4f4;
          border-left: 4px solid #2c3e50;
          font-style: italic;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://www.thedentlstudio.com/logo.png" alt="The Dentl Studio Logo" />
        </div>
        <div class="content">
          <h2>New Enquiry Received</h2>
          <p><strong>Name:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div class="message-box">
            ${message}
          </div>
        </div>
        <div class="footer">
          <p>This email was generated automatically from The Dentl Studio website.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function generateResetPasswordEmailTemplate(
  email: string,
  reset_url: string,
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Password Reset</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #ffffff; /* Changed from #f9f9f9 to white */
          margin: 0;
          padding: 0;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          padding: 20px 30px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        .header img {
          width: 150px;
          height: auto;
        }
        .content {
          padding: 20px 0;
        }
        .content h2 {
          margin: 0 0 10px;
          font-size: 20px;
          color: #222;
        }
        .content p {
          margin: 10px 0;
          line-height: 1.5;
        }
        .reset-button {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 20px;
          background: #2c3e50;
          color: #fff !important;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
        }
        .token-box {
          margin-top: 20px;
          padding: 12px;
          background: #f4f4f4;
          border-left: 4px solid #2c3e50;
          font-family: monospace;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://www.thedentlstudio.com/logo.png" alt="The Dentl Studio Logo" />
        </div>
        <div class="content">
          <h2>Password Reset Request</h2>
          <p>Hello,</p>
          <p>We received a request to reset the password for your account associated with <strong>${email}</strong>.</p>
          <p>You can reset your password by clicking the button below:</p>
          <p>
            <a href="${reset_url}" class="reset-button">Reset Password</a>
          </p>
          <p>If the button doesn’t work, copy and paste this link into your browser:</p>
          <div class="token-box">
            ${reset_url}
          </div>
          <p>If you did not request a password reset, you can safely ignore this email.</p>
        </div>
        <div class="footer">
          <p>This email was generated automatically from The Dentl Studio website.</p>
        </div>
      </div>
    </body>
    </html>
  `
}
