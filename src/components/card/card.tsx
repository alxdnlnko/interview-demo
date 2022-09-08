import { ReactNode } from 'react'

import css from './card.module.scss'


export const Card = (props: {
  title?: string
  hoverable?: boolean
  children: ReactNode|ReactNode[]
}) => {
  const {
    title,
    hoverable = false,
    children,
  } = props

  return (
    <div
      className={css.card}
      data-hoverable={hoverable || undefined}
    >
      {!!title &&
        <div className={css.header}>
          {title}
        </div>
      }

      <div className={css.content}>
        {children}
      </div>
    </div>
  )
}
