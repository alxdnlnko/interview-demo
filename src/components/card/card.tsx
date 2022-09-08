import { ReactNode } from 'react'

import css from './card.module.scss'


export const Card = (props: {
  title: string
  children: ReactNode
}) => {
  const {
    title,
    children,
  } = props

  return (
    <div className={css.card}>
      <div className={css.header}>
        {title}
      </div>

      <div className={css.content}>
        {children}
      </div>
    </div>
  )
}
