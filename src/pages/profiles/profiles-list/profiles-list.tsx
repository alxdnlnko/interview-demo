import { Link } from 'react-router-dom'

import { Page } from '/components/page'
import { Card } from '/components/card'
import { ProfileInfo } from '/components/profile-info'

import { useProfiles } from '../contexts/profiles'


export const ProfilesList = () => {
  const profiles = useProfiles()
  return (
    <Page title='Profiles'>
      {profiles.map(profile =>
        <Link to={`./${profile.id}`}>
          <Card key={profile.id} hoverable>
            <ProfileInfo profile={profile} />
          </Card>
        </Link>
      )}
    </Page>
  )
}
