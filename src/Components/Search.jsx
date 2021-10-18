import React, { useState } from 'react';
import styles from '../styles/Search/Search.module.css';

const Search = ({ userList, setUserList }) => {
  const [term, setTerm] = useState('');
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserList(userList.filter(title => title.title.includes(term)))
  }

  const suggestionHandler = (e) => {
    // filter function
    // setActive(0);
    // setIsShow(true);
  }

  return (
    <div data-testid='search-1' styles={styles.searchWrapper}>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>
          Search:
          <input type='text' onChange={(e) => setTerm(e.target.value)}/>
        </label>
        <button>search</button>
      </form>
    </div>
  );
};

export default Search;