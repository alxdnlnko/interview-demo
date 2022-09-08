import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TProfile } from '/types'
import { Page } from '/components/page'
import { Card } from '/components/card'
import { ProfileInfo } from '/components/profile-info'

import { useProfile } from './hooks/use-profile'
import { useBio } from './hooks/use-bio'

import css from './view-profile.module.scss'


export const ViewProfile = (props: {
  id: TProfile['id']
}) => {
  const { id } = props
  const profile = useProfile(id)
  const { isLoading: isLoadingBio, bio } = useBio(profile?.id)

  return (
    <Page
      title={
        `Profile ${id}`
      }
      loading={!profile}
    >
      <Card>
        <ProfileInfo profile={profile!} />

        {isLoadingBio
          ? <Loader />
          : <p className={css.bio}>{bio}</p>
        }
      </Card>

      <Link to='./..' className={css.link}>
        <FontAwesomeIcon icon='chevron-left' />
        Go back
      </Link>
    </Page>
  )
}


const Loader = () => {
  return (
    <div className={css.loader}>
      <FontAwesomeIcon icon='spinner' spin className={css.icon} />
      Loading bio...
    </div>
  )
}
