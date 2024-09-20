import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react'

import * as RadioRadix from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import styles from './radio.module.scss'

import { Check } from '@/assets'
import { Typography } from '@/components/typography'

export type RadioProps = {
    label?: ReactNode | string
} & ComponentPropsWithoutRef<typeof RadioRadix.Item>

export const Radio = forwardRef<ElementRef<typeof RadioRadix.Item>, RadioProps>(
    ({ className, disabled, label, ...rest }, ref) => {
        const labelClassName = clsx(styles.label, disabled && styles.disabled, className)

        return (
            <div className={styles.container}>
                <Typography as={'label'} className={labelClassName} variant={'Subtitle'}>
                    <RadioRadix.Item className={styles.radio} disabled={disabled} ref={ref} {...rest}>
                        <RadioRadix.Indicator className={styles.indicator}>
                            <Check className={clsx(styles.checkIcon, disabled && styles.checkIconDisabled)} />
                        </RadioRadix.Indicator>
                    </RadioRadix.Item>
                    {
                        <Typography as={'label'} variant={'Subtitle'} color={'black'}>
                            {label}
                    </Typography>}
                </Typography>
            </div>
        )
    }
)

Radio.displayName = 'Radio';