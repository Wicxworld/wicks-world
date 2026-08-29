"use server";

import { persistLead, sendLeadEmail, type StoredLead } from "@/lib/leads";
import {
  hasErrors,
  parseContactForm,
  validateContact,
  type FieldErrors,
} from "@/lib/validation";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  emailSent?: boolean;
  errors?: FieldErrors;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot.length > 0) {
    return {
      status: "success",
      message: "Thank you. We have received your enquiry.",
      emailSent: false,
    };
  }

  const payload = parseContactForm(formData);
  const errors = validateContact(payload);

  if (hasErrors(errors)) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
    };
  }

  const emailAttempted = Boolean(
    process.env.CONTACT_EMAIL?.trim() && process.env.RESEND_API_KEY?.trim(),
  );

  const draft: StoredLead = {
    ...payload,
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    emailAttempted,
    emailSent: false,
  };

  let emailSent = false;
  if (emailAttempted) {
    emailSent = await sendLeadEmail(draft);
  }

  const saved = await persistLead({ ...draft, emailSent });
  if (!saved) {
    return {
      status: "error",
      message:
        "We could not save the enquiry on the server. Please try again, or write to us another way if this continues.",
    };
  }

  if (emailSent) {
    return {
      status: "success",
      message:
        "Thank you. We have received your enquiry and sent a copy by email. We will be in touch.",
      emailSent: true,
    };
  }

  return {
    status: "success",
    message: "Thank you. We have received your enquiry. We will be in touch.",
    emailSent: false,
  };
}
