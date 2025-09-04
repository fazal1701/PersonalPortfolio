"use client"

import { useState } from "react";
import { Mail, Github, Linkedin, Download, Send, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const EMAIL = "fazalbhatti522@gmail.com";
  const GITHUB = "https://github.com/fazal1701";
  const LINKEDIN = "https://www.linkedin.com/in/fazalbh";
  const RESUME = "/Fazal_Bhatti_Resume.pdf";

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    window.location.href = `mailto:${EMAIL}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      String(name || "")
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
  }

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <header className="text-center mb-16"></header>
        {/* Removed contact form and all content */}
      </div>
    </section>
  );
}
