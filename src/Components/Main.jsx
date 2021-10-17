import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx'

const Main = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('/data')
         .then((data) => {
           setUserList(userList => [...userList, data.data])
         })
  }, [])

  return (
    <div>
      <List userList={userList}/>
    </div>
  );
};

export default Main;