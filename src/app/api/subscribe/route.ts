import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Simulate CRM / Email Service Integration
    console.log("New Lead Recieved:", data);
    
    // In production, you would send this to Mailchimp, SendGrid, or Hubspot
    // await emailService.sendGuide(data.email, data.firstName);

    return NextResponse.json({ success: true, message: "Subscription successful. Guide sent." });
  } catch {
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}
