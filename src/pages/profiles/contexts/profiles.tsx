import { ReactNode } from 'react'

import type { TProfile } from '/types'
import { createContext } from '/lib/context'

const [ useProfiles, Provider ] = createContext<TProfile[]>()


const PROFILES = [
  {
    id: 'id-1',
    name: 'Juliya V.',
    role: 'Sales manager',
    avatarUrl: 'https://i.pravatar.cc/150?u=a04259026704d',
  },
  {
    id: 'id-2',
    name: 'Alex D.',
    role: 'Staff manager',
    avatarUrl: 'https://i.pravatar.cc/150?u=a04s259026704d',
  },
  {
    id: 'id-3',
    name: 'Anna S.',
    role: 'Development manager',
    avatarUrl: 'https://i.pravatar.cc/150?u=add4s259026704iss',
  }
]

export const ProfilesProvider = (props: {
  children: ReactNode
}) => {
  const { children } = props
  return (
    <Provider value={PROFILES}>
      {children}
    </Provider>
  )
}

export { useProfiles }
