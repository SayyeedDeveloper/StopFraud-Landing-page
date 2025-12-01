"use client";

import { useState } from "react";
import TeamCard from "@/app/components/TeamCard";


// Roadmap step component

function RoadmapStep({ number, title, description, isLast }: RoadmapStepProps) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg">
          {number}
        </div>
        {!isLast && (
          <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-blue-200"></div>
        )}
      </div>
      <div className="flex-1 pb-12">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const teamMembers: TeamMemberProps[] = [
    {
      name: "Bobonazarov Abdurasul",
      role: "ML Engineer & Co-Founder",
      skills: ["Anomaly Detection", "PyTorch", "Model Evaluation"],
      description: "Guides students and projects in advanced ML techniques, including fraud detection models for fintech applications. Co-founded innovative tech ventures blending academic expertise with practical deployments.",
      initials: "SC",
      color: "bg-gradient-to-br from-blue-600 to-blue-400",
      photo: "/team/member1.JPG",
      linkedin: "#",
      github: "#",
      portfolio: "#",
    },
    {
      name: "Tursunov Muhammadsayyid",
      role: "Full-Stack Developer",
      skills: ["System Architecture", "API Design", "DevOps"],
      description: "AI-driven product builder leading projects in automation, RAG systems, and intelligent personal assistants",
      initials: "TM",
      color: "bg-gradient-to-br from-purple-600 to-purple-400",
      photo: "/team/member2.jpg",
      linkedin: "https://www.linkedin.com/in/sayyeeddeveloper",
      github: "https://github.com/SayyeedDeveloper",
      portfolio: "https://sayyeed.dev",
    },
    {
      name: "Ismoilov Asadullo",
      role: "Software Engineer",
      skills: ["Full-stack development", "Machine learning"],
      description: "Software engineer skilled in full-stack development with Python, FastAPI, Next.js, and TypeScript. Built production-ready projects like e-commerce sites and fraud detection systems with React dashboards and ML integration.",
      initials: "ER",
      color: "bg-gradient-to-br from-green-600 to-green-400",
      photo: "/team/member3.jpg",
      linkedin: "https://www.linkedin.com/in/%D0%B0%D1%81%D0%B0%D0%B4%D1%83%D0%BB%D0%BB%D0%BE-%D0%B8%D1%81%D0%BC%D0%BE%D0%B8%D0%BB%D0%BE%D0%B2-8479a6310",
      github: "https://github.com/AsadDeving",
      portfolio: "#",
    },
    {
      name: "Farxodov Abdulaziz",
      role: "Data Scientist",
      skills: ["Feature Engineering", "Statistical Analysis"],
      description: "Data Scientist who analyzes large datasets, builds machine learning models, and provides insights to support business decisions.",
      initials: "DK",
      color: "bg-gradient-to-br from-orange-600 to-orange-400",
      photo: "/team/member4.jpg",
      linkedin: "#",
      github: "#",
      portfolio: "https://www.instagram.com/farkhodov721",
    },
  ];

  return (
    <div className="min-h-screen  bg-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <nav className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-6">
          <div className="text-xl font-bold text-gray-900">Stop Fraud</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#problem-solution" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Problem & Solution
            </a>
            <a href="#team" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Team
            </a>
            <a href="#why-us" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Why Us
            </a>
            <a href="#roadmap" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Roadmap
            </a>
            <a href="#how-we-build" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              How We&#39;ll Build It
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="container max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered Fraud Detection for Suspicious Transactions
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Stop fraud uses advanced neural networks to monitor and flag risky transactions in real-time,
                helping businesses prevent fraud before damage occurs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Get Early Access
                </button>
                <a
                  href="#roadmap"
                  className="rounded-full border-2 border-gray-900 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-center"
                >
                  View Roadmap
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow">
                    <div>
                      <div className="text-sm text-gray-500">Transaction Status</div>
                      <div className="text-2xl font-bold text-gray-900">Monitoring</div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow">
                    <div className="text-sm text-gray-500 mb-2">Risk Score</div>
                    <div className="h-4 w-full rounded-full bg-gray-200">
                      <div className="h-4 w-1/4 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Flagged Today</span>
                      <span className="font-bold text-red-600">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section id="problem-solution" className="bg-gray-50 py-24">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Problem</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl">📈</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Rising Digital Transactions</h3>
                      <p className="text-gray-600">
                        Online payments and digital transactions are increasing exponentially, creating more opportunities for fraud.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">⚠️</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Growing Fraud Risk</h3>
                      <p className="text-gray-600">
                        Fraudulent activities, chargebacks, and suspicious transactions cost businesses billions annually.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">🐌</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Manual Review Limitations</h3>
                      <p className="text-gray-600">
                        Traditional manual review is slow, expensive, error-prone, and can&#39;t scale with transaction volume.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl">🧠</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Detection</h3>
                      <p className="text-gray-600">
                        Neural networks analyze transaction patterns in real-time, learning to distinguish normal from suspicious behavior.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Real-Time Monitoring</h3>
                      <p className="text-gray-600">
                        Our system processes transactions instantly, flagging anomalies before they cause damage.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Measurable Impact</h3>
                      <p className="text-gray-600">
                        Reduce fraudulent transactions, minimize revenue loss, and build higher customer trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24">
          <div className="container mx-auto px-2  max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Our diverse team brings together expertise in machine learning, software engineering, and product design.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="bg-gray-50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Why We Can Solve This
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Our team has the unique combination of skills and experience needed to build world-class fraud detection.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Domain Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of financial systems, payment flows, and fraud patterns from years of industry experience.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ML Excellence</h3>
                <p className="text-gray-600">
                  Proven track record with neural networks, anomaly detection algorithms, and production ML systems.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Stack Skills</h3>
                <p className="text-gray-600">
                  Strong engineering across the entire stack, from data pipelines to frontend dashboards.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Execution</h3>
                <p className="text-gray-600">
                  Track record of shipping production systems and handling sensitive data at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Roadmap
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Our path from concept to production-ready fraud detection platform.
            </p>
            <div className="max-w-3xl mx-auto">
              <RoadmapStep
                number={1}
                title="Idea"
                description="Research fraud patterns, define use cases, validate market need, and establish core requirements. Interview potential users and study existing solutions."
              />
              <RoadmapStep
                number={2}
                title="Prototype"
                description="Build initial dataset of transactions, engineer key features, develop baseline ML models, and validate detection accuracy with historical data."
              />
              <RoadmapStep
                number={3}
                title="MVP"
                description="Integrate with sandbox transaction systems, build real-time API, create monitoring dashboard, and conduct pilot testing with select partners."
              />
              <RoadmapStep
                number={4}
                title="Launched"
                description="Production-ready system with automated alerting, comprehensive analytics, enterprise integrations, and 24/7 monitoring infrastructure."
                isLast
              />
            </div>
          </div>
        </section>

        {/* How We'll Build It Section */}
        <section id="how-we-build" className="bg-gray-50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              How We&#39;ll Build It
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Our technical approach combines cutting-edge AI with proven engineering practices.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Approach</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span className="text-gray-600">Collect and anonymize historical transaction data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span className="text-gray-600">Engineer features capturing patterns and user behavior</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span className="text-gray-600">Train neural networks for anomaly detection</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">4.</span>
                    <span className="text-gray-600">Evaluate using precision, recall, and ROC-AUC</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">5.</span>
                    <span className="text-gray-600">Deploy model as scalable API service</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">6.</span>
                    <span className="text-gray-600">Integrate real-time monitoring and alerting</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">Python</span>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">FastAPI</span>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">PostgreSQL</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">Next.js</span>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">TypeScript</span>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">Tailwind CSS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">Docker</span>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">Cloud</span>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">CI/CD</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Tools</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-2xl">🧠</span>
                    <div>
                      <div className="font-semibold text-gray-900">Neural Networks</div>
                      <div className="text-sm text-gray-600">Deep learning for anomaly detection</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">🔬</span>
                    <div>
                      <div className="font-semibold text-gray-900">Experimentation</div>
                      <div className="text-sm text-gray-600">A/B testing and model comparison</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <div className="font-semibold text-gray-900">Monitoring</div>
                      <div className="text-sm text-gray-600">Track model drift and performance</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">⚙️</span>
                    <div>
                      <div className="font-semibold text-gray-900">AutoML</div>
                      <div className="text-sm text-gray-600">Automated feature engineering</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="text-2xl font-bold text-gray-900 mb-4">Stop Fraud</div>
            <p className="text-gray-600 mb-4">
              Building the future of AI-powered fraud detection
            </p>
            <p className="text-sm text-gray-500">
              Contact us • Stay tuned for updates
            </p>
            <p className="mt-6 text-sm text-gray-400">
              © 2024 Stop Fraud. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
