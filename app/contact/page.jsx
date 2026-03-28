"use client";

import Image from "next/image";
import { useState } from "react";

import { OFFICES, SUPPORT_EMAIL } from "../data/offices";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxChars = 250;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({
        type: "error",
        text: "Please fill in name, email, and message.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        text: "Message sent successfully. We will contact you soon.",
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setStatus({
        type: "error",
        text: err?.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Top section with grid pattern and logo */}
      <section className="relative bg-white py-20">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, #e5e5e5 20px, #e5e5e5 21px),
                              repeating-linear-gradient(90deg, transparent, transparent 20px, #e5e5e5 20px, #e5e5e5 21px)`,
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center justify-center">
          <Image
            src="/navbar/North Himalayan Traders FINAL LOGO-01-01-Photoroom (1)-Picsart-AiImageEnhancer.png"
            alt="North Himalayan Traders logo"
            width={200}
            height={120}
            className="h-auto w-48 md:w-56"
          />
        </div>
      </section>

      {/* Middle section with heading and description */}
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-[#333333] md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">
            We value your feedback, questions, and concerns at North Himalayan Traders.
            Our dedicated team is here to assist you and provide the support you need.
            Please don&apos;t hesitate to reach out to us using any of the following contact
            methods.
          </p>
        </div>
      </section>

      {/* Contact details: email + regional offices */}
      <section className="bg-[#042430] py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#07313e] px-8 py-10 text-center shadow-lg">
            <div className="mb-4 flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#C4A265]"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="m22 6-10 7L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A265]">
              Email
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-2 block break-all text-base font-medium text-white underline-offset-4 transition hover:text-[#C4A265] hover:underline md:text-lg"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OFFICES.map((office) => (
              <div
                key={office.id}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#07313e] p-8 shadow-lg transition hover:border-[#C4A265]/35"
              >
                <div className="mb-4 flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C4A265]/15 text-[#C4A265]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-white">{office.title}</h2>
                    <div className="mt-2 space-y-1 text-sm leading-relaxed text-[#b9d0da]">
                      {office.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C4A265]">
                    Phone
                  </p>
                  <a
                    href={`tel:${office.phoneTel.replace(/\s/g, "")}`}
                    className="mt-1 block text-base font-semibold text-white transition hover:text-[#C4A265]"
                  >
                    {office.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${office.whatsappDigits}?text=${encodeURIComponent(
                      `Hello ${office.title} — I would like to inquire about North Himalayan Traders.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#1ebe57]"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp this office
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="bg-[#F4E6D1] py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-[#D4C4A8] bg-white px-5 py-4 text-sm text-[#333333] outline-none placeholder:text-[#999999] focus:border-[#C4A265] focus:ring-2 focus:ring-[#C4A265]/20"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-[#D4C4A8] bg-white px-5 py-4 text-sm text-[#333333] outline-none placeholder:text-[#999999] focus:border-[#C4A265] focus:ring-2 focus:ring-[#C4A265]/20"
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  placeholder="Enter your Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-[#D4C4A8] bg-white px-5 py-4 text-sm text-[#333333] outline-none placeholder:text-[#999999] focus:border-[#C4A265] focus:ring-2 focus:ring-[#C4A265]/20"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={6}
                  placeholder="Enter your Message"
                  value={message}
                  onChange={(e) => {
                    if (e.target.value.length <= maxChars) {
                      setMessage(e.target.value);
                    }
                  }}
                  className="w-full rounded-lg border border-[#D4C4A8] bg-white px-5 py-4 text-sm text-[#333333] outline-none placeholder:text-[#999999] focus:border-[#C4A265] focus:ring-2 focus:ring-[#C4A265]/20 resize-none"
                />
                <p className="mt-2 text-xs text-[#666666]">
                  Max {maxChars} Chars
                </p>
              </div>

              {/* Send Message Button */}
              {status.text ? (
                <p
                  className={`text-sm font-medium ${
                    status.type === "success" ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {status.text}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#C4A265] px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#b09154]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right: Stylized Map */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-[#042430] shadow-lg">
              {/* Map background with golden-brown lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal lines */}
                <line
                  x1="50"
                  y1="100"
                  x2="350"
                  y2="100"
                  stroke="#C4A265"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="200"
                  x2="350"
                  y2="200"
                  stroke="#C4A265"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="300"
                  x2="350"
                  y2="300"
                  stroke="#C4A265"
                  strokeWidth="2"
                />
                {/* Vertical lines */}
                <line
                  x1="100"
                  y1="50"
                  x2="100"
                  y2="350"
                  stroke="#C4A265"
                  strokeWidth="2"
                />
                <line
                  x1="200"
                  y1="50"
                  x2="200"
                  y2="350"
                  stroke="#C4A265"
                  strokeWidth="2"
                />
                <line
                  x1="300"
                  y1="50"
                  x2="300"
                  y2="350"
                  stroke="#C4A265"
                  strokeWidth="2"
                />
                {/* Diagonal lines for style */}
                <line
                  x1="50"
                  y1="50"
                  x2="150"
                  y2="150"
                  stroke="#C4A265"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="250"
                  y1="250"
                  x2="350"
                  y2="350"
                  stroke="#C4A265"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              </svg>

              {/* Map Pin Icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#C4A265]"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


