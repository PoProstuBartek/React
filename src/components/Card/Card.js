import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite, getCardsById } from '../../redux/store';

const Card = ({cardId, title}) => {
  const dispatch =  useDispatch();
  const makeFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite( cardId ))
  }
  const cardData = useSelector(state => getCardsById(state, cardId));
  const isFavorite = cardData.isFavorite;
  return (
    <li className={styles.card}>{title}
      <button className={styles.buttonFavorite} onClick={makeFavorite}>
        <span className={clsx(styles.icon, {[styles.active] : isFavorite }) + ' fa fa-star-o'}/>
      </button>
    </li>
  );
};

export default Card;