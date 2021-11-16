import React, { useState, useEffect } from 'react'
import Card from '../Card';

const List = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getLists();
  }, [])

  const getLists = async () => {
    const request = await fetch('http://localhost:3001/')
    const data = await request.json();
    setLists(data);
  }

  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3">
      {lists.map((list) => (
        <Card data={list} key={list._id}/>
      ))}
      
    </div>
  )
}

export default List
