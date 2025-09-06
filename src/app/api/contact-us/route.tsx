import { generateEnquiryEmaiTemplate } from "@/lib/generate-mail"
import { transporter } from "@/lib/mailer"

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email, message, phone_number } = await request.json()

    if (!firstname || !lastname || !email || !message || !phone_number) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    console.log(
      `
       \n\n\n
       NEW ENQUIRY: ${lastname}, ${firstname} \n 
       EMAIL: ${email} \n
       PHONE NUMBER: ${phone_number} \n\n
       MESSAGE: ${message}
       \n\n\n
      `
    )

    //todo: get email from env variable
    await transporter.sendMail({
      from: "info@thedentlstudio.com",
      to: process.env.STAFF_MAIL,
      subject: `New Enquiry from ${firstname} ${lastname}`,
      text: `
        You have a new enquiry.
        
        From: ${firstname} ${lastname} <${email}>
        
        Message:
        ${message}
      `,
      html: generateEnquiryEmaiTemplate(firstname, lastname, email, phone_number, message)
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

