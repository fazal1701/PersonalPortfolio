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
        <div className="flex flex-col items-center gap-6">
          <a href="https://www.linkedin.com/in/fazal-bhatti" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 w-64 text-center">LinkedIn</a>
          <a href="https://github.com/fazal1701" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 w-64 text-center">GitHub</a>
          <a href="/FazalBhattiResume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 w-64 text-center">Resume</a>
        </div>
      </div>
    </section>
  );
}
