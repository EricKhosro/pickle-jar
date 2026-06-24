"use client";

import { useForm } from "react-hook-form";
import { EMAIL_PATTERN } from "@/lib/api";
import { subscribeNewsletter } from "@/lib/actions";
import useFormSubmit from "@/hooks/useFormSubmit";
import FormStatus from "./FormStatus";
import {
  Newsletter,
  NewsletterTitle,
  NewsletterText,
  NewsletterRow,
  NewsletterInput,
  SubmitButton,
  ErrorText,
} from "./Contact.styles";

interface NewsletterValues {
  email: string;
}

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<NewsletterValues>({ mode: "onTouched" });
  const { state, run } = useFormSubmit(
    ({ email }: NewsletterValues) => subscribeNewsletter(email),
    reset,
  );

  const onSubmit = handleSubmit(run);

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
        <SubmitButton
          type="submit"
          $variant="primary"
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting ? "…" : "Subscribe"}
        </SubmitButton>
      </NewsletterRow>

      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      <FormStatus state={state} successText="You're in — welcome to the jar! 🥒" />
    </Newsletter>
  );
}
