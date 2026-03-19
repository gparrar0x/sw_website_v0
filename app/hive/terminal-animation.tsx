'use client'

import { useEffect, useState } from 'react'

const COMMANDS = [
  { cmd: '/gmail inbox --unread', comment: '# revisa tu email sin salir del editor' },
  { cmd: '/slack read <thread_url>', comment: '# ponte al día con un thread en segundos' },
  { cmd: '/perplexity "mejor auth library para Next.js"', comment: '# busca en la web con resúmenes de IA' },
  { cmd: '/shape', comment: '# convierte una idea vaga en un issue de Linear' },
  { cmd: '/ship_it', comment: '# commit, push, PR en un solo comando' },
  { cmd: '/google-docs get <url>', comment: '# lee cualquier doc como Markdown, al instante' },
]

const TYPING_SPEED = 28 // ms per char
const PAUSE_AFTER_CMD = 600 // ms after command typed before comment
const PAUSE_AFTER_COMMENT = 1400 // ms before next command
const MAX_VISIBLE = 5 // lines to keep visible

type Line = {
  cmd: string
  comment: string
  full: boolean
}

export function TerminalAnimation() {
  const [lines, setLines] = useState<Line[]>([])
  const [currentCmd, setCurrentCmd] = useState('')
  const [currentComment, setCurrentComment] = useState('')
  const [phase, setPhase] = useState<'typing-cmd' | 'pause' | 'typing-comment' | 'done-line'>('typing-cmd')
  const [cmdIdx, setCmdIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const target = COMMANDS[cmdIdx % COMMANDS.length]

    if (phase === 'typing-cmd') {
      if (charIdx < target.cmd.length) {
        const t = setTimeout(() => {
          setCurrentCmd(target.cmd.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, TYPING_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setPhase('pause')
          setCharIdx(0)
        }, PAUSE_AFTER_CMD)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pause') {
      setPhase('typing-comment')
      return
    }

    if (phase === 'typing-comment') {
      if (charIdx < target.comment.length) {
        const t = setTimeout(() => {
          setCurrentComment(target.comment.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, TYPING_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setLines(prev => {
            const next = [...prev, { cmd: target.cmd, comment: target.comment, full: true }]
            return next.slice(-MAX_VISIBLE)
          })
          setCurrentCmd('')
          setCurrentComment('')
          setCharIdx(0)
          setPhase('done-line')
        }, PAUSE_AFTER_COMMENT)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'done-line') {
      setCmdIdx(i => i + 1)
      setPhase('typing-cmd')
    }
  }, [mounted, phase, charIdx, cmdIdx])

  if (!mounted) {
    return (
      <div
        data-testid="hero-terminal"
        className="w-full rounded-lg border overflow-hidden font-mono text-sm"
        style={{
          background: 'rgba(12, 26, 39, 0.9)',
          borderColor: 'rgba(95, 115, 130, 0.3)',
          height: '240px',
        }}
      >
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{ borderColor: 'rgba(95, 115, 130, 0.3)', background: 'rgba(95, 115, 130, 0.1)' }}
        >
          <span className="w-3 h-3 rounded-full" style={{ background: '#E74C3C' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#D4AF37' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#25D366' }} />
          <span className="ml-2 text-xs" style={{ color: '#5F7382' }}>~/projects/myapp  claude</span>
        </div>
        <div className="px-4 py-4" style={{ color: '#EFEEE9' }}>
          <span style={{ color: '#D4AF37' }}>$ </span>
          <span className="inline-block w-2 h-4 align-middle animate-pulse" style={{ background: '#25D366' }} />
        </div>
      </div>
    )
  }

  return (
    <div
      data-testid="hero-terminal"
      className="w-full rounded-lg border overflow-hidden font-mono text-sm"
      style={{
        background: 'rgba(12, 26, 39, 0.92)',
        borderColor: 'rgba(95, 115, 130, 0.3)',
        minHeight: '240px',
      }}
      aria-label="Terminal mostrando slash commands de Hive"
      role="img"
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b select-none"
        style={{ borderColor: 'rgba(95, 115, 130, 0.3)', background: 'rgba(95, 115, 130, 0.08)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#E74C3C' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#D4AF37' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#25D366' }} />
        <span className="ml-2 text-xs" style={{ color: '#5F7382' }}>~/projects/myapp  claude</span>
      </div>

      {/* Completed lines */}
      <div className="px-4 py-4 space-y-1">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2 opacity-60">
            <span style={{ color: '#D4AF37' }}>$</span>
            <span style={{ color: '#EFEEE9' }}>{line.cmd}</span>
            <span style={{ color: '#5F7382' }}>{line.comment}</span>
          </div>
        ))}

        {/* Active line */}
        <div className="flex gap-2">
          <span style={{ color: '#D4AF37' }}>$</span>
          <span style={{ color: '#EFEEE9' }}>{currentCmd}</span>
          {currentComment && (
            <span style={{ color: '#5F7382' }}>&nbsp;{currentComment}</span>
          )}
          {/* Blinking cursor */}
          <span
            className="inline-block w-[2px] h-[1em] align-middle"
            style={{
              background: '#25D366',
              animation: 'pulse-cursor 1s step-end infinite',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
