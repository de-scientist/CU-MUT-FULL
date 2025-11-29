import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { apiFetch } from "../lib/api";
import { useUIStore } from "../store/uiStore";

type JoinMinistryFormProps = {
  /** If provided, preselects + locks this ministry */
  ministryName?: string;
};

type Payload = {
  name: string;
  email: string;
  phone?: string;
  ministry: string;
  message?: string;
  experience?: string;
};

const MINISTRIES = [
  "Music Ministry",
  "Bible Study & Discipleship",
  "Missions & Evangelism",
  "Creative Arts Ministry (CREAM)",
  "Prayer Ministry",
  "Hospitality Ministry",
  "Technical Department",
  "Welfare Committee",
  "Resource Mobilisation Committee (RMC)",
];

export const JoinMinistryForm: React.FC<JoinMinistryFormProps> = ({
  ministryName,
}) => {
  const showConfirmation = useUIStore((s) => s.showConfirmation);
  const [form, setForm] = useState<Payload>({
    name: "",
    email: "",
    phone: "",
    ministry: ministryName ?? "",
    message: "",
    experience: "",
  });

  const mutation = useMutation({
    mutationFn: (body: Payload) =>
      apiFetch("/ministry-applications", {
        method: "POST",
        body: JSON.stringify(body),
      }),
    onSuccess: () => {
      showConfirmation(
        "Thank you for your interest! Your application has been received. The ministry leaders will reach out to you."
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        ministry: ministryName ?? "",
        message: "",
        experience: "",
      });
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.ministry) return;
    mutation.mutate(form);
  };

  const disabled = mutation.isLoading;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-white p-6 shadow-mutcu-card"
    >
      <h3 className="text-lg font-heading text-mutcu-navy mb-1">
        Join This Ministry
      </h3>
      <p className="text-xs text-slate-600 mb-2">
        Fill in your details and we will connect you with the ministry
        leadership.
      </p>

      <div>
        <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
          Full Name <span className="text-mutcu-red">*</span>
        </label>
        <input
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          disabled={disabled}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
          Email <span className="text-mutcu-red">*</span>
        </label>
        <input
          type="email"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          disabled={disabled}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
          Phone
        </label>
        <input
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          disabled={disabled}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
          Ministry <span className="text-mutcu-red">*</span>
        </label>
        {ministryName ? (
          <input
            className="w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs text-slate-800"
            value={ministryName}
            disabled
          />
        ) : (
          <select
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
            value={form.ministry}
            onChange={(e) => setForm({ ...form, ministry: e.target.value })}
            required
            disabled={disabled}
          >
            <option value="">Select a ministry</option>
            {MINISTRIES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
          Briefly share your interest
        </label>
        <textarea
          rows={3}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          disabled={disabled}
          placeholder="Why would you like to join this ministry?"
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
          Relevant experience (optional)
        </label>
        <textarea
          rows={2}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
          value={form.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
          disabled={disabled}
          placeholder="Any skills, past service, or talents you’d like to mention."
        />
      </div>

      {mutation.isError && (
        <p className="text-xs text-mutcu-red">
          There was a problem submitting your application. Please try again.
        </p>
      )}

      <Button
        type="submit"
        className="w-full bg-mutcu-orange hover:bg-[#e68a00] font-heading uppercase"
        disabled={disabled}
      >
        {disabled ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
};