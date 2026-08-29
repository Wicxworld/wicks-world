"use client";

import { useActionState, useId } from "react";
import { submitContact, type ContactState } from "@/actions/contact";
import {
  budgetRanges,
  hearAboutOptions,
  projectTypes,
  timelines,
} from "@/content/services";
import type { FieldErrors } from "@/lib/validation";

const initial: ContactState = {
  status: "idle",
  message: "",
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-[#8a3a32]">
      {message}
    </p>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  errors,
  hint,
}: {
  label: string;
  name: keyof FieldErrors;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  errors?: FieldErrors;
  hint?: string;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const error = errors?.[name];

  return (
    <div>
      <label htmlFor={id} className="type-label block">
        {label}
        {required ? null : (
          <span className="ml-2 normal-case tracking-normal text-mist">
            Optional
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="input mt-3"
      />
      {hint && !error ? <p className="type-caption mt-2">{hint}</p> : null}
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  errors,
}: {
  label: string;
  name: keyof FieldErrors;
  options: readonly string[];
  required?: boolean;
  errors?: FieldErrors;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const error = errors?.[name];

  return (
    <div>
      <label htmlFor={id} className="type-label block">
        {label}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="select mt-3"
      >
        <option value="" disabled>
          Choose
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);
  const formId = useId();

  if (state.status === "success") {
    return (
      <div className="frame bg-[var(--bg-elevated)] p-8 sm:p-10" role="status">
        <p className="type-label">Received</p>
        <h2 className="type-section mt-4">Thank you.</h2>
        <p className="type-body mt-5 text-mist">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative space-y-8" noValidate>
      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && state.message ? (
        <p
          className="border border-[#8a3a32]/40 bg-[#8a3a32]/8 px-4 py-3 text-sm"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-8 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          autoComplete="name"
          errors={state.errors}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          errors={state.errors}
        />
        <Field
          label="Company or brand"
          name="company"
          autoComplete="organization"
          errors={state.errors}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          errors={state.errors}
        />
      </div>

      <SelectField
        label="Project type"
        name="projectType"
        options={projectTypes}
        required
        errors={state.errors}
      />

      <div>
        <label htmlFor={`${formId}-need`} className="type-label block">
          What do you need?
        </label>
        <textarea
          id={`${formId}-need`}
          name="need"
          required
          rows={3}
          className="textarea mt-3 min-h-[6rem]"
          aria-invalid={state.errors?.need ? true : undefined}
          aria-describedby={state.errors?.need ? `${formId}-need-error` : undefined}
        />
        <FieldError id={`${formId}-need-error`} message={state.errors?.need} />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <SelectField
          label="Timeline"
          name="timeline"
          options={timelines}
          required
          errors={state.errors}
        />
        <SelectField
          label="Budget range"
          name="budgetRange"
          options={budgetRanges}
          required
          errors={state.errors}
        />
      </div>

      <Field
        label="Where is the work based?"
        name="location"
        required
        errors={state.errors}
        hint="City, or remote."
      />

      <div>
        <label htmlFor={`${formId}-details`} className="type-label block">
          Project details
        </label>
        <textarea
          id={`${formId}-details`}
          name="details"
          required
          rows={8}
          className="textarea mt-3"
          aria-invalid={state.errors?.details ? true : undefined}
          aria-describedby={
            state.errors?.details ? `${formId}-details-error` : undefined
          }
        />
        <FieldError
          id={`${formId}-details-error`}
          message={state.errors?.details}
        />
      </div>

      <SelectField
        label="How did you hear about us?"
        name="heardAbout"
        options={hearAboutOptions}
        required
        errors={state.errors}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Sending…" : "Send enquiry"}
        </button>
        <p className="type-caption max-w-sm">
          Sending this form is a request to start a conversation. It is not a
          booking.
        </p>
      </div>
    </form>
  );
}
