import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';


const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    console.log('photo clicked', photo);
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
    
        <HomeRoute onPhotoClick={handlePhotoClick} />
        {selectedPhoto && (
          <PhotoDetailsModal
            photo={selectedPhoto}
            onCloseModal={handleCloseModal}
          />
        )}
   
    </div>
  );
};

export default App;


