"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillCategory {
  id: number;
  title: string;
  skills: { name: string; image?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", image: undefined },
      { name: "Java", image: undefined },
      { name: "C", image: undefined },
      { name: "SQL", image: undefined },
      { name: "JavaScript/TypeScript", image: undefined },
      { name: "React", image: undefined },
      { name: "Next.js", image: undefined },
    ],
  },
  {
    id: 2,
    title: "Cloud & DevOps Tools",
    skills: [
      { name: "AWS", image: undefined },
      { name: "Azure", image: undefined },
      { name: "Docker", image: undefined },
      { name: "Kubernetes", image: undefined },
      { name: "MongoDB", image: undefined },
      { name: "Git", image: undefined },
      { name: "Jira", image: undefined },
    ],
  },
  {
    id: 3,
    title: "AI Tools",
    skills: [
      { name: "Cursor", image: undefined },
      { name: "Claude", image: undefined },
      { name: "ChatGPT", image: undefined },
      { name: "V0", image: undefined },
      { name: "Bolt", image: undefined },
      { name: "Lovable", image: undefined },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400">Technical Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground font-semibold mb-2">A comprehensive overview of my technical stack, from frontend frameworks to cloud infrastructure and machine learning platforms.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden border-2 border-blue-100 dark:border-blue-900 bg-white/90 dark:bg-gray-900/80 shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2">
                      {skill.image && (
                        <img src={skill.image} alt={skill.name} className="h-6 w-6 object-contain" />
                      )}
                      <span className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
