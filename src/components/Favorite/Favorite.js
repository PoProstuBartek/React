import { useSelector } from 'react-redux';
import { getFilteredFavoriteCards } from '../../redux/store';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss'
import Card from '../Card/Card';

const Favorite = () => {
  const cards = useSelector(state => getFilteredFavoriteCards(state));
  
  if(cards.length === 0) 
  return (
      <PageTitle>No favorite cards ... yet!</PageTitle>
  )

  return (
      <div className={styles.container}>
        <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title} />)}
          </ul>
        </article>
      </div>
  );
};

export default Favorite;