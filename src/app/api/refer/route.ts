import { NextResponse } from 'next/server';
import { calculateLeadScore, getLeadTier } from '@/lib/scoring';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const score = calculateLeadScore(data);
    const tier = getLeadTier(score);

    // Mock Partner Routing Logic
    // In production, this would trigger emails to specific agencies
    console.log(`Lead ${data.email} scored ${score} (${tier}). Routing to partners...`);

    if (tier === 'High-Value') {
      // Logic to notify premium partners immediately
    }

    return NextResponse.json({ 
      success: true, 
      score, 
      tier,
      message: tier === 'High-Value' 
        ? "Priority Partner Match Found." 
        : "Lead recorded for digest." 
    });
  } catch {
    return NextResponse.json({ error: "Referral failed" }, { status: 500 });
  }
}
