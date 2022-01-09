import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

const CardForm = props => {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
      e.preventDefault();
      props.action({ title: title }, props.columnId);
      setTitle('');
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.cardForm} onSubmit={handleSubmit}>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <Button>Add card</Button>
      </form>
    </div>
  );
};

export default CardForm;