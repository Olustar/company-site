"use client";

import { FormEvent, useState } from "react";
import { BlurReveal } from "@/components/blur-reveal";

const WAITLIST_EMAIL = "contact@sincerelygrey.com";

function buildGmailComposeUrl(visitorEmail: string) {
  const subject = "Waitlist Request: Sincerely Grey";
  const body = [
    "Hello Sincerely Grey team,",
    "",
    "Please add me to the waitlist for launch-day access.",
    "",
    `My email: ${visitorEmail}`,
    "",
    "Thank you!",
  ].join("\n");

  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: WAITLIST_EMAIL,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function CollectionSection() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    window.open(buildGmailComposeUrl(trimmed), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="bg-background px-6 py-28 md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.22em] text-muted-foreground">The beginning</p>
        <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl">Be first in line.</h2>
        <BlurReveal
          className="mx-auto mt-8 max-w-lg text-base leading-7 text-muted-foreground md:text-lg md:leading-8"
          text="Sincerely Grey launches soon. Join the list for early access, launch-day drops, and a first look at what we have been making."
        />
        {submitted ? (
          <div className="mx-auto mt-10 max-w-md animate-fade-up rounded-2xl border border-accent/40 px-6 py-5 text-base text-foreground">
            Almost there: we opened a pre-filled email in a new tab. Just hit send and you are on the list.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="min-h-12 flex-1 rounded-full border border-border bg-secondary px-6 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
            />
            <button type="submit" className="btn-glow min-h-12 rounded-full bg-primary px-7 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-80">
              Notify Me
            </button>
          </form>
        )}
        <p className="mt-5 text-sm text-muted-foreground">No spam. One email when we launch, and a few before then.</p>
      </div>
    </section>
  );
}
