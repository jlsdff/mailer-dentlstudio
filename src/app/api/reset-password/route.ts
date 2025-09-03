import { generateEmailTemplate, generateResetPasswordEmailTemplate } from "@/lib/generate-mail"
import { transporter } from "@/lib/mailer"

export async function POST(request: Request) {
  try {
    const { email, reset_url, token } = await request.json()

    console.log(reset_url)

    if (!email || !reset_url || !token) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: "info@thedentlstudio.com",
      to: "juliusterrence.duff@gmail.com",
      subject: `Password Reset Link`,
      text: `
        Password Reset Link
        The password reset link for ${email} is ${reset_url}
      `,
      html: generateResetPasswordEmailTemplate(email, reset_url)
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

