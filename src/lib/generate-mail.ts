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
