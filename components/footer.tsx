import { Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#EFEEE9]/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#EFEEE9]">Skywalking.dev</h3>
            <p className="text-gray-400 leading-relaxed">
              Automatización con AI, Agentes conversacionales, Transformación digital
            </p>
            <p className="text-gray-400 leading-relaxed">
              Especializados en empresas LATAM en crecimiento (10-500 empleados)
            </p>
            <p className="text-gray-400 leading-relaxed">San Martin de los Andes, Argentina</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white text-right">Contacto</h4>
            <div className="flex gap-4 justify-end">
              <a
                href="mailto:info@skywalking.dev"
                className="w-10 h-10 bg-[#EFEEE9]/10 hover:bg-[#EFEEE9]/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-[#EFEEE9]" />
              </a>
              <a
                href="https://wa.me/541121625416"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366]/20 hover:bg-[#25D366]/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#EFEEE9]/10 text-center text-gray-500">
          <p>© 2025 Skywalking.dev. Todos los derechos reservados.</p>
          <p>Caminos con ❤️ para empresas que piensan en grande.</p>
        </div>
      </div>
    </footer>
  )
}
