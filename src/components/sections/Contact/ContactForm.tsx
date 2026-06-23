"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "@/components/ui/Select";
import { submitContact, EMAIL_PATTERN } from "@/lib/api";
import {
  Form,
  Field,
  Label,
  Req,
  Input,
  Textarea,
  ErrorText,
  SubmitRow,
  SubmitButton,
  Consent,
  Checkbox,
  Status,
} from "./Contact.styles";

interface ContactValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string;
  consent: boolean;
}

type FormState = "idle" | "success" | "error";

const BUDGETS = ["< $5k", "$5k – $10k", "$10k – $25k", "$25k+"];

export default function ContactForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ mode: "onTouched" });
  const [state, setState] = useState<FormState>("idle");

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await submitContact(values);
      if (!res.ok) throw new Error("failed");
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  });

  return (
    <Form onSubmit={onSubmit} noValidate aria-label="Contact form">
      <Field>
        <Label htmlFor="c-first">
          First name <Req>*</Req>
        </Label>
        <Input
          id="c-first"
          placeholder="First name"
          $invalid={!!errors.firstName}
          aria-invalid={!!errors.firstName}
          {...register("firstName", { required: "Please enter your first name." })}
        />
        {errors.firstName && <ErrorText>{errors.firstName.message}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="c-last">
          Last name <Req>*</Req>
        </Label>
        <Input
          id="c-last"
          placeholder="Last name"
          $invalid={!!errors.lastName}
          aria-invalid={!!errors.lastName}
          {...register("lastName", { required: "Please enter your last name." })}
        />
        {errors.lastName && <ErrorText>{errors.lastName.message}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="c-email">
          Email address <Req>*</Req>
        </Label>
        <Input
          id="c-email"
          type="email"
          placeholder="Email address"
          $invalid={!!errors.email}
          aria-invalid={!!errors.email}
          {...register("email", {
            required: "Please enter your email.",
            pattern: { value: EMAIL_PATTERN, message: "Please enter a valid email." },
          })}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="c-phone">
          Phone number <Req>*</Req>
        </Label>
        <Input
          id="c-phone"
          type="tel"
          placeholder="Phone number"
          $invalid={!!errors.phone}
          aria-invalid={!!errors.phone}
          {...register("phone", {
            required: "Please enter your phone number.",
            minLength: { value: 6, message: "Please enter a valid phone number." },
          })}
        />
        {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="c-company">
          Company name <Req>*</Req>
        </Label>
        <Input
          id="c-company"
          placeholder="Company name"
          $invalid={!!errors.company}
          aria-invalid={!!errors.company}
          {...register("company", { required: "Please enter your company name." })}
        />
        {errors.company && <ErrorText>{errors.company.message}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="c-budget">
          Budget <Req>*</Req>
        </Label>
        <Controller
          control={control}
          name="budget"
          rules={{ required: "Please select a budget." }}
          render={({ field }) => (
            <Select
              id="c-budget"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              options={BUDGETS}
              placeholder="Select"
              invalid={!!errors.budget}
            />
          )}
        />
        {errors.budget && <ErrorText>{errors.budget.message}</ErrorText>}
      </Field>

      <Field $full>
        <Label htmlFor="c-message">Message</Label>
        <Textarea
          id="c-message"
          placeholder="Your message"
          {...register("message")}
        />
      </Field>

      <SubmitRow>
        <div>
          <Consent>
            <Checkbox
              type="checkbox"
              $invalid={!!errors.consent}
              aria-invalid={!!errors.consent}
              {...register("consent", { required: true })}
            />
            <span>
              I agree to the processing of my data per the{" "}
              <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">
                Terms &amp; Conditions.
              </a>
            </span>
          </Consent>
          {errors.consent && (
            <ErrorText>Please accept the terms to continue.</ErrorText>
          )}
        </div>

        <SubmitButton
          type="submit"
          $variant="primary"
          $size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Submit request"}
        </SubmitButton>
      </SubmitRow>

      {state === "success" && (
        <Status role="status">Thanks! We&apos;ll be in touch soon.</Status>
      )}
      {state === "error" && (
        <Status role="status" $error>
          Something went wrong. Please try again.
        </Status>
      )}
    </Form>
  );
}
