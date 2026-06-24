import { FormState } from "@/hooks/useFormSubmit";
import { Status } from "./Contact.styles";

type FormStatusProps = {
  state: FormState;
  successText: string;
};

export default function FormStatus({ state, successText }: FormStatusProps) {
  if (state === "success") {
    return <Status role="status">{successText}</Status>;
  }
  if (state === "error") {
    return (
      <Status role="status" $error>
        Something went wrong. Please try again.
      </Status>
    );
  }
  return null;
}
