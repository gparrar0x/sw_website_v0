"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      descripcion: formData.get('descripcion')
    }

    try {
      // URL de Google Apps Script - Debes reemplazarla con tu URL de implementación
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwy_oxRPTKkUwwdBcBfIZK9HRukiVENiJrs7yvQL8W-oazSoUK9-TaWqyyiXmFJUJT3/exec'

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Necesario para Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      // Con mode: 'no-cors', no podemos leer la respuesta, pero si llega aquí es porque se envió
      setSubmitStatus('success')

      // Resetear el formulario
      if (form) {
        form.reset()
      }

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)

    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus('error')

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 px-4 relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#E8E2CF]/20 via-[#EFEEE9]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Hablemos de tu proyecto</h2>
          <p className="text-xl text-gray-400 leading-relaxed text-pretty">
            Cuéntanos cómo podemos ayudarte a transformar tu negocio con IA
          </p>
        </div>

        <div className="bg-[#EFEEE9] rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium text-black">
                  Nombre completo
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Juan Pérez"
                  required
                  className="bg-white border-gray-300 text-black placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-black">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juan@empresa.com"
                  required
                  className="bg-white border-gray-300 text-black placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-sm font-medium text-black">
                WhatsApp (con código de país)
              </label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="+54 9 11 1234-5678"
                required
                className="bg-white border-gray-300 text-black placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="descripcion" className="text-sm font-medium text-black">
                Cuéntanos más sobre tu desafío
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={5}
                placeholder="Describe brevemente el proceso que quieres automatizar y cuál es tu principal dolor actual..."
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full border-2 border-[#D4AF37] text-black hover:bg-[#D4AF37] hover:text-black h-12 text-base font-semibold disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-500 bg-transparent transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Agendar Consulta Gratuita
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                ✓ ¡Mensaje enviado! Te contactaremos pronto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                ✗ Hubo un error. Por favor intenta nuevamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
