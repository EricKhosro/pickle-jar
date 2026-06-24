import { useState } from "react";
import { ApiResult } from "@/lib/api";

export type FormState = "idle" | "success" | "error";

export default function useFormSubmit<T>(
  submit: (values: T) => Promise<ApiResult>,
  onSuccess?: () => void,
) {
  const [state, setState] = useState<FormState>("idle");

  const run = async (values: T) => {
    try {
      const res = await submit(values);
      if (!res.ok) throw new Error("failed");
      setState("success");
      onSuccess?.();
    } catch {
      setState("error");
    }
  };

  return { state, run };
}
