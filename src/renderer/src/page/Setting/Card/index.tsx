import React from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

interface CardProps {
  children?: React.ReactNode
  title: string
  tips?: string
  disabled?: boolean
  extra?: React.ReactNode
}

export const Card = ({ extra, title, tips, children, disabled }: CardProps) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles.disabled]: disabled
      })}>
      <span className={styles.title}>
        {title}
        {tips && <span className={styles.tips}>（{tips}）</span>}
        {extra && extra}
      </span>
      <div className={styles.content}>{children && children}</div>
    </div>
  )
}

interface CardNewlineProps extends CardProps {
  extra: React.ReactNode
}

export const CardNewline = ({ title, tips, extra, children, disabled }: CardNewlineProps) => {
  return (
    <div
      className={classNames(styles.cardNewline, {
        [styles.disabled]: disabled
      })}>
      <div className={styles.header}>
        <span>
          {title}
          {tips && <span className={styles.tips}>（{tips}）</span>}
        </span>
        <div className={styles.content}>{extra && extra}</div>
      </div>
      <div className={styles.content}>{children && children}</div>
    </div>
  )
}
