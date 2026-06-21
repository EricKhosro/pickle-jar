"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitContact, isValidEmail } from "@/lib/api";
import {
  Form,
  Field,
  Label,
  Input,
  Textarea,
  ErrorText,
  Status,
} from "./Contact.styles";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<FormState>("idle");

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!isValidEmail(values.email))
      next.email = "Please enter a valid email.";
    if (values.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    return next;
  };

  const onChange = (field: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    setState("submitting");
    try {
      const res = await submitContact(values);
      if (!res.ok) throw new Error("failed");
      setState("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setState("error");
    }
  };

  return (
    <Form onSubmit={onSubmit} noValidate aria-label="Contact form">
      <Field>
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          name="name"
          value={values.name}
          onChange={onChange("name")}
          placeholder="Your name"
          $invalid={!!errors.name}
          aria-invalid={!!errors.name}
        />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange("email")}
          placeholder="you@example.com"
          $invalid={!!errors.email}
          aria-invalid={!!errors.email}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={onChange("message")}
          placeholder="Tell us about your project…"
          $invalid={!!errors.message}
          aria-invalid={!!errors.message}
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
      </Field>

      <Button type="submit" $variant="primary" $size="lg" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Send message"}
      </Button>

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
