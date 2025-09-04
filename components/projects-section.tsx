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
    demoUrl: "https://full-stack-health-optimization.vercel.app/",
    presentationUrl: "https://docs.google.com/presentation/d/186vJg0aAyJZcWoqR_wIBX7s4CvSfFRl75-vJ0cXAvc8/edit?usp=sharing",
  },
  {
    id: 2,
    title: "AI Lifestyle & Aesthetic Recommender",
    description: "Mobile-first swipe-based platform for capturing individual fashion and interior design preferences. Features computer vision models for visual embeddings and style detection, recommendation logic with scikit-learn and Hugging Face Transformers to unify fashion, furniture, and lifestyle aesthetics. Integrated ARKit/ARCore for real-time outfit try-ons and furniture visualization, incorporating cultural style signals from TV, Instagram, and TikTok aesthetics with direct links to fashion retailers for seamless product discovery.",
    image: "/ar-interior-design-app.png",
    presentationUrl: "https://docs.google.com/presentation/d/2-style-sync-demo", // example
  },
  {
    id: 3,
    title: "AI Corporate Training Assistant",
    description: "AI-powered corporate training platform designed to help employees learn faster and work smarter. Features an intelligent chatbot for real-time question answering with seamless escalation to human mentors for complex issues. Includes skill tracking dashboards, gamified learning features to improve engagement, and performance forecasting to personalize each employee's learning path. Reduces onboarding costs and accelerates overall skill acquisition across teams.",
    image: "/AICorporateTrainingAssistant.jpeg",
    presentationUrl: "https://docs.google.com/presentation/d/3-corp-training-demo", // example
  },
  {
    id: 4,
    title: "Advanced AI Education System",
    description: "An AI-driven learning companion that fuses spaced repetition with generative models to create mnemonics, analogies, quizzes, and multi-layered explanations guiding students through techniques like the method of loci and Feynman learning so they not only memorize but actively reconstruct knowledge, while progress analytics adapt the system into a personalized tutor that evolves with each learner.",
    image: "/AIflashcard.png",
    presentationUrl: "https://docs.google.com/presentation/d/4-flashcard-demo", // example
  },
  {
    id: 5,
    title: "Clinical Trial Intelligence Platform",
    description: "AI platform for trial operations that ingests ClinicalTrials.gov, PubMed, and synthetic EHR to forecast enrollment, flag dropout risk, and surface safety signals. NLP (BioBERT) parses inclusion/exclusion criteria into structured cohorts; FastAPI services power a React/TS app with what-if scenarios, site performance, and P10/50/90 forecast bands. HIPAA/GDPR-aligned with RBAC, audit logs, and encrypted storage.",
    image: "/academicresearch.png",
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
                {project.demoUrl && (
                  <Button variant="outline" size="sm" className="w-full mb-2" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </Button>
                )}
                <Button variant="secondary" size="sm" className="w-full" asChild disabled={!project.presentationUrl}>
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
