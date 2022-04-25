import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite, getCardsById, removeThatCard } from '../../redux/cardsRedux';

const Card = ({cardId, title}) => {
  const dispatch =  useDispatch();
  const makeFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite( cardId ))
  }

  const removeCard = (e) => {
    e.preventDefault();
    dispatch(removeThatCard( cardId ))
  }
  
  const { isFavorite } = useSelector(state => getCardsById(state, cardId));
  
  return (
    <li className={styles.card}>{title}
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={makeFavorite}>
          <span className={clsx(styles.icon, {[styles.active] : isFavorite }) + ' fa fa-star-o'}/>
        </button>
        <button className={styles.button} onClick={removeCard}>
          <span className={clsx(styles.icon) + ' fa fa-trash'}/>
        </button>
      </div>
    </li>
  );
};

export default Card;