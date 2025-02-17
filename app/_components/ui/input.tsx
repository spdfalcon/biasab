import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/app/_lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          className={cn(
            'w-full rounded-md border bg-white px-3 py-2',
            'focus:outline-none focus:ring-2 focus:ring-primary-500',
            'disabled:cursor-not-allowed disabled:opacity-50',
            {
              'border-red-500 focus:ring-red-500': error,
              'border-gray-300': !error,
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className={cn('mt-1 text-sm', error ? 'text-red-500' : 'text-gray-500')}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
