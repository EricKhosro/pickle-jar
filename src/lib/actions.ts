"use server";

import {
  type ApiResult,
  type ContactPayload,
  isCompleteContact,
  isValidEmail,
} from "@/lib/api";

const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export async function submitContact(
  payload: ContactPayload,
): Promise<ApiResult> {
  await wait(900);
  if (!isCompleteContact(payload)) return { ok: false };
  // here we can forward to an email / CRM provider here
  return { ok: true };
}

export async function subscribeNewsletter(email: string): Promise<ApiResult> {
  await wait(900);
  if (!isValidEmail(email)) return { ok: false };
  // here we can forward to a newsletter provider here
  return { ok: true };
}
