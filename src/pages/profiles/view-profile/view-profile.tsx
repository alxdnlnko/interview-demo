import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TProfile } from '/types'
import { Page } from '/components/page'
import { Card } from '/components/card'
import { ProfileInfo } from '/components/profile-info'

import { BioPlaceholder } from './components/bio-placeholder'
import { ProfilePlaceholder } from './components/profile-placeholder'
import { useProfile } from './hooks/use-profile'
import { useBio } from './hooks/use-bio'

import css from './view-profile.module.scss'


export const ViewProfile = (props: {
  id: TProfile['id']
}) => {
  const { id } = props
  const { isLoading, profile } = useProfile(id)

  return (
    <Page
      title={`Profile ${id}`}
      loading={isLoading}
      loadingFallback={
        <ProfilePlaceholder />
      }
    >
      <Card>
        <ProfileInfo profile={profile!} />
        <Bio profileId={profile?.id} />
      </Card>

      <Link to='./..' className={css.link}>
        <FontAwesomeIcon icon='chevron-left' />
        Go back
      </Link>
    </Page>
  )
}


const Bio = (props: {
  profileId?: string
}) => {
  const { profileId } = props
  const { isLoading, bio } = useBio(profileId)
  return (
    <div>
      {isLoading
        ? <BioPlaceholder />
        : <p className={css.bio}>{bio}</p>
      }
    </div>
  )
}
