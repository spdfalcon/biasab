import { cn } from '@/app/_lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  gradient?: boolean
}

export function Card({ className, gradient, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white shadow-sm',
        gradient && 'bg-gradient-to-br from-primary-50/50 to-white',
        className
      )}
      {...props}
    />
  )
}

Card.Header = function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />
}

Card.Title = function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-lg font-semibold', className)} {...props} />
}

Card.Description = function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-gray-500', className)} {...props} />
}

Card.Content = function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 pb-6', className)} {...props} />
}

Card.Footer = function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-6 py-4 bg-gray-50/50 border-t rounded-b-2xl', className)}
      {...props}
    />
  )
}
