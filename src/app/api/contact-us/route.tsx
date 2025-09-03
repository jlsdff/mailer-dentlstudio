import { generateEmailTemplate } from "@/lib/generate-mail"
import { transporter } from "@/lib/mailer"

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email, message } = await request.json()

    if (!firstname || !lastname || !email || !message) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: "info@thedentlstudio.com",
      to: "juliusterrence.duff@gmail.com",
      subject: `New Enquiry from ${firstname} ${lastname}`,
      text: `
        You have a new enquiry.
        
        From: ${firstname} ${lastname} <${email}>
        
        Message:
        ${message}
      `,
      html: generateEmailTemplate(firstname, lastname, email, message)
    })

    return Response.json(
      { success: true, message: "Email sent successfully ✅" },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Email send error:", error)

    return Response.json(
      { success: false, message: "Failed to send email ❌", error: error.message },
      { status: 500 }
    )
  }
}

