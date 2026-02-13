export interface LeadData {
  firstName: string;
  email: string;
  incomeRange?: string; // '<$2,500', '$2,500-$4k', '$4k-$6k', '$6k+'
  homeStatus?: string; // 'no', 'yes-keep', 'yes-sell'
  timeline?: string; // 'immediately', '3-6-months', '6-12-months', 'just-researching'
  savings?: number;
}

export function calculateLeadScore(data: LeadData): number {
  let score = 0;

  // Income Scoring
  if (data.incomeRange === '$6k+') score += 40;
  else if (data.incomeRange === '$4k-$6k+') score += 20;

  // Home Equity Scoring (Highest weight)
  if (data.homeStatus === 'yes-sell') score += 50;
  else if (data.homeStatus === 'yes-keep') score += 20;

  // Timeline Scoring
  if (data.timeline === 'immediately') score += 30;
  else if (data.timeline === '3-6-months') score += 15;

  return score;
}

export function getLeadTier(score: number): 'High-Value' | 'Nurture' | 'General' {
  if (score >= 70) return 'High-Value';
  if (score >= 30) return 'Nurture';
  return 'General';
}
