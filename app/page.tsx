import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

// Below-the-fold: lazy load to reduce initial JS bundle
const Capabilities = dynamic(() => import("@/components/capabilities").then(m => ({ default: m.Capabilities })))
const WhyUs = dynamic(() => import("@/components/why-us").then(m => ({ default: m.WhyUs })))
const ProjectsPreview = dynamic(() => import("@/components/projects-preview").then(m => ({ default: m.ProjectsPreview })))
const ContactForm = dynamic(() => import("@/components/contact-form").then(m => ({ default: m.ContactForm })))
const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button").then(m => ({ default: m.WhatsAppButton })))

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] to-[#1a1f3a]">
      <Hero />
      <Services />
      <Capabilities />
      <WhyUs />
      <ProjectsPreview />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
