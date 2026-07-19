const requiredFields = ["name", "phone", "email", "projectType", "location", "description"] as const;
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try { data = await request.json() as Record<string, unknown>; } catch { return Response.json({ message: "Invalid enquiry data." }, { status: 400 }); }
  const values = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, typeof value === "string" ? value.trim() : ""])) as Record<string, string>;
  if (requiredFields.some((field) => !values[field])) return Response.json({ message: "Please complete all required fields." }, { status: 400 });
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY; const fromEmail = process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !fromEmail) return Response.json({ message: "Online enquiry delivery is being configured. Please call 012-372 1501 or email myflexi@gmail.com in the meantime." }, { status: 503 });
  const rows = [["Name", values.name], ["Company", values.company || "Not provided"], ["Phone", values.phone], ["Email", values.email], ["Project Type", values.projectType], ["Project Location", values.location], ["Project Description", values.description]];
  const html = `<h1>New Project Enquiry</h1>${rows.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`).join("")}`;
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: fromEmail, to: ["myflexi@gmail.com"], reply_to: values.email, subject: "New Project Enquiry - Flexi Integrated", html }) });
  if (!response.ok) return Response.json({ message: "We could not send your enquiry right now. Please try again shortly." }, { status: 502 });
  return Response.json({ message: "Enquiry sent." });
}
