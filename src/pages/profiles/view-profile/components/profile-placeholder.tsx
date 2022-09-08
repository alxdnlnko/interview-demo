import { Card } from '/components/card'
import { ProfileInfoPlaceholder } from '/components/profile-info-placeholder'

import { BioPlaceholder } from './bio-placeholder'


export const ProfilePlaceholder = () => {
  return (
    <Card>
      <ProfileInfoPlaceholder />
      <BioPlaceholder />
    </Card>
  )
}
