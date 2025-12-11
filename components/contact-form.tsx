"use client";

import { useState } from "react";

export function ContactForm({ formAction }: { formAction: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  return (
    <form
      className="space-y-4"
      action={formAction}
      method="POST"
      onSubmit={() => setStatus("submitting")}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-gray-700">
          Name
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </label>
        <label className="text-sm text-gray-700">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </label>
      </div>
      <label className="text-sm text-gray-700">
        Affiliation
        <input
          name="affiliation"
          className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
        />
      </label>
      <label className="text-sm text-gray-700">
        Message
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
        />
      </label>
      <div className="flex flex-wrap gap-3 items-center">
        <button
          type="submit"
          className="btn-primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        {status === "sent" && (
          <span className="text-sm text-brand-green">Message sent!</span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-600">
            Something went wrong. Please email us directly.
          </span>
        )}
      </div>
    </form>
  );
}
