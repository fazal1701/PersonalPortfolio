"use client"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="py-24 md:py-32 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 dark:from-blue-950 dark:via-purple-900 dark:to-pink-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          Software Engineer<br />
          <span className="block text-4xl md:text-6xl font-bold text-black dark:text-white mt-6">
            AI/ML & Full-Stack
          </span>
        </h1>
        <p className="mt-8 text-lg md:text-xl font-medium text-black dark:text-white max-w-2xl mx-auto">
          I am Fazal Bhatti, passionate about applying AI to real-world problems. I focus on planning, researching, and prototyping intelligent systems that connect data, cloud, and practical solutions. My goal is to bridge research and engineering as an AI Solutions Architect to drive innovation at scale.
        </p>
      </div>
    </section>
  )
}
