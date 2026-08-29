import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { ContactPayload } from "@/lib/validation";

export type StoredLead = ContactPayload & {
  id: string;
  receivedAt: string;
  emailAttempted: boolean;
  emailSent: boolean;
};

const leadsDir = path.join(process.cwd(), ".data");
const leadsFile = path.join(leadsDir, "leads.json");

async function readLeads(): Promise<StoredLead[]> {
  try {
    const raw = await readFile(leadsFile, "utf8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredLead[]) : [];
  } catch {
    return [];
  }
}

export async function persistLead(lead: StoredLead): Promise<boolean> {
  try {
    await mkdir(leadsDir, { recursive: true });
    const existing = await readLeads();
    existing.push(lead);
    await writeFile(leadsFile, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
    return true;
  } catch (error) {
    console.error("Failed to persist lead", error);
    return false;
  }
}

export async function sendLeadEmail(lead: StoredLead): Promise<boolean> {
  const to = process.env.CONTACT_EMAIL?.trim();
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!to || !apiKey) {
    return false;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "Wick's World <onboarding@resend.dev>",
      to,
      replyTo: lead.email,
      subject: `New enquiry — ${lead.name} (${lead.projectType})`,
      text: [
        `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        `Company / brand: ${lead.company || "—"}`,
        `Phone: ${lead.phone || "—"}`,
        `Project type: ${lead.projectType}`,
        `What they need: ${lead.need}`,
        `Timeline: ${lead.timeline}`,
        `Budget range: ${lead.budgetRange}`,
        `Location: ${lead.location}`,
        `How they heard: ${lead.heardAbout}`,
        "",
        "Project details:",
        lead.details,
        "",
        `Received: ${lead.receivedAt}`,
        `Id: ${lead.id}`,
      ].join("\n"),
    });

    if (result.error) {
      console.error("Resend error", result.error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to email lead", error);
    return false;
  }
}
