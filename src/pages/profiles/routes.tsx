import { Routes, Route, useParams } from 'react-router-dom'

import { ProfilesProvider } from './contexts/profiles'

import { ProfilesList } from './profiles-list'
import { ViewProfile } from './view-profile'


export const ProfilesRoutes = () => {
  return (
    <ProfilesProvider>
      <Routes>
        <Route path='' element={<ProfilesList />} />
        <Route path=':id' element={<ViewProfileRoute />} />
      </Routes>
    </ProfilesProvider>
  )
}


const ViewProfileRoute = () => {
  const { id } = useParams()
  return (
    <>
      {!!id && <ViewProfile id={id} />}
    </>
  )
}
