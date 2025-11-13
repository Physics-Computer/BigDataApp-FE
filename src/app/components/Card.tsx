'use client'

import { ReactNode } from 'react'
import Button from './buttons/Button'

interface CardProps {
  title?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
  children?: ReactNode
  className?: string
}

export default function Card({
  title,
  description,
  buttonText,
  onButtonClick,
  children,
  className = '',
}: CardProps) {
  const content = children ?? (
    <>
      {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {buttonText && onButtonClick && (
        <Button text={buttonText} onClick={onButtonClick} />
      )}
    </>
  )

  return (
    <div
      className={`border rounded-2xl bg-white p-6 hover:shadow-md transition-shadow ${className}`}
    >
      {content}
    </div>
  )
}
