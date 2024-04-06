import React from 'react';
import './Cards.css'

function Home() {
  const cardData = [
    {
      title: "Deaf", description: "Glasses for Deaf.", imageSrc: " https://www.shutterstock.com/image-vector/deafness-concept-young-man-smiles-600nw-2037012359.jpg", features: [
        "Patented Dome Bone Conduction Transducer",
        "Arrays of Microphones",
        "Bluetooth & Rechargeable"
      ]
    },

    {
      title: "Blind", description: "Glasses for Blind.", imageSrc: "https://img.freepik.com/premium-vector/young-blind-man-dark-glasses-walking-with-cane-stick-street_535862-839.jpg", features: [
        "Objects & Face Recognition",
        "1080p front camera",
      ]
    },
    {
      title: "Mute", description: "Glasses for Mute.", imageSrc: "https://img.freepik.com/free-photo/portrait-focused-calm-attractive-guy-casual-outfit_176420-24210.jpg?w=900", features: [
        "Real time sign language to audio conversion",
        "Pairs of side camera & speaker",
        "Offline processing",
      ]
    },

  ];

  return (
    <div className="container mx-auto px-4" style={{ marginTop: "30px" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col mycard" style={{ margin: "20px" , backgroundColor:'#172554' ,color:'#EEE4B1'}} >
            <img className="w-full h-auto myimage1" src={card.imageSrc} alt={card.title} style={{ height: '300px' , width:'300px' }} />
            <div className="px-6 py-4 flex-grow" style={{color:'#EEE4B1'}}>
              <div className="font-bold text-xl mb-2"  style={{color:'white'}}>{card.title}</div>
              <p className="text-gray-700 font-bold  text-base"  style={{color:'white'}}>{card.description}</p>
              <ul className="mt-2  list-disc "  style={{color:'white',padding:'20px'}}>
                {card.features.map((feature, index) => (
                  <li key={index} className="text-gray-700"  style={{color:'rgb(209 213 219 / var(--tw-text-opacity))'}}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
