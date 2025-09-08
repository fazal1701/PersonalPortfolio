"use client"

import { useState } from "react";
import { Mail, Github, Linkedin, Download, Send, Copy, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const EMAIL = "fazalbhatti522@gmail.com";
  const GITHUB = "https://github.com/fazal1701";
  const LINKEDIN = "https://www.linkedin.com/in/fazal-bhatti/";
  const RESUME = "/FazalBhattiResume.pdf";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy email to clipboard", error);
      setCopied(false);
    }
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
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400">
            Let’s Connect
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Reach out on LinkedIn, explore my GitHub, or grab my resume.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-xl transition-shadow border-2 border-transparent hover:border-black">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-600 text-white">
                <Linkedin size={22} />
              </div>
              <CardTitle className="text-xl">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Connect professionally, view experience, and message me directly.
              </p>
              <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  View LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-transparent hover:border-black">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-2.5 rounded-lg bg-gray-900 text-white">
                <Github size={22} />
              </div>
              <CardTitle className="text-xl">GitHub</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Explore code, projects, and experiments across AI and full‑stack.
              </p>
              <Button asChild className="w-full bg-black text-white hover:bg-black/90">
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  Visit GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-transparent hover:border-black">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-2.5 rounded-lg bg-black text-white">
                <Download size={22} />
              </div>
              <CardTitle className="text-xl">Resume</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Up‑to‑date resume with experience, skills, and selected work.
              </p>
              <Button asChild className="w-full bg-black text-white hover:bg-black/90">
                <a href={RESUME} target="_blank" rel="noopener noreferrer">
                  View / Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
