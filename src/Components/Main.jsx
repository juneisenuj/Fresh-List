import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx'
import Search from './Search.jsx'
import EditForm from './EditForm.jsx'
import Redux from './Redux.jsx'

const Main = () => {
  const [userList, setUserList] = useState([]);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [chosenItem, setChosenItem] = useState({});


  useEffect(() => {
    axios.get('/data')
         .then((data) => {
          setUserList(userList.concat(data.data))
         })
  }, [])

  return (
    <div>
      <Redux />
      <Search filter={filter} setFilter={setFilter} userList={userList} setUserList={setUserList}/>
      <List userList={userList} filter={filter} showModal={showModal} setShowModal={setShowModal} setChosenItem={setChosenItem}/>
      <EditForm showModal={showModal} setShowModal={setShowModal} chosenItem={chosenItem} setUserList={setUserList} userList={userList}/>
    </div>
  );
};

export default Main;