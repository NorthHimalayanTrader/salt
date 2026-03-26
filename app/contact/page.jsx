"use client";

import Image from "next/image";
import { useState } from "react";

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

      {/* Contact details section with three cards */}
      <section className="bg-[#042430] py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:justify-center">
          {/* Email Card */}
          <div className="rounded-xl bg-[#07313e] px-8 py-10 text-center shadow-lg">
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
            <p className="text-base font-medium text-white md:text-lg">
              support@northhimalayantraders.com
            </p>
          </div>

          {/* Phone Card */}
          <div className="rounded-xl bg-[#07313e] px-8 py-10 text-center shadow-lg">
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
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <p className="text-base font-medium text-white md:text-lg">
              +92 00000 00000
            </p>
          </div>

          {/* Location Card */}
          <div className="rounded-xl bg-[#07313e] px-8 py-10 text-center shadow-lg">
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
            <p className="text-base font-medium text-white md:text-lg">
              Some Where in the World
            </p>
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


