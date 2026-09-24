const STATICFORMS_ENDPOINT = "https://api.staticforms.dev/submit";
const STATICFORMS_API_KEY = "sf_ba031c813e2ee0dc5507dbdf";

export async function submitToStaticForms(
  fields: Record<string, string | undefined>,
  subject: string,
) {
  const body = new FormData();
  body.append("apiKey", STATICFORMS_API_KEY);
  body.append("subject", `[AI Nexus] ${subject}`);

  Object.entries(fields).forEach(([key, value]) => {
    if (value && value.trim().length > 0) {
      body.append(key, value.trim());
    }
  });

  const response = await fetch(STATICFORMS_ENDPOINT, {
    method: "POST",
    body,
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Submission failed");
  }
}
