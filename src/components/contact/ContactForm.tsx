"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/actions/contact";
import {
  budgetRanges,
  hearAboutOptions,
  projectTypes,
  timelines,
} from "@/content/services";

const initial: ContactState = {
  status: "idle",
  message: "",
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-sm text-[#8a3a32]" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div
        className="border border-[var(--rule)] bg-[var(--bg-elevated)] p-8 sm:p-10"
        role="status"
      >
        <p className="type-label">Received</p>
        <h2 className="mt-4 font-display text-3xl tracking-tight">
          Thank you.
        </h2>
        <p className="mt-4 max-w-lg leading-relaxed text-ink/80">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-6" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message ? (
        <p className="border border-[#8a3a32]/40 bg-[#8a3a32]/8 px-4 py-3 text-sm" role="alert">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="type-label">
            Name
          </label>
          <input id="name" name="name" className="input mt-2" autoComplete="name" required aria-invalid={Boolean(state.errors?.name)} />
          <FieldError message={state.errors?.name} />
        </div>
        <div>
          <label htmlFor="email" className="type-label">
            Email
          </label>
          <input id="email" name="email" type="email" className="input mt-2" autoComplete="email" required aria-invalid={Boolean(state.errors?.email)} />
          <FieldError message={state.errors?.email} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="type-label">
            Company / Brand
          </label>
          <input id="company" name="company" className="input mt-2" autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="phone" className="type-label">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className="input mt-2" autoComplete="tel" aria-invalid={Boolean(state.errors?.phone)} />
          <FieldError message={state.errors?.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="type-label">
          Project type
        </label>
        <select id="projectType" name="projectType" className="select mt-2" required defaultValue="" aria-invalid={Boolean(state.errors?.projectType)}>
          <option value="" disabled>
            Select a service
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <FieldError message={state.errors?.projectType} />
      </div>

      <div>
        <label htmlFor="need" className="type-label">
          What do you need?
        </label>
        <input id="need" name="need" className="input mt-2" required aria-invalid={Boolean(state.errors?.need)} />
        <FieldError message={state.errors?.need} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="timeline" className="type-label">
            Timeline
          </label>
          <select id="timeline" name="timeline" className="select mt-2" required defaultValue="" aria-invalid={Boolean(state.errors?.timeline)}>
            <option value="" disabled>
              Select
            </option>
            {timelines.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <FieldError message={state.errors?.timeline} />
        </div>
        <div>
          <label htmlFor="budgetRange" className="type-label">
            Budget range
          </label>
          <select id="budgetRange" name="budgetRange" className="select mt-2" required defaultValue="" aria-invalid={Boolean(state.errors?.budgetRange)}>
            <option value="" disabled>
              Select a band
            </option>
            {budgetRanges.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <FieldError message={state.errors?.budgetRange} />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="type-label">
          Location
        </label>
        <input id="location" name="location" className="input mt-2" required aria-invalid={Boolean(state.errors?.location)} />
        <FieldError message={state.errors?.location} />
      </div>

      <div>
        <label htmlFor="details" className="type-label">
          Project details
        </label>
        <textarea id="details" name="details" className="textarea mt-2" required aria-invalid={Boolean(state.errors?.details)} />
        <FieldError message={state.errors?.details} />
      </div>

      <div>
        <label htmlFor="heardAbout" className="type-label">
          How did you hear about us?
        </label>
        <select id="heardAbout" name="heardAbout" className="select mt-2" required defaultValue="" aria-invalid={Boolean(state.errors?.heardAbout)}>
          <option value="" disabled>
            Select
          </option>
          {hearAboutOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <FieldError message={state.errors?.heardAbout} />
      </div>

      <button type="submit" className="btn btn-primary justify-self-start" disabled={pending}>
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
