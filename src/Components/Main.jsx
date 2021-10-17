import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx'
import Search from './Search.jsx'
import EditForm from './EditForm.jsx'

const Main = () => {
  const [userList, setUserList] = useState([]);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [chosenItem, setChosenItem] = useState({});
  console.log('Main', userList)


  useEffect(() => {
    axios.get('/data')
         .then((data) => {
          setUserList(userList.concat(data.data))
         })
  }, [])

  return (
    <div>
      <Search filter={filter} setFilter={setFilter} userList={userList} setUserList={setUserList}/>
      <List userList={userList} filter={filter} showModal={showModal} setShowModal={setShowModal} setChosenItem={setChosenItem}/>
      <EditForm showModal={showModal} setShowModal={setShowModal} chosenItem={chosenItem}/>
    </div>
  );
};

export default Main;