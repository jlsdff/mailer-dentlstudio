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

    //todo: get email from env variable
    await transporter.sendMail({
      from: "info@thedentlstudio.com",
      to: "info@thedentlstudio.com",
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
  } catch (error: unknown) {

    let errorMessage = "An unexpected error occurred"

    if (error instanceof Error) {
      errorMessage = error.message
    } else if (typeof error === "string") {
      errorMessage = error
    }

    return Response.json(
      { success: false, message: "Failed to send email ❌", error: errorMessage },
      { status: 500 }
    )

  }
}

