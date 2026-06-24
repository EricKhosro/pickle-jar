export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string;
  consent: boolean;
};

export type ApiResult = { ok: boolean };

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean =>
  EMAIL_PATTERN.test(email.trim());

export const isCompleteContact = (p: ContactPayload): boolean =>
  p.firstName.trim().length > 0 &&
  p.lastName.trim().length > 0 &&
  isValidEmail(p.email) &&
  p.phone.length >= 6 &&
  p.company.trim().length > 0 &&
  p.budget.length > 0 &&
  p.consent === true;
