import { ReactNode } from 'react'

import css from './page.module.scss'


export const Page = (props: {
  title: string
  children: ReactNode|ReactNode[]
  loading?: boolean
}) => {
  const {
    title,
    children,
    loading = false,
  } = props
  return (
    <div className={css.page}>
      <h3 className={css.title}>{title}</h3>

      <div className={css.content}>
        {!loading && children}
      </div>
    </div>
  )
}
