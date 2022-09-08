import { Routes, Route } from 'react-router-dom'

import { MainPage } from './main-page'


export const MainPageRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<MainPage />} />
    </Routes>
  )
}
