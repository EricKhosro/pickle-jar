"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { subscribeNewsletter, EMAIL_PATTERN } from "@/lib/api";
import {
  Newsletter,
  NewsletterTitle,
  NewsletterText,
  NewsletterRow,
  NewsletterInput,
  SubmitButton,
  ErrorText,
  Status,
} from "./Contact.styles";

interface NewsletterValues {
  email: string;
}

type FormState = "idle" | "success" | "error";

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ mode: "onTouched" });
  const [state, setState] = useState<FormState>("idle");

  const onSubmit = handleSubmit(async ({ email }) => {
    try {
      const res = await subscribeNewsletter(email);
      if (!res.ok) throw new Error("failed");
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  });

  return (
    <Newsletter>
      <NewsletterTitle>Stay in the loop</NewsletterTitle>
      <NewsletterText>
        Get new releases, dev updates, and the occasional pickle in your inbox.
      </NewsletterText>

      <NewsletterRow onSubmit={onSubmit} noValidate aria-label="Newsletter signup">
        <NewsletterInput
          type="email"
          placeholder="you@example.com"
          aria-label="Email address"
          $invalid={!!errors.email}
          aria-invalid={!!errors.email}
          {...register("email", {
            required: "Please enter your email.",
            pattern: { value: EMAIL_PATTERN, message: "Please enter a valid email." },
          })}
        />
        <SubmitButton type="submit" $variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "…" : "Subscribe"}
        </SubmitButton>
      </NewsletterRow>

      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      {state === "success" && (
        <Status role="status">You&apos;re in — welcome to the jar! 🥒</Status>
      )}
      {state === "error" && (
        <Status role="status" $error>
          Something went wrong. Please try again.
        </Status>
      )}
    </Newsletter>
  );
}
