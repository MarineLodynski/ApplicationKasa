import React, { useEffect, useState } from 'react';
import './Cards.css';

function Cards() {
    const [titles, setTitles] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('data.json');
          const data = await response.json();
          const extractedTitles = data.map(item => item.title);
          setTitles(extractedTitles);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    },);
  
    return (
      <div className='gallery-cards'>
        <ul>
          {titles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    );
  }

export default Cards

/*<div className='location'>
<p>Titre de la location</p>
</div>
<div className='location'>
<p>Titre de la location</p>
</div>
<div className='location'>
<p>Titre de la location</p>
</div>
<div className='location'>
<p>Titre de la location</p>
</div>
<div className='location'>
<p>Titre de la location</p>
</div>
<div className='location'>
<p>Titre de la location</p>
</div>
</div>*/