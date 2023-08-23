import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';

const App = (props) => {
  
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();
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
    
        <HomeRoute onPhotoClick={handlePhotoClick} photos={state.photos} topics={state.topics} />
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


