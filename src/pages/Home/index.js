import React from 'react';
import './Home.css';
import List from '../../components/structure/List';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const today = new Date();
const formattedDate = format(today, 'PPPP', {locale: pt});

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center h1"> {formattedDate}</h1>
      < List />
    </div>
  )
}

export default Home