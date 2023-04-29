import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as SerchIcon } from './../../images/search.svg';
import { useState } from 'react';
import Notiflix from 'notiflix';

const Serchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handelCategotyChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return Notiflix.Notify.failure('You have entered a category name');
    }

    onSubmit(value);
    setValue('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handelSubmit} autoComplete="off">
        <SearchFormInput
          onChange={handelCategotyChange}
          value={value}
          type="text"
          placeholder="Search images and photos"
        />
        <SearchFormButton type="submit">
          <SerchIcon width="30px" height="30px" />
        </SearchFormButton>
      </SearchForm>
    </Header>
  );
};

Serchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Serchbar;
