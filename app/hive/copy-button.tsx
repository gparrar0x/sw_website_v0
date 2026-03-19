'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CopyButton({ text, testId }: { text: string; testId: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <button
      data-testid={testId}
      onClick={handleCopy}
      aria-label={copied ? 'Copiado' : 'Copiar al portapapeles'}
      className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1"
      style={{
        background: 'rgba(95, 115, 130, 0.15)',
        border: '1px solid rgba(95, 115, 130, 0.3)',
        color: copied ? '#25D366' : '#5F7382',
      }}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copiado' : 'Copiar'}
    </button>
  )
}
