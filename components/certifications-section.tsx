"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    id: 1,
    name: "AWS ML Specialty",
    provider: "Amazon Web Services",
    status: "Expected",
    completedDate: "Expected Sep 2025",
  },
  {
    id: 2,
    name: "AWS Solutions Architect",
    provider: "Amazon Web Services",
    status: "Expected",
    completedDate: "Expected Sep 2025",
  },
  {
    id: 3,
    name: "CompTIA Security+",
    provider: "CompTIA",
    status: "Expected",
    completedDate: "Expected Sep 2025",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400">Professional Certifications</h2>
          <p className="text-base text-muted-foreground font-semibold mb-6">
            Building expertise in cloud computing, machine learning, and enterprise architecture through industry certifications.
          </p>
        </div>
        <div className="space-y-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="shadow-md border-2 border-blue-100 dark:border-blue-900 bg-white/90 dark:bg-gray-900/80">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="text-base font-semibold text-purple-700 dark:text-purple-300">
                    <span className="font-bold">{cert.provider}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{cert.status}</span>
                    <span className="text-sm font-bold text-black">{cert.completedDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
