import { NavLink } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss'

const About = () => {
    return (
        <div className={styles.container}>
           <PageTitle>About</PageTitle>
            <p className={styles.about}>This is a simple app that allows you to create lists with columns and add card into them.<br/><br/>
                You can create as many lists and columns as you want. If you get overwhelmed by your creativty,
                you can mark cards as favorite by clicking star icon on them.<br/><br/> You can find your favorite cards <NavLink to="/favorite"><i>here</i></NavLink>.
                There is also a search bar that allows you to find cards you've lost.
            </p>
        </div>
    )
}

export default About;