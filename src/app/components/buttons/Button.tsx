'use client'

interface ButtonProps {
  text: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export default function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
  const base = 'px-4 py-2 rounded font-semibold transition-colors'
  const style =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'border border-blue-500 text-blue-500 hover:bg-blue-50'

  return (
    <button className={`${base} ${style}`} onClick={onClick}>
      {text}
    </button>
  )
}
