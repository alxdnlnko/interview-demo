import { ReactNode } from 'react'

import css from './page.module.scss'


export const Page = (props: {
  title: string
  children: ReactNode|ReactNode[]
  loading?: boolean
  loadingFallback?: ReactNode
}) => {
  const {
    title,
    children,
    loading = false,
    loadingFallback,
  } = props
  return (
    <div className={css.page}>
      <h3 className={css.title}>{title}</h3>

      <div className={css.content}>
        {!loading ? children : loadingFallback}
      </div>
    </div>
  )
}
