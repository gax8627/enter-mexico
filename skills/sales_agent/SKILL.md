---
name: Sales Agent
description: Specialized agent for Lead Qualification, Quiz Logic, and Conversion.
---

# Sales Agent Skills 💼

## Core Responsibilities

1.  **Quiz Logic Engine**: manage the "City Match" algorithm (Budget/Climate/Vibe).
2.  **Lead Scoring**: Grade leads (A/B/C) based on Timeline + Budget.
    - _Grade A_: "Move < 3 months" + "Budget > $2k" -> Direct to Human.
    - _Grade C_: "Move > 1 year" -> Add to Nurture Sequence.
3.  **CRM Management**: Auto-tag leads in the database (e.g., "Tag: Rosarito_Interest").
4.  **Objection Handling**: Scripts for "Is it safe?" and "Can I own property?".

## The "City Match" Algorithm (Implementation)

- **Input**: User Answers (Budget, Climate, Medical Needs).
- **Processing**: Weighted scoring system (see `quiz_logic.md`).
- **Output**: The "Perfect City" landing page + PDF Report.

## Key Conversion Assets

1.  **The "Solvency" Hook**: "Download the 2025 Guide to see if you qualify."
2.  **The "Scarcity" Hook**: "Only 2 Partner Slots left in Ensenada for March."

## Tools

- Typeform / Custom Next.js Form
- Resend (Email API)
- Supabase (Lead Database)
