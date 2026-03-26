import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "mail.northhimalayantraders.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = String(process.env.SMTP_SECURE || "true") === "true";
    const user = process.env.SMTP_USER || "info@northhimalayantraders.com";
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_RECEIVER_EMAIL || "support@northhimalayantraders.com";
    const from = process.env.SMTP_FROM || user;

    if (!pass) {
      return NextResponse.json(
        { ok: false, error: "SMTP password is missing on server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const textBody = [
      "New Contact Form Submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      subject: `Website Contact Form - ${name}`,
      replyTo: email,
      text: textBody,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}

