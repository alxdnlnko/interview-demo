import { TProfile } from '/types'

import css from './profile-info.module.scss'


export const ProfileInfo = (props: {
  profile: TProfile
}) => {
  const {
    profile,
  } = props

  return (
    <div className={css.wrapper}>
      <img src={profile.avatarUrl} alt="" className={css.avatar} />

      <div className={css.info}>
        <div className={css.name}>{profile.name}</div>
        <div className={css.role}>{profile.role}</div>
      </div>
    </div>
  )
}
