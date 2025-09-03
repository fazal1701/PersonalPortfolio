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
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            I specialize in transforming complex ideas into production-ready solutions. Whether you need AI/ML integration, 
            scalable backend architecture, or full-stack development, I bring both technical expertise and strategic thinking 
            to every project. Let's discuss how we can bring your vision to life.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              🚀 AI/ML & Full-Stack Development
            </span>
            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              🧩 System Architecture & Consulting
            </span>
            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              ⚡ 24hr Response Time
            </span>
          </div>
        </header>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left card: quick contact + links */}
          <Card className="border-gray-200 dark:border-gray-700 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                <span className="font-semibold text-gray-800 dark:text-gray-200">{EMAIL}</span>
                <Button size="icon" variant="ghost" onClick={copyEmail} className="ml-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                  {copied ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-gray-600" />}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                Prefer email? I read everything personally and respond thoughtfully. You can also grab my resume or connect on social platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  <Github className="h-6 w-6" />
                  GitHub
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                  LinkedIn
                </a>
                <a
                  href={RESUME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  <Download className="h-6 w-6" />
                  Resume
                </a>
              </div>
            </CardContent>
          </Card>
          {/* Right card: contact form */}
          <Card className="border-gray-200 dark:border-gray-700 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Send className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-800 dark:text-gray-200">Send a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                I'll get back to you within 24 hours with thoughtful insights about your project.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="h-12 text-lg border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="h-12 text-lg border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400"
                />
                <Textarea
                  name="message"
                  placeholder="Tell me about your project, challenges, or ideas..."
                  className="h-32 text-lg border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 resize-none"
                  required
                />
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold bg-gray-800 hover:bg-gray-900 text-white transition-colors duration-200"
                >
                  🚀 Let's Connect & Collaborate
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
