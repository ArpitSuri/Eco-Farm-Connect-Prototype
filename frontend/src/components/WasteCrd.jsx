import React from 'react';

const WasteCard = ({ item }) => {
  // Replace this with your actual backend URL
  const backendUrl = "http://localhost:8080";  
  const imageUrl = `${backendUrl}${item.cropImage}`; 

  return (
    <div>
      <a href="#" className="block">
        <img
          alt="Crop Image"
          src={imageUrl}
          className="h-32 w-1/2 object-cover sm:h-80 lg:h-96"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          {item.typeOfWaste} produced by {item.firstName} {item.lastName}
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">
          Quantity of waste produced: {item.quantityOfWaste} kg
        </p>
      </a>
    </div>
  );
};

export default WasteCard;
