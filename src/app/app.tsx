import { Routes, Route } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ProfilesRoutes } from '/pages/profiles/routes'

import '/lib/icons'

import '@fortawesome/fontawesome-svg-core/styles.css'
import css from './app.module.scss'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
})

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={css.app}>
        <Routes>
          <Route path='*' element={<ProfilesRoutes />} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}
