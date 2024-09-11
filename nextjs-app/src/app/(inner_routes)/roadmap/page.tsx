"use client";

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, Code, Layout, Terminal, Palette, Database } from "lucide-react"

export default function Component() {
  const roadmapData = {
    title: "Web Development Roadmap",
    topics: [
      {
        name: "HTML & CSS",
        icon: Layout,
        description: "Structure and style",
        subtopics: ["Semantic HTML", "CSS Flexbox", "CSS Grid", "Responsive Design"]
      },
      {
        name: "JavaScript",
        icon: Code,
        description: "Programming fundamentals",
        subtopics: ["Variables & Data Types", "Functions", "DOM Manipulation", "ES6+ Features"]
      },
      {
        name: "Frontend Frameworks",
        icon: Palette,
        description: "React, Vue, or Angular",
        subtopics: ["Component-Based Architecture", "State Management", "Routing", "API Integration"]
      },
      {
        name: "Version Control",
        icon: Terminal,
        description: "Git and GitHub",
        subtopics: ["Basic Git Commands", "Branching", "Pull Requests", "Collaboration"]
      },
      {
        name: "Backend Development",
        icon: Database,
        description: "Node.js, Python, or Ruby",
        subtopics: ["Server-side Programming", "RESTful APIs", "Database Integration", "Authentication"]
      },
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{roadmapData.title}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
            {roadmapData.topics.map((topic, index) => (
              <TopicCard key={index} topic={topic} isLast={index === roadmapData.topics.length - 1} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function TopicCard({ topic, isLast }: { topic: any; isLast: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = topic.icon

  return (
    <Card className="mb-4 last:mb-0 bg-white">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl font-semibold text-gray-900">{topic.name}</h2>
            <p className="text-sm text-gray-500">{topic.description}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-500"
          >
            {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </Button>
        </div>
        {isExpanded && (
          <div className="mt-4 pl-14">
            <ul className="space-y-2">
              {topic.subtopics.map((subtopic: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-sm text-gray-600">{subtopic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      {!isLast && <div className="border-b border-gray-200 mx-6" />}
    </Card>
  )
}