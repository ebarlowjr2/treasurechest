"use client";

import { useState } from "react";
import { SIGNATURE_SERVICES } from "./signature-services";

// Experiences shown as selectable cards. The Date Night / Day Pod copy is
// placeholder — edit the blurbs (and add pricing/duration/capacity) once the
// real offerings are set.
const EXPERIENCES = [
  {
    id: "catering",
    label: "Bar & Catering",
    blurb:
      "Weddings, parties and corporate events. Pick bar service, a charcuterie bar, a cigar table, or all three.",
  },
  {
    id: "date-night",
    label: "Date Night",
    blurb:
      "An intimate evening pod for two — dinner, games, and a private setup wherever you want it. [Placeholder — edit this description.]",
  },
  {
    id: "day-pod",
    label: "Day Pod",
    blurb:
      "A daytime pod for your group — food, activities, and fun for a few hours. [Placeholder — edit this description.]",
  },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm({
  defaultExperience = "catering",
}: {
  defaultExperience?: string;
}) {
  const [experience, setExperience] = useState(defaultExperience);
  const [services, setServices] = useState<string[]>([]);

  function toggleService(name: string) {
    setServices((cur) =>
      cur.includes(name) ? cur.filter((s) => s !== name) : [...cur, name],
    );
  }
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const chosen = experience === "catering" ? services.join(", ") : "";
    const notes = String(data.get("details") ?? "").trim();
    const payload = {
      experience: EXPERIENCES.find((x) => x.id === experience)?.label ?? experience,
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      date: String(data.get("date") ?? "").trim(),
      time: String(data.get("time") ?? "").trim(),
      guests: String(data.get("guests") ?? "").trim(),
      location: String(data.get("location") ?? "").trim(),
      services: chosen,
      // Also put the services in the notes so they show up even where the
      // intake pipeline doesn't map the "services" field yet.
      details: chosen
        ? `Services requested: ${chosen}${notes ? `\n\n${notes}` : ""}`
        : notes,
    };
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      setStatus("success");
      form.reset();
      setExperience(defaultExperience);
      setServices([]);
    } catch {
      setStatus("error");
      setError(
        "We couldn't send your request. Please try again, or email info@treasurechest-al.com.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="booking-form booking-success" role="status">
        <h3>Request received!</h3>
        <p>
          Thanks for reaching out. We&apos;ll check availability for your date
          and get back to you shortly to lock it in.
        </p>
        <button
          type="button"
          className="button button-ghost"
          onClick={() => setStatus("idle")}
        >
          Book another
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <fieldset className="experience-picker">
        <legend>Choose your experience</legend>
        <div className="experience-options">
          {EXPERIENCES.map((x) => (
            <label
              key={x.id}
              className={
                "experience-option" +
                (experience === x.id ? " is-selected" : "")
              }
            >
              <input
                type="radio"
                name="experience"
                value={x.id}
                checked={experience === x.id}
                onChange={() => setExperience(x.id)}
              />
              <span className="experience-name">{x.label}</span>
              <span className="experience-blurb">{x.blurb}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {experience === "catering" && (
        <fieldset className="addon-picker">
          <legend>What should we bring?</legend>
          <div className="addon-options">
            {SIGNATURE_SERVICES.map((svc) => (
              <label
                key={svc.id}
                className={
                  "addon-option" +
                  (services.includes(svc.name) ? " is-selected" : "")
                }
              >
                <input
                  type="checkbox"
                  checked={services.includes(svc.name)}
                  onChange={() => toggleService(svc.name)}
                />
                <span className="addon-check" aria-hidden="true" />
                {svc.name}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="field-grid">
        <label className="field">
          <span>Full name *</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Email *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="field">
          <span>Phone *</span>
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
        <label className="field">
          <span>Preferred date *</span>
          <input name="date" type="date" required />
        </label>
        <label className="field">
          <span>Preferred time</span>
          <select name="time" defaultValue="">
            <option value="" disabled>
              Select a window
            </option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Flexible</option>
          </select>
        </label>
        <label className="field">
          <span>Guests</span>
          <input name="guests" type="number" min="1" inputMode="numeric" />
        </label>
        <label className="field field-full">
          <span>Location / city *</span>
          <input
            name="location"
            type="text"
            required
            placeholder="Where should we pull up?"
          />
        </label>
        <label className="field field-full">
          <span>Anything else?</span>
          <textarea
            name="details"
            rows={3}
            placeholder="Occasion, theme, dietary needs, questions…"
          />
        </label>
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button
        className="button booking-submit"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Request Booking"}
      </button>
      <p className="form-fineprint">
        This sends a booking request — we&apos;ll confirm your date by email or
        phone.
      </p>
    </form>
  );
}
