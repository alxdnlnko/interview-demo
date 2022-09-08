import css from './profile-info-placeholder.module.scss'


export const ProfileInfoPlaceholder = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.avatar}></div>
      <div className={css.content}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
