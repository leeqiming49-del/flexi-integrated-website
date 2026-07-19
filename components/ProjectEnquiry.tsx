"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Fields = "name" | "company" | "phone" | "email" | "projectType" | "location" | "description";
const emptyForm: Record<Fields, string> = { name: "", company: "", phone: "", email: "", projectType: "", location: "", description: "" };

export function ProjectEnquiry() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = () => { setOpen(false); triggerRef.current?.focus(); };

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("enquiry-open");
    firstFieldRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>("button, input, select, textarea, [href]"));
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.classList.remove("enquiry-open"); window.removeEventListener("keydown", onKeyDown); };
  }, [open]);

  const update = (field: Fields, value: string) => { setForm((current) => ({ ...current, [field]: value })); setErrors((current) => ({ ...current, [field]: undefined })); };
  const validate = () => {
    const next: Partial<Record<Fields, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.email.trim()) next.email = "Please enter your email."; else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.projectType) next.projectType = "Please select a project type.";
    if (!form.location.trim()) next.location = "Please enter the project location.";
    if (!form.description.trim()) next.description = "Please describe your project.";
    setErrors(next); return Object.keys(next).length === 0;
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (!validate()) return; setStatus("loading"); setMessage("");
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "We could not send your enquiry. Please try again.");
      setStatus("success"); setMessage("Thank you. Your project enquiry has been sent to Flexi Integrated."); setForm(emptyForm);
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "We could not send your enquiry. Please try again."); }
  };
  const fieldError = (field: Fields) => errors[field] ? <span className="field-error" id={`${field}-error`}>{errors[field]}</span> : null;

  return (
    <>
      <button ref={triggerRef} className="arrow-link contact-action" type="button" onClick={() => { setOpen(true); setStatus("idle"); setMessage(""); }}>Start a Project</button>
      <button className={`enquiry-overlay ${open ? "is-open" : ""}`} type="button" aria-label="Close project enquiry" tabIndex={open ? 0 : -1} onClick={close} />
      <div className={`enquiry-panel ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="enquiry-title" aria-hidden={!open} ref={panelRef}>
        <div className="enquiry-panel-head"><div><p className="eyebrow">Project enquiry</p><h2 id="enquiry-title">Start a Project</h2></div><button className="enquiry-close" type="button" aria-label="Close project enquiry" onClick={close}>×</button></div>
        <p className="enquiry-intro">Tell us a little about your space. Our team will review the details and follow up directly.</p>
        <form className="enquiry-form" onSubmit={submit} noValidate>
          <label>Name *<input ref={firstFieldRef} value={form.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{fieldError("name")}</label>
          <label>Company<input value={form.company} onChange={(e) => update("company", e.target.value)} /></label>
          <label>Phone *<input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />{fieldError("phone")}</label>
          <label>Email *<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{fieldError("email")}</label>
          <label>Project Type *<select value={form.projectType} onChange={(e) => update("projectType", e.target.value)} aria-invalid={!!errors.projectType} aria-describedby={errors.projectType ? "projectType-error" : undefined}><option value="">Select a project type</option><option>Design &amp; Build</option><option>Interior Fit-Out</option><option>Construction</option><option>Carpentry Works</option><option>Renovation</option><option>Other</option></select>{fieldError("projectType")}</label>
          <label>Project Location *<input value={form.location} onChange={(e) => update("location", e.target.value)} aria-invalid={!!errors.location} aria-describedby={errors.location ? "location-error" : undefined} />{fieldError("location")}</label>
          <label className="full-field">Project Description *<textarea rows={5} value={form.description} onChange={(e) => update("description", e.target.value)} aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-error" : undefined} />{fieldError("description")}</label>
          <div className="form-footer"><p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p><button className="submit-enquiry" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Send Enquiry →"}</button></div>
        </form>
      </div>
    </>
  );
}
