type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string;
  consent: boolean;
};

type ApiResult = { ok: boolean };

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(_payload: ContactPayload): Promise<ApiResult> {
  await wait(900);
  return { ok: true };
}

export async function subscribeNewsletter(_email: string): Promise<ApiResult> {
  await wait(900);
  return { ok: true };
}
