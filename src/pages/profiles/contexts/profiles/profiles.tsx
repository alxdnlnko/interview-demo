import { ReactNode } from 'react'

import type { TProfile } from '/types'
import { createContext } from '/lib/context'

import { useProfilesData } from './hooks/use-profiles-data'


type ProfileContext = {
  isLoading: boolean
  profiles: TProfile[] | undefined
}
const [ useProfiles, Provider ] = createContext<ProfileContext>()


export const ProfilesProvider = (props: {
  children: ReactNode
}) => {
  const { children } = props
  const { isLoading, profiles } = useProfilesData()
  return (
    <Provider value={{ isLoading, profiles }}>
      {children}
    </Provider>
  )
}

export { useProfiles }
