import { Resend } from "resend";
import { NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, message, phone, service, budget, source } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Determine subject — client leads get a dedicated subject
    const isClient = source === "client" || !!service;
    const subject = isClient
      ? "New Client Lead from Portfolio"
      : `New Portfolio Message from ${name}`;

    // Build email body for the owner (Tushar)
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
    ];

    if (phone)   lines.push(`Phone: ${phone}`);
    if (service) lines.push(`Service: ${service}`);
    if (budget)  lines.push(`Budget: ${budget}`);

    lines.push("");
    lines.push("Message:");
    lines.push(message);

    const text = lines.join("\n");

    // Allow customizing the sending address via .env, default to Resend onboarding address
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const ownerRecipientEmail = portfolioData.personal.email; // tushkarmakar@gmail.com

    // 1. Send notification email to the portfolio owner (Tushar)
    const ownerEmailData = await resend.emails.send({
      from: fromEmail,
      to: [ownerRecipientEmail],
      subject,
      text, // Plain text fallback
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #0a0f1e; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 30px auto; padding: 40px 30px; background-color: #0c1024; border: 1px solid rgba(0, 212, 255, 0.15); border-radius: 16px; color: #d1d5db; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px; }
    .logo { font-size: 24px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; color: #ffffff; margin-bottom: 4px; }
    .highlight { color: #00d4ff; }
    h1 { font-size: 20px; font-weight: 800; text-transform: uppercase; margin-top: 0; color: #ffffff; letter-spacing: -0.02em; }
    p { font-size: 14px; line-height: 1.6; color: #9ca3af; margin: 0 0 20px 0; }
    .btn { display: inline-block; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; text-align: center; margin: 0 5px; }
    .btn-primary { background: linear-gradient(135deg, #00d4ff 0%, #0284c7 100%); color: #0a0f1e !important; }
    .btn-secondary { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #ffffff !important; }
    .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 11px; font-family: monospace; color: #4b5563; line-height: 1.6; }
    .meta-value { color: #00d4ff; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Tushar <span class="highlight">Karmakar</span></div>
      <div style="font-size: 10px; font-family: monospace; color: #6b7280; text-transform: uppercase; letter-spacing: 0.15em;">
        PORTFOLIO INTAKE ALERT
      </div>
      <div style="font-size: 8px; font-family: monospace; color: #00d4ff; text-transform: uppercase; margin-top: 6px; letter-spacing: 0.2em; opacity: 0.8;">
        [ NEW CLIENT LEAD CAPTURED ]
      </div>
    </div>
    <h1 style="color: #00d4ff; text-align: center; margin-bottom: 10px;">🔥 New Business Inquiry!</h1>
    <p style="text-align: center; color: #e5e7eb;">Congratulations! A fresh prospect inquiry has been captured through your portfolio website. Here are the client's briefing details:</p>
    
    <div style="background-color: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 20px; margin-bottom: 25px; font-size: 14px; color: #e5e7eb; line-height: 1.8;">
      <div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 12px;">
        <strong>Prospect Name:</strong> <span style="color: #ffffff; font-weight: bold;">${name}</span>
      </div>
      <div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 12px;">
        <strong>Prospect Email:</strong> <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a>
      </div>
      ${phone ? `
      <div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 12px;">
        <strong>Phone Number:</strong> <a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>
      </div>` : ""}
      ${service ? `
      <div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 12px;">
        <strong>Requested Service:</strong> <span class="meta-value">${service}</span>
      </div>` : ""}
      ${budget ? `
      <div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 12px;">
        <strong>Project Budget:</strong> <span style="color: #f5a623; font-weight: bold; font-family: monospace;">${budget}</span>
      </div>` : ""}
      <div style="margin-top: 15px;">
        <strong style="display: block; margin-bottom: 6px; color: #ffffff;">Project Brief Message:</strong>
        <div style="background-color: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.03); border-radius: 6px; padding: 12px; font-family: monospace; font-size: 13px; color: #9ca3af; white-space: pre-wrap; line-height: 1.6;">${message}</div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: 12px; color: #6b7280; margin-top: 25px; margin-bottom: 15px;">
      Quick Action: Choose a pathway below to respond to the prospect immediately.
    </p>
    
    <div style="text-align: center; margin-bottom: 20px;">
      <a href="mailto:${email}?subject=Re: Your Project Inquiry - Tushar Karmakar" class="btn btn-primary">✉️ Reply via Email</a>
      ${phone ? `
      <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" target="_blank" class="btn btn-secondary">💬 Chat on WhatsApp</a>` : ""}
    </div>
    
    <div class="footer">
      This is an automated operational alert generated by your Next.js application.<br>
      &copy; ${new Date().getFullYear()} Tushar Karmakar Portfolio. All rights reserved.
    </div>
  </div>
</body>
</html>
      `,
    });

    let clientEmailData = null;
    let clientEmailError = null;
    
    // 2. Send thank you/confirmation email to the sender
    // Note: On unverified Resend sandbox accounts, you can only send to yourself (the registered email).
    // Once a custom domain is verified in Resend, emails can be sent to external users.
    try {
      clientEmailData = await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: `Thank you for reaching out, ${name}! - Tushar Karmakar`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #0a0f1e; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 30px auto; padding: 40px 30px; background-color: #0c1024; border: 1px solid rgba(0, 212, 255, 0.15); border-radius: 16px; color: #d1d5db; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px; }
    .logo { font-size: 24px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; color: #ffffff; margin-bottom: 4px; }
    .highlight { color: #00d4ff; }
    h1 { font-size: 22px; font-weight: 800; text-transform: uppercase; margin-top: 0; color: #ffffff; letter-spacing: -0.02em; }
    p { font-size: 14px; line-height: 1.6; color: #9ca3af; margin: 0 0 20px 0; }
    .btn { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #00d4ff 0%, #0284c7 100%); color: #0a0f1e !important; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; }
    .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 11px; font-family: monospace; color: #4b5563; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Tushar <span class="highlight">Karmakar</span></div>
      <div style="font-size: 10px; font-family: monospace; color: #6b7280; text-transform: uppercase; letter-spacing: 0.15em;">
        Web Developer &amp; Co-Founder, BrandNest Agency
      </div>
      <div style="font-size: 8px; font-family: monospace; color: #00d4ff; text-transform: uppercase; margin-top: 6px; letter-spacing: 0.2em; opacity: 0.8;">
        [ PROJECT INQUIRY STATUS: RECEIVED ]
      </div>
    </div>
    <h1>Thank you for reaching out, ${name}!</h1>
    <p>I have successfully received your project inquiry. Thank you for sharing your vision! Here is a summary of the details you submitted:</p>
    <div style="background-color: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; margin-bottom: 25px; font-family: monospace; font-size: 13px; color: #e5e7eb; line-height: 1.6;">
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      ${phone ? `<strong>Phone:</strong> ${phone}<br>` : ""}
      ${service ? `<strong>Purpose:</strong> ${service}<br>` : ""}
      ${budget ? `<strong>Budget Estimate:</strong> ${budget}<br>` : ""}
      <strong style="display: block; margin-top: 10px;">Message Brief:</strong>
      <span style="color: #9ca3af; display: block; margin-top: 4px; white-space: pre-wrap;">${message}</span>
    </div>
    <p>I am currently reviewing your requirements and will get back to you with a comprehensive proposal and response within 24 hours.</p>
    <p>If your requirement is urgent, please feel free to reach out via WhatsApp/Call directly.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://tushkarmakar.vercel.app" class="btn">Visit My Portfolio</a>
    </div>
    <div class="footer">
      This is an automated confirmation receipt for your project records.<br>
      &copy; ${new Date().getFullYear()} Tushar Karmakar &amp; BrandNest Agency. All rights reserved.<br>
      <a href="https://brandnestagency.vercel.app" style="color: #00d4ff; text-decoration: none;">brandnestagency.vercel.app</a>
    </div>
  </div>
</body>
</html>
        `
      });
    } catch (clientErr) {
      console.warn("Could not send thank-you email to client (this is expected if Resend is in unverified/sandbox mode):", clientErr);
      clientEmailError = clientErr instanceof Error ? clientErr.message : String(clientErr);
    }

    return NextResponse.json({ 
      success: true, 
      ownerEmailData, 
      clientEmailData,
      clientEmailError 
    }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
