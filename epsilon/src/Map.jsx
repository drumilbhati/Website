import React, { useState, useEffect } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './App.css';

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const DebugComponent = () => {
  const map = useMap();
  console.log('Map object:', map);
  return null;
};

const GTA5EpsilonMap = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(null);

  const mapBounds = [[0, 0], [1000, 1000]];
  const mapCenter = [500, 500];

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = (error) => setError('Failed to load image');
    img.src = "https://i.redd.it/8qfr3xqfbw671.jpg";
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!imageLoaded) {
    return <div>Loading map image...</div>;
  }

  return (
    <div className="map">
      <MapContainer 
        center={mapCenter} 
        zoom={0} 
        crs={L.CRS.Simple}
        style={{ height: '600px', width: '100%' }}
      >
        <DebugComponent />
        <ImageOverlay
          url="https://i.redd.it/8qfr3xqfbw671.jpg"
          bounds={mapBounds}
        />
        <Marker position={[250, 250]}>
          <Popup>Test Marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GTA5EpsilonMap;