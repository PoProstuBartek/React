import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({title, description, }));
    setTitle('');
    setDescription('');
}

  return (
    <div className={styles.formWrapper}>
      <form className={styles.columnFrom} onSubmit={handleSubmit}>
        <label className={styles.label}>Title:</label> <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
        <label className={styles.label}>Description:</label> <TextInput value={description} onChange={e => setDescription(e.target.value)}/>
        <Button>ADD LIST</Button>
      </form>
    </div>
  );
}

export default ListForm;