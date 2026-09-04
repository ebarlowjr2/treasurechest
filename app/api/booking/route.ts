import { NextResponse } from "next/server";

// TreasureChest booking-request intake. Forwards the request to the BLOX
// pipeline (n8n -> Zendesk "Bookings" ticket + Telegram ping). Override the
// endpoint with BOOKING_WEBHOOK_URL if it moves.
const WEBHOOK =
  process.env.BOOKING_WEBHOOK_URL ?? "https://n8n.onecs.net/webhook/tc-booking";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const date = String(body.date ?? "").trim();
  const location = String(body.location ?? "").trim();
  const experience = String(body.experience ?? "").trim() || "Booking";

  if (!name || !email || !phone || !date || !location) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const payload = {
    experience,
    name,
    email,
    phone,
    date,
    time: String(body.time ?? "").trim(),
    guests: String(body.guests ?? "").trim(),
    location,
    details: String(body.details ?? "").trim(),
    source: "treasurechest-al.com",
  };

  try {
    const res = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`intake responded ${res.status}`);
  } catch (err) {
    console.error("[booking] intake forward failed:", err);
    return NextResponse.json(
      { error: "We couldn't submit your booking. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
