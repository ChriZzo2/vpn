import { type ComponentPropsWithoutRef, type ElementType } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'link' | 'text'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  as,
  className,
  fullWidth,
  variant = 'primary',
  ...restProps
}: ButtonProps<T>) => {
  const Component = as ?? 'button'

  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  return <Component className={classNames} {...restProps} />
}
