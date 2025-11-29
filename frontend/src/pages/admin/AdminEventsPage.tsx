import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "../../layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { apiFetch } from "../../lib/api";
import { useAuthStore } from "../../store/authStore";

type EventItem = {
  _id: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  description: string;
  image?: string;
};

type EventPayload = Omit<EventItem, "_id">;

export const AdminEventsPage: React.FC = () => {
  const token = useAuthStore((s) => s.token);
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [form, setForm] = useState<EventPayload>({
    title: "",
    dateLabel: "",
    timeLabel: "",
    description: "",
    image: "",
  });

  const { data: events } = useQuery<EventItem[]>({
    queryKey: ["admin-events"],
    queryFn: () => apiFetch<EventItem[]>("/events"),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: EventPayload) => {
      const method = editing ? "PUT" : "POST";
      const path = editing ? `/events/${editing._id}` : "/events";
      return apiFetch<EventItem>(
        path,
        { method, body: JSON.stringify(payload) },
        true
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      setEditing(null);
      setForm({
        title: "",
        dateLabel: "",
        timeLabel: "",
        description: "",
        image: "",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) =>
      apiFetch<void>(`/events/${id}`, { method: "DELETE" }, true),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!token) return;
    saveMutation.mutate(form);
  };

  const startEdit = (event: EventItem) => {
    setEditing(event);
    setForm({
      title: event.title,
      dateLabel: event.dateLabel,
      timeLabel: event.timeLabel,
      description: event.description,
      image: event.image ?? "",
    });
  };

  const resetForm = () => {
    setEditing(null);
    setForm({
      title: "",
      dateLabel: "",
      timeLabel: "",
      description: "",
      image: "",
    });
  };

  return (
    <AdminLayout>
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-heading text-mutcu-navy">
          Manage Events
        </h1>
        <Button
          variant="outline"
          className="border-mutcu-navy text-mutcu-navy hover:bg-mutcu-navy hover:text-white"
          onClick={resetForm}
        >
          {editing ? "New Event" : "Clear Form"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-5 shadow-mutcu-card space-y-3"
        >
          <h2 className="mb-2 text-lg font-heading text-mutcu-navy">
            {editing ? "Edit Event" : "Create Event"}
          </h2>
          <div>
            <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
              Title
            </label>
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              title="set-form
              required
            />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
                Date Label
              </label>
              <input
                className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
                value={form.dateLabel}
                onChange={(e) =>
                  setForm({ ...form, dateLabel: e.target.value })
                }
                required
              />
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
                Time Label
              </label>
              <input
                className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
                value={form.timeLabel}
                onChange={(e) =>
                  setForm({ ...form, timeLabel: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
              Image URL
            </label>
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              placeholder="/assets/images/..."
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-mutcu-navy">
              Description
            </label>
            <textarea
              className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
          </div>
          {saveMutation.isError && (
            <p className="text-xs text-mutcu-red">
              Error saving event. Check console for details.
            </p>
          )}
          <Button
            type="submit"
            className="w-full bg-mutcu-orange hover:bg-[#e68a00]"
            disabled={saveMutation.isLoading}
          >
            {saveMutation.isLoading
              ? "Saving..."
              : editing
              ? "Update Event"
              : "Create Event"}
          </Button>
        </form>

        {/* List */}
        <div className="space-y-3">
          <h2 className="text-lg font-heading text-mutcu-navy mb-1">
            Existing Events
          </h2>
          <div className="space-y-3">
            {events?.map((e) => (
              <div
                key={e._id}
                className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm md:flex-row md:items-center"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-mutcu-navy">
                    {e.title}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {e.dateLabel} • {e.timeLabel}
                  </p>
                  <p className="mt-1 text-xs text-slate-700 line-clamp-3">
                    {e.description}
                  </p>
                </div>
                <div className="flex gap-2 md:flex-col">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-mutcu-navy text-mutcu-navy hover:bg-mutcu-navy hover:text-white"
                    onClick={() => startEdit(e)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-mutcu-red text-mutcu-red hover:bg-mutcu-red hover:text-white"
                    onClick={() => deleteMutation.mutate(e._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
            {events && events.length === 0 && (
              <p className="text-xs text-slate-600">
                No events yet. Create your first one using the form.
              </p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};