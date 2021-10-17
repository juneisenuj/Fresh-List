import React, { useState } from 'react';

const Search = ({ filter, setFilter, userList, setUserList }) => {

  const [term, setTerm] = useState('');
  console.log('Search', userList)
  let filtered = userList.filter(title => title.includes(term))
  console.log(filtered)


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('triggered')
    setUserList(userList.filter(title => title.includes(term)))
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