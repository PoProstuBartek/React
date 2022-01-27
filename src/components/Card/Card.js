import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite, getCardsById, removeFavorite } from '../../redux/cardsRedux';

const Card = ({cardId, title}) => {
  const dispatch =  useDispatch();
  const makeFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite( cardId ))
  }

  const makeNonFavorite = (e) => {
    e.preventDefault();
    dispatch(removeFavorite( cardId ))
  }
  const cardData = useSelector(state => getCardsById(state, cardId));
  const isFavorite = cardData.isFavorite;
  return (
    <li className={styles.card}>{title}
      <div className={styles.buttonWrapper}>
        <button className={styles.buttonFavorite} onClick={makeFavorite}>
          <span className={clsx(styles.icon, {[styles.active] : isFavorite }) + ' fa fa-star-o'}/>
        </button>
        <button className={styles.buttonFavorite} onClick={makeNonFavorite}>
          <span className={clsx(styles.icon) + ' fa fa-trash'}/>
        </button>
      </div>
    </li>
  );
};

export default Card;