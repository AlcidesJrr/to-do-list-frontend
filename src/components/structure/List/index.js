import React, { useState, useEffect } from 'react'
import Card from '../Card';
import Api from '../../../api/api'

const List = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getLists();
  }, [])

  const getLists = async () => {
    const request = await Api.fetchGetAll('https://backend-to-do-list-blue.herokuapp.com/')
    const data = await request.json();
    setLists(data);
  }

  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-5">
      {lists.map((list) => (
        <Card data={list} key={list._id}/>
      ))}
      
    </div>
  )
}

export default List
