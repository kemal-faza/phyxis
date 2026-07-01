'use client'

import { useRef, useState, InputHTMLAttributes, DragEvent } from 'react'
import { cn } from '@/lib/utils'

interface FileUploadProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'accept' | 'disabled' | 'className'> {
  value: File | null
  onChange: (file: File | null) => void
}

export function FileUpload({ value, onChange, accept, disabled, className }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  const handleClick = () => {
    if (disabled) return
    inputRef.current?.click()
  }

  const handleFile = (file: File | undefined) => {
    if (!file) return
    onChange(file)
  }

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setDragging(false)
    handleFile(e.dataTransfer.files[0])
  }

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => {
    setDragging(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0])
  }

  return (
    <div className={cn('w-full', className)}>
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
        className={cn(
          'flex flex-col items-center justify-center w-full h-32 px-4 transition rounded cursor-pointer border-2 border-dashed',
          dragging
            ? 'border-primary bg-primary/5'
            : 'border-border-subtle hover:border-on-surface-variant bg-surface-container',
          disabled && 'opacity-50 pointer-events-none'
        )}
      >
        {value ? (
          <div className="flex items-center gap-2 text-sm text-on-surface">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="truncate max-w-[200px]">{value.name}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onChange(null)
                if (inputRef.current) inputRef.current.value = ''
              }}
              className="ml-1 text-on-surface-variant hover:text-error transition-colors"
              aria-label="Hapus file"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="text-sm text-on-surface-variant">
              Seret file ke sini, atau{' '}
              <span className="text-primary underline ml-1">pilih file</span>
            </span>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleInputChange}
          className="hidden"
          disabled={disabled}
        />
      </label>
    </div>
  )
}
