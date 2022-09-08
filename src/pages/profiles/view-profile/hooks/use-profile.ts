import { useMemo } from 'react'

import { useProfiles } from '../../contexts/profiles'


export const useProfile = (id: string) => {
  const profiles = useProfiles()

  const profile = useMemo(() => {
    return profiles.find(p => p.id === id)
  }, [ profiles, id ])

  return profile
}
