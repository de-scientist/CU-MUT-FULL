import React from "react";
import { useMutation } from "@tanstack/react-query";
import { MainLayout } from "../layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useUIStore } from "../store/uiStore";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function fakeSendContact(data: ContactFormValues) {
  // simulate sending to backend
  return new Promise<void>((resolve) => setTimeout(resolve, 400));
}

export const ContactPage: React.FC = () => {
  const showConfirmation = useUIStore((s) => s.showConfirmation);

  const mutation = useMutation({
    mutationFn: fakeSendContact,
    onSuccess: () => {
      showConfirmation(
        "Thank you for reaching out! We have received your message and will get back to you soon."
      );
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values: ContactFormValues = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "",
      subject: (form.elements.namedItem("subject") as HTMLInputElement)?.value ?? "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "",
    };

    if (!values.email.trim() || !values.message.trim()) {
      (form.elements.namedItem("message") as HTMLTextAreaElement)?.focus();
      return;
    }

    await mutation.mutateAsync(values);
    form.reset();
  };

  return (
    <MainLayout>
      {/* Hero */}
      <section
        className="relative flex h-[40vh] min-h-[260px] items-center justify-center overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/church1.jpg')" }}
      >
        <div className="absolute inset-0 bg-mutcu-navy/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold drop-shadow-lg">
            Contact MUTCU
          </h1>
          <p className="mt-3 text-base md:text-xl text-white/90">
            We would love to hear from you—reach out with any questions, prayer
            requests or partnership ideas.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-mutcu-card">
            <h2 className="text-2xl md:text-3xl font-heading mb-4 text-mutcu-navy">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-semibold text-mutcu-navy"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-semibold text-mutcu-navy"
                >
                  Email <span className="text-mutcu-red">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-semibold text-mutcu-navy"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-semibold text-mutcu-navy"
                >
                  Message <span className="text-mutcu-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
                  placeholder="Write your message, question, or prayer request..."
                />
              </div>
              <Button
                type="submit"
                disabled={mutation.isLoading}
                className="w-full bg-mutcu-orange hover:bg-[#e68a00] font-heading uppercase"
              >
                {mutation.isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Info card */}
          <aside className="space-y-4 rounded-2xl bg-white p-6 shadow-mutcu-card">
            <h2 className="text-xl font-heading text-mutcu-navy mb-2">
              Contact Information
            </h2>
            <p className="text-sm text-slate-700">
              Murang’a University of Technology Christian Union (MUTCU)
            </p>
            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <i className="fas fa-map-marker-alt mr-2 text-mutcu-orange" />
                Murang’a University of Technology, Murang’a, Kenya
              </p>
              <p>
                <i className="fas fa-phone mr-2 text-mutcu-orange" />+254 712 345 678
              </p>
              <p>
                <i className="fas fa-envelope mr-2 text-mutcu-orange" />
                info@mutcu.ac.ke
              </p>
              <p>
                <i className="fas fa-clock mr-2 text-mutcu-orange" />
                Office Hours: Mon–Fri, 8:00 AM – 5:00 PM
              </p>
            </div>
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-mutcu-navy mb-1">
                Connect with us
              </h3>
              <div className="flex items-center gap-3 text-lg text-mutcu-navy">
                <a href="#" className="hover:text-mutcu-orange">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="hover:text-mutcu-orange">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" className="hover:text-mutcu-orange">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </MainLayout>
  );
};