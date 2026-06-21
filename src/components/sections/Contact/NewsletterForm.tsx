"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { subscribeNewsletter, isValidEmail } from "@/lib/api";
import {
  NewsletterCard,
  NewsletterTitle,
  NewsletterRow,
  NewsletterInput,
  ErrorText,
  Status,
} from "./Contact.styles";

type FormState = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<FormState>("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError(null);
    setState("submitting");
    try {
      const res = await subscribeNewsletter(email);
      if (!res.ok) throw new Error("failed");
      setState("success");
      setEmail("");
    } catch {
      setState("error");
    }
  };

  return (
    <NewsletterCard>
      <NewsletterTitle>Join the jar</NewsletterTitle>
      <p>Get new releases, dev updates, and the occasional pickle in your inbox.</p>

      <NewsletterRow onSubmit={onSubmit} noValidate aria-label="Newsletter signup">
        <NewsletterInput
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null);
          }}
          placeholder="you@example.com"
          aria-label="Email address"
          $invalid={!!error}
          aria-invalid={!!error}
        />
        <Button
          type="submit"
          $variant="primary"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "…" : "Subscribe"}
        </Button>
      </NewsletterRow>

      {error && <ErrorText>{error}</ErrorText>}
      {state === "success" && (
        <Status role="status">You&apos;re in — welcome to the jar! 🥒</Status>
      )}
      {state === "error" && (
        <Status role="status" $error>
          Something went wrong. Please try again.
        </Status>
      )}
    </NewsletterCard>
  );
}
