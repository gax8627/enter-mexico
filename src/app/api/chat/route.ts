import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    // Strategic Mock Engine for Phase 6
    let content = "That is a great question about Mexican relocation. Based on current 2025 data, here is what you need to know: ";

    if (lastMessage.includes("safe") || lastMessage.includes("seguro")) {
      content = "Safety in Mexico is about managed risk. For example, Mexicali has seen a 12% decrease in violent crime this year, and Merida remains safer than many US cities like New Orleans or St. Louis. We recommend staying within 'Security Corridors' like those in Northern Baja.";
    } else if (lastMessage.includes("solvency") || lastMessage.includes("solvencia") || lastMessage.includes("money") || lastMessage.includes("dinero")) {
      content = "For 2025, residency solvency has increased. Temporary residency typically requires a monthly income around $3,400 - $4,200 USD, or savings of roughly $70k. Permanent residency is higher. These are based on the new daily UMA rates.";
    } else if (lastMessage.includes("mexicali")) {
      content = "Mexicali is the capital of Baja and a strategic hub. It offers the fastest internet in the region (Fiber optic) and a 1:4 cost of living ratio compared to Southern California. You can rent a luxury villa for $1,200 USD.";
    } else if (lastMessage.includes("merida")) {
      content = "Merida is the cultural heart of the Yucatan. It is consistently ranked as the safest city in Mexico, offers colonial charm, and world-class medical facilities. Average luxury rent is $1,100 USD.";
    } else {
      content = "Moving to Mexico is a strategic move. Whether it's the cost arbitrage (often 60% savings) or the lifestyle upgrade, it pays to plan ahead. Would you like to check your residency eligibility or view our top city picks?";
    }

    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({ error: "API Error" }, { status: 500 });
  }
}
