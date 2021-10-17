import React, { useState } from 'react';

const Search = ({ filter, setFilter, userList, setUserList }) => {

  const [term, setTerm] = useState('');
  console.log('Search', userList)



  const submitHandler = (e) => {
    e.preventDefault();
    setUserList(userList.filter(title => title.title === term))
  }


  return (
    <div>
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