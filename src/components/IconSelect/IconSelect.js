import styles from './IconSelect.module.scss';

const IconSelect = (props) => {
  return <select className={styles.select} value={props.value} onChange={props.onChange}>
    <option value=""></option>
    <option value="music">&#xf001;</option>
    <option value="book">&#xf02d;</option>
    <option value="film">&#xf008;</option>
    <option value="gamepad">&#xf11b;</option>
    <option value="address-book">&#xf2b9;</option>
    <option value="list-ul">&#xf0ca;</option>
  </select>
}

export default IconSelect;