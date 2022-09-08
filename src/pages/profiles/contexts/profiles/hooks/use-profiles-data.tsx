import { useQuery } from '@tanstack/react-query'

import { TProfile } from '/types'


const PROFILES: TProfile[] = [
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

const fetchProfiles = async (): Promise<TProfile[]> => {
  await new Promise(r => setTimeout(r, 1500))
  return PROFILES
}

export const useProfilesData = () => {
  const { isLoading, data: profiles } = useQuery(['profiles'], fetchProfiles)
  return {
    isLoading,
    profiles,
  }
}
