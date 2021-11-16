import React from 'react';
import './Styles.css';
import List from '../../components/structure/List';
import { FcAlarmClock } from "react-icons/fc";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center h1">Baita relógio < FcAlarmClock /></h1>
      < List />
    </div>
  )
}

export default Home