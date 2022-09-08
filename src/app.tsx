import { Routes, Route } from 'react-router-dom'

import { MainPageRoutes } from './pages/main-page/routes'

import css from './app.module.scss'


export const App = () => {
  return (
    <div className={css.app}>
      <Routes>
        <Route path='/*' element={<MainPageRoutes />} />
      </Routes>
    </div>
  )
}
