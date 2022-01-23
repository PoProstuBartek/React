import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchstring } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('')
  const placeholder = useSelector(state => state.searchString);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring(searchString));
    //setSearchString();
  }
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder={placeholder} value={searchString} onChange={e => setSearchString(e.target.value)}/>
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
  };

  export default SearchForm;