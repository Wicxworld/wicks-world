import {
  budgetRanges,
  hearAboutOptions,
  projectTypes,
  timelines,
} from "@/content/services";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  need: string;
  timeline: string;
  budgetRange: string;
  location: string;
  details: string;
  heardAbout: string;
};

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isOneOf(value: string, list: readonly string[]) {
  return (list as readonly string[]).includes(value);
}

export function parseContactForm(form: FormData): ContactPayload {
  const read = (key: string) => {
    const value = form.get(key);
    return typeof value === "string" ? value.trim() : "";
  };

  return {
    name: read("name"),
    email: read("email"),
    company: read("company"),
    phone: read("phone"),
    projectType: read("projectType"),
    need: read("need"),
    timeline: read("timeline"),
    budgetRange: read("budgetRange"),
    location: read("location"),
    details: read("details"),
    heardAbout: read("heardAbout"),
  };
}

export function validateContact(payload: ContactPayload): FieldErrors {
  const errors: FieldErrors = {};

  if (payload.name.length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!emailPattern.test(payload.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (payload.phone && payload.phone.length < 7) {
    errors.phone = "Please enter a fuller phone number, or leave this blank.";
  }
  if (!isOneOf(payload.projectType, projectTypes)) {
    errors.projectType = "Please choose a project type.";
  }
  if (payload.need.length < 8) {
    errors.need = "Please tell us what you need, even briefly.";
  }
  if (payload.need.length > 500) {
    errors.need = "Please keep this under 500 characters. Use project details for the rest.";
  }
  if (!isOneOf(payload.timeline, timelines)) {
    errors.timeline = "Please choose a timeline.";
  }
  if (!isOneOf(payload.budgetRange, budgetRanges)) {
    errors.budgetRange = "Please choose a budget range.";
  }
  if (payload.location.length < 2) {
    errors.location = "Please tell us where the work is based.";
  }
  if (payload.details.length < 20) {
    errors.details = "Please describe the project in a little more detail.";
  }
  if (payload.details.length > 4000) {
    errors.details = "Please keep the description under 4,000 characters.";
  }
  if (!isOneOf(payload.heardAbout, hearAboutOptions)) {
    errors.heardAbout = "Please tell us how you heard about the studio.";
  }

  return errors;
}

export function hasErrors(errors: FieldErrors) {
  return Object.keys(errors).length > 0;
}
