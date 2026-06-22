import React from 'react'
import { cn } from '@/lib/utils'

interface MobileFormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
  required?: boolean
}

export const MobileFormInput = React.forwardRef<HTMLInputElement, MobileFormFieldProps>(
  ({ label, error, helpText, required, className, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`
    const errorId = error ? `${inputId}-error` : undefined
    const helpId = helpText ? `${inputId}-help` : undefined

    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500 aria-label='required'>*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          {...props}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[errorId, helpId].filter(Boolean).join(' ')}
          className={cn(
            // Base styles
            'w-full px-4 py-3 text-base leading-normal',
            // Touch target: minimum 44px height
            'min-h-[44px]',
            // Border and radius
            'border rounded-lg border-gray-300',
            // Typography for readability
            'font-normal text-gray-900',
            // Focus states
            'focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:ring-offset-0 focus:border-transparent',
            // Disabled state
            'disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
            // Error state
            error && 'border-red-500 focus:ring-red-500',
            // Mobile-friendly spacing
            'sm:text-sm sm:py-2.5',
            className
          )}
          // Prevent iOS zoom on input focus
          onFocus={(e) => {
            if (props.onFocus) props.onFocus(e)
            // Set font size to 16px to prevent zoom on iOS
            e.currentTarget.style.fontSize = '16px'
          }}
        />
        {error && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p id={helpId} className="text-sm text-gray-500">
            {helpText}
          </p>
        )}
      </div>
    )
  }
)

MobileFormInput.displayName = 'MobileFormInput'

interface MobileFormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helpText?: string
  required?: boolean
}

export const MobileFormTextarea = React.forwardRef<HTMLTextAreaElement, MobileFormTextareaProps>(
  ({ label, error, helpText, required, className, id, ...props }, ref) => {
    const inputId = id || `textarea-${Math.random().toString(36).slice(2, 9)}`
    const errorId = error ? `${inputId}-error` : undefined
    const helpId = helpText ? `${inputId}-help` : undefined

    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500" aria-label="required">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          {...props}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[errorId, helpId].filter(Boolean).join(' ')}
          className={cn(
            // Base styles
            'w-full px-4 py-3 text-base leading-normal',
            // Minimum height for touch interaction
            'min-h-[120px]',
            // Border and radius
            'border rounded-lg border-gray-300',
            // Typography
            'font-normal text-gray-900',
            // Focus states
            'focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:ring-offset-0 focus:border-transparent',
            // Disabled state
            'disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
            // Error state
            error && 'border-red-500 focus:ring-red-500',
            // Prevent resize on mobile
            'resize-none sm:resize-vertical',
            className
          )}
          onFocus={(e) => {
            if (props.onFocus) props.onFocus(e)
            // Prevent iOS zoom
            e.currentTarget.style.fontSize = '16px'
          }}
        />
        {error && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p id={helpId} className="text-sm text-gray-500">
            {helpText}
          </p>
        )}
      </div>
    )
  }
)

MobileFormTextarea.displayName = 'MobileFormTextarea'

interface MobileFormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helpText?: string
  required?: boolean
  options?: Array<{ value: string; label: string }>
}

export const MobileFormSelect = React.forwardRef<HTMLSelectElement, MobileFormSelectProps>(
  ({ label, error, helpText, required, className, id, options = [], ...props }, ref) => {
    const inputId = id || `select-${Math.random().toString(36).slice(2, 9)}`
    const errorId = error ? `${inputId}-error` : undefined
    const helpId = helpText ? `${inputId}-help` : undefined

    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500" aria-label="required">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={inputId}
          {...props}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[errorId, helpId].filter(Boolean).join(' ')}
          className={cn(
            // Base styles
            'w-full px-4 py-3 text-base leading-normal',
            // Touch target
            'min-h-[44px]',
            // Border and radius
            'border rounded-lg border-gray-300',
            // Typography
            'font-normal text-gray-900',
            // Focus states
            'focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:ring-offset-0 focus:border-transparent',
            // Disabled state
            'disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
            // Error state
            error && 'border-red-500 focus:ring-red-500',
            // Appearance
            'appearance-none bg-right pr-10',
            className
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 12px center',
            backgroundRepeat: 'no-repeat',
            fontSize: '16px'
          }}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p id={helpId} className="text-sm text-gray-500">
            {helpText}
          </p>
        )}
      </div>
    )
  }
)

MobileFormSelect.displayName = 'MobileFormSelect'
