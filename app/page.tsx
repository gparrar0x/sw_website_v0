import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { WhyUs } from "@/components/why-us"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Results />
      <WhyUs />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
