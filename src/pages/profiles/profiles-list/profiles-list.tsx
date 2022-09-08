import { Link } from 'react-router-dom'

import { Page } from '/components/page'
import { Card } from '/components/card'
import { ProfileInfo } from '/components/profile-info'
import { ProfileInfoPlaceholder } from '/components/profile-info-placeholder'

import { useProfiles } from '../contexts/profiles'


export const ProfilesList = () => {
  const { isLoading, profiles } = useProfiles()
  return (
    <Page
      title='Profiles'
      loading={isLoading}
      loadingFallback={
        <ProfilesPlaceholder />
      }
    >
      {profiles?.map(profile =>
        <Link to={`./${profile.id}`} key={profile.id}>
          <Card hoverable>
            <ProfileInfo profile={profile} />
          </Card>
        </Link>
      )}
    </Page>
  )
}


const ProfilesPlaceholder = () => {
  return (
    <>
      {new Array(3).fill(0).map((_, i) =>
        <Card key={i}>
          <ProfileInfoPlaceholder />
        </Card>
      )}
    </>
  )
}
