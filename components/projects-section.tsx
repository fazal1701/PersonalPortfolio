"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Full-Stack Health Optimization App",
    description: "AI-driven dashboard that aggregates wearable, clinical, and lifestyle data to forecast and prevent risks across cardiovascular, cancer, neurodegenerative, and metabolic diseases. Includes interactive dashboard with percentile benchmarks, risk profiles, and evidence-based recommendations with HIPAA-aligned privacy controls.",
    image: "/Healthoptimization.jpeg",
    demoUrl: "https://vitaledge-health-app.vercel.app/",
    githubUrl: "https://github.com/yourusername/vitaledge-health-app",
    presentationUrl: "https://docs.google.com/presentation/d/1-health-app-demo", // example
  },
  {
    id: 2,
    title: "AI Lifestyle & Aesthetic Recommender",
    description: "Mobile-first swipe-based platform for capturing individual fashion and interior design preferences. Features computer vision models for visual embeddings and style detection, recommendation logic with scikit-learn and Hugging Face Transformers to unify fashion, furniture, and lifestyle aesthetics. Integrated ARKit/ARCore for real-time outfit try-ons and furniture visualization, incorporating cultural style signals from TV, Instagram, and TikTok aesthetics with direct links to fashion retailers for seamless product discovery.",
    image: "/ar-interior-design-app.png",
    demoUrl: "https://stylesync-ai-recommender.vercel.app/",
    githubUrl: "https://github.com/yourusername/stylesync-ai-recommender",
    presentationUrl: "https://docs.google.com/presentation/d/2-style-sync-demo", // example
  },
  {
    id: 3,
    title: "AI Corporate Training Assistant",
    description: "AI-powered corporate training platform designed to help employees learn faster and work smarter. Features an intelligent chatbot for real-time question answering with seamless escalation to human mentors for complex issues. Includes skill tracking dashboards, gamified learning features to improve engagement, and performance forecasting to personalize each employee's learning path. Reduces onboarding costs and accelerates overall skill acquisition across teams.",
    image: "/AICorporateTrainingAssistant.jpeg",
    demoUrl: "https://ai-corporate-training.vercel.app/",
    githubUrl: "https://github.com/yourusername/ai-corporate-training",
    presentationUrl: "https://docs.google.com/presentation/d/3-corp-training-demo", // example
  },
  {
    id: 4,
    title: "Flashcard AI",
    description: "Advanced flashcard system with spaced repetition algorithms, adaptive learning mechanisms, and comprehensive progress analytics for optimized knowledge retention. Features AI-generated content, personalized study schedules, and performance tracking to enhance learning efficiency.",
    image: "/AIflashcard.png",
    demoUrl: "https://flashcard-ai-study.vercel.app/",
    githubUrl: "https://github.com/yourusername/flashcard-ai-study",
    presentationUrl: "https://docs.google.com/presentation/d/4-flashcard-demo", // example
  },
  {
    id: 5,
    title: "Clinical Trial Intelligence Platform",
    description: "AI platform for trial operations that ingests ClinicalTrials.gov, PubMed, and synthetic EHR to forecast enrollment, flag dropout risk, and surface safety signals. NLP (BioBERT) parses inclusion/exclusion criteria into structured cohorts; FastAPI services power a React/TS app with what-if scenarios, site performance, and P10/50/90 forecast bands. HIPAA/GDPR-aligned with RBAC, audit logs, and encrypted storage.",
    image: "/academicresearch.png",
    demoUrl: "#",
    githubUrl: "#",
    presentationUrl: "#",
  },
  {
    id: 6,
    title: "B2B E-Commerce SaaS Platform",
    description: "Developed a B2B e-commerce platform enabling suppliers and dealers to manage inventory, process orders, and maintain digital product catalogs. Built React front-end components with reusable patterns and responsive design for supplier and customer workflows. Implemented Node.js + GraphQL APIs to power order management, authentication, and catalog search. Integrated third-party APIs (payments, logistics, CRM) and leveraged Firebase services for authentication and notifications. Deployed in a cloud-native environment (AWS + Docker) with CI/CD pipelines, ensuring scalable and reliable releases.",
    image: "/Adobecommerce.png",
    demoUrl: "#",
    githubUrl: "#",
    presentationUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400">Featured Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-400 bg-white/90 dark:bg-gray-900/80">
              <div className="aspect-video relative overflow-hidden">
                    <img
                  src={project.image}
                      alt={project.title}
                  className="object-cover w-full h-full"
                />
                  </div>
                  <CardHeader>
                <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
                <Button variant="secondary" size="sm" className="w-full mt-2" asChild disabled={!project.presentationUrl || project.presentationUrl === "#"}>
                  <a href={project.presentationUrl} target="_blank" rel="noopener noreferrer">
                    Presentation
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
