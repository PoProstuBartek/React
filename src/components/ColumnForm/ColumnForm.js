import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(''); 
  const [icon, setIcon] = useState(''); 
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setTitle('');
    setIcon('');
}

  return (
    <div className={styles.formWrapper}>
      <form className={styles.columnFrom} onSubmit={handleSubmit}>
        <label className={styles.label}>Title:</label> <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
        <label className={styles.label}>Icon:</label> <TextInput value={icon} onChange={e => setIcon(e.target.value)}/>
        <Button>ADD COLUMN</Button>
      </form>
    </div>
  );
};

export default ColumnForm;