import { type ComponentPropsWithoutRef, type ElementType } from 'react'

import clsx from 'clsx'

import styles from './typography.module.scss'

type TypographyComponent<T extends ElementType = 'p'> = {
  as?: T
  textAlign?: 'center' | 'end' | 'inherit' | 'start'
  color?: 'orange' | 'blue' | 'white' | 'black'
  variant?:
    | 'large'
    | 'title1'
    | 'title2'
    | 'Text'
    | 'Subtitle'
    | 'Body'
    | 'Capture'
    | 'Footnote'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>({
  as, color = 'blue',
  className,
  textAlign = 'start',
  variant = 'Text',
  ...rest
}: TypographyComponent<T>) => {
  const Component = as || 'p'
  const finishClassName = clsx(styles.typography, styles[variant], styles[color], className)

  return <Component className={finishClassName} style={{ textAlign }} {...rest} />
}
