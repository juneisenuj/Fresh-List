import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx'
import Search from './Search.jsx'

const Main = () => {
  const [userList, setUserList] = useState([]);
  const [filter, setFilter] = useState('');
  console.log('Main', userList)


  useEffect(() => {
    axios.get('/data')
         .then((data) => {
          //  setUserList(userList => [...userList, data.data])
          setUserList(userList.concat(data.data))
         })
  }, [])

  return (
    <div>
      <Search filter={filter} setFilter={setFilter} userList={userList} setUserList={setUserList}/>
      <List userList={userList} filter={filter}/>
    </div>
  );
};

export default Main;