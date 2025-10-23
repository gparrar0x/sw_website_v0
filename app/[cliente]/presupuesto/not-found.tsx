export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#E8E2CF' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Presupuesto no encontrado</h1>
        <p className="text-lg text-gray-600 mb-8">
          El presupuesto que buscas no existe o ya no está disponible.
        </p>
        <a
          href="/"
          className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
