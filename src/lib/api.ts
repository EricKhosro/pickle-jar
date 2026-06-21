type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type ApiResult = { ok: boolean };

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export async function submitContact(_payload: ContactPayload): Promise<ApiResult> {
  await wait(900);
  return { ok: true };
}

export async function subscribeNewsletter(_email: string): Promise<ApiResult> {
  await wait(900);
  return { ok: true };
}

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
