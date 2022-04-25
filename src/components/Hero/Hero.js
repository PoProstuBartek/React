import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
      <div className={styles.hero}>
        <PageTitle>Organizer</PageTitle>
        <p className={styles.subtitle}>A simple to-do app, with lists, columns and cards</p>
      </div>
    );
  };

  export default Hero;