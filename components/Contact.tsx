"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_j43jex9",
        "template_7ynyosx",
        {
          name: name,
          email: email,
          message: message,
        },
        "dhf7E6hOSAZgYAfQ_"
      )
      .then(() => {
        setStatus("Message sent successfully! ✅");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again. ❌");
      });
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] text-white py-20 px-8 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Have a project in mind or just want to say hi? Reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-purple-400 font-semibold mb-1">Email</h3>
              <p className="text-gray-300">mustaphaadamu6773@gmail.com</p>
            </div>
            <div>
              <h3 className="text-purple-400 font-semibold mb-1">Phone</h3>
              <p className="text-gray-300">09067735805</p>
            </div>
            <div>
              <h3 className="text-purple-400 font-semibold mb-1">Website</h3>
              <p className="text-gray-300">musteydigitalacademy.online</p>
            </div>
            <div>
              <h3 className="text-purple-400 font-semibold mb-1">GitHub</h3>
              <p className="text-gray-300">github.com/MusteyDigital</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="w-full bg-[#13131f] border border-purple-900/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-[#13131f] border border-purple-900/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                required
                className="w-full bg-[#13131f] border border-purple-900/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-gray-400 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}