"use client";

import type { ChangeEvent } from "react";
import { useForm, Controller, type UseFormRegisterReturn } from "react-hook-form";
import Select from "@/components/ui/Select";
import { EMAIL_PATTERN, type ContactPayload } from "@/lib/api";
import { submitContact } from "@/lib/actions";
import useFormSubmit from "@/hooks/useFormSubmit";
import FormStatus from "./FormStatus";
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
} from "./Contact.styles";

const BUDGETS = ["< $5k", "$5k – $10k", "$10k – $25k", "$25k+"];

const NAME_CHARS = /[^\p{L}\s']/gu;
const NAME_PATTERN = /^[\p{L}\s']+$/u;
const NON_DIGITS = /\D/g;
const PHONE_PATTERN = /^\+?\d+$/;

const stripName = (v: string) => v.replace(NAME_CHARS, "");
const stripPhone = (v: string) =>
  (v.startsWith("+") ? "+" : "") + v.replace(NON_DIGITS, "");

const restrict = (
  reg: UseFormRegisterReturn,
  sanitize: (value: string) => string,
) => ({
  ...reg,
  onChange: (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = sanitize(e.target.value);
    return reg.onChange(e);
  },
});

export default function ContactForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactPayload>({ mode: "onTouched" });
  const { state, run } = useFormSubmit(submitContact, reset);

  const onSubmit = handleSubmit(run);

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
          {...restrict(
            register("firstName", {
              required: "Please enter your first name.",
              pattern: { value: NAME_PATTERN, message: "Letters only." },
            }),
            stripName,
          )}
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
          {...restrict(
            register("lastName", {
              required: "Please enter your last name.",
              pattern: { value: NAME_PATTERN, message: "Letters only." },
            }),
            stripName,
          )}
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
          inputMode="numeric"
          placeholder="Phone number"
          $invalid={!!errors.phone}
          aria-invalid={!!errors.phone}
          {...restrict(
            register("phone", {
              required: "Please enter your phone number.",
              minLength: { value: 6, message: "Please enter a valid phone number." },
              pattern: { value: PHONE_PATTERN, message: "Numbers only." },
            }),
            stripPhone,
          )}
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
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting ? "Sending…" : "Submit request"}
        </SubmitButton>
      </SubmitRow>

      <FormStatus state={state} successText="Thanks! We'll be in touch soon." />
    </Form>
  );
}
