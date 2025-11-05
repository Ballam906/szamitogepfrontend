import React, { useState } from 'react';

const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
  return (
    <div>
      <h3>{name}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          style={{ 
            backgroundColor: selectedOption?.name === option.name ? 'lightgreen' : 'lightgrey',
            margin: '5px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {option.name} - {option.price} HUF
        </button>
      ))}
    </div>
  );
};

export const App = () => {
  const [motherboard, setMotherboard] = useState(null);
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);
  const [psu, setPsu] = useState(null);
  const [ssd, SetSSD] = useState(null);
  const [videocard, setVideocard] = useState(null);

  const processors = [
    { name: 'Intel i5', price: 50000 },
    { name: 'Intel i7', price: 75000 },
  ];
 
  const memories = [
    { name: '8GB RAM', price: 12000 },
    { name: '16GB RAM', price: 25000 },
  ];

  const motherboards = [
    {name: 'Gigabyte Z390', price: 40000},
    {name: 'Asus Z790', price: 100000},
  ]

  const psus = [
    {name: 'Asus ROG 850W', price: 15000},
    {name: 'Gigabyte 450W',price: 1}
  ]

  const ssds = [
    {name: 'Samsung 990 PRO', price: 65000},
    {name: 'Kinston nv3', price: 15000},
  ]

  const videocards = [
    {name: 'Gigabyte 9060 XT', price: 0},
    {name: 'Sapphire Nitro+ 9070 XT', price: 290000},
  ]

  const totalPrice = (videocard?.price || 0) + (ssd?.price || 0) + (psu?.price || 0) + (motherboard?.price || 0) +  (processor?.price || 0) + (memory?.price || 0);

  return (
    <div>
      <h2>Számítógép összeszerelő app</h2>
      <ComponentSelector
        name="Alaplap"
        options={motherboards}
        selectedOption={motherboard}
        onSelect={setMotherboard}
      />
      <ComponentSelector
        name="Processzor"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />
      <ComponentSelector
        name="Memória"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />
      <ComponentSelector
        name="Táp"
        options={psus}
        selectedOption={psu}
        onSelect={setPsu}
      />
      <ComponentSelector
        name="SSD"
        options={ssds}
        selectedOption={ssd}
        onSelect={SetSSD}
      />
       <ComponentSelector
        name="Videókártya"
        options={videocards}
        selectedOption={videocard}
        onSelect={setVideocard}
      />
      <h3>Teljes ár: {totalPrice} HUF</h3>
    </div>
  );
};


export default App;
