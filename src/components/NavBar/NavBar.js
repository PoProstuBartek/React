import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <span className={styles.icon + ' fa fa-tasks'} />
        <ul className={styles.list}>
          <li>Home</li>
          <li>Favorite</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar