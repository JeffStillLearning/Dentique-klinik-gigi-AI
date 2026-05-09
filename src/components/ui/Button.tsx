import { cn } from '@/lib/cn'

type Variant = 'primary' | 'ghost' | 'clay'
type Size = 'default' | 'sm'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
  arrow?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-clay-deep',
  ghost: 'border border-ink text-ink hover:bg-ink hover:text-paper',
  clay: 'bg-clay text-paper hover:bg-clay-deep',
}

const sizeClasses: Record<Size, string> = {
  default: 'px-[22px] py-[14px] text-[14px]',
  sm: 'px-[16px] py-[10px] text-[13px]',
}

export function Button({
  href,
  variant = 'primary',
  size = 'default',
  arrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-[10px] rounded-full transition-all duration-200 tracking-[0.02em] group',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && (
        <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
      )}
    </a>
  )
}
