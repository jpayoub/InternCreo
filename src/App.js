import React from 'react';
import './App.css';
import Card from './Card';
import starter from './images/starter_icn.png';
import enterprise from './images/enterprise_icn.png'
import pro from './images/pro_icn.png'

const cardData = [
  {
    imgSrc: starter,
    title: "Starter",
    pricing: "$5 / mo",
    desc1: "5 Pages And Blocks",
    desc2: "Limited Template Library",
    desc3: "Email Support",
    desc4: "Basic Hosting", 
    btnLink: "#",
  },

  {
    imgSrc: pro,
    title: "Pro",
    pricing: "$28 / mo",
    desc1: "20 Pages And Blocks",
    desc2: "Unlimited Template Library",
    desc3: "Phone + Email Support",
    desc4: "Dedicated Hosting",
    btnLink: "#",
  },

  { 
    imgSrc: enterprise,
    title: "Entreprise",
    pricing: "$49 / mo",
    desc1: "Unlimited Pages And Blocks",
    desc2: "Unlimited Template Library",
    desc3: "Dedicated Support",
    desc4: "Advanced Hosting",
    btnLink: "#",
  }
];

  function App() {

    return (
      <div className='App'>
      
        <h1 className='title'>Pricing Options </h1>

        <div className='container'>

        {cardData.map((card, index) => (
          <Card key={index} data={card} />
        ))}

        </div>

      </div>
    );
  
  };

export default App;
