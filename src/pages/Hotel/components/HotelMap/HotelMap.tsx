import { Box } from '@mui/material';
import L from 'leaflet';
import { memo, useMemo } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { HotelMapProps } from './HotelMap.types';

const HotelMap = ({ lat, lng, name }: HotelMapProps) => {
  const markerIcon = useMemo(
    () =>
      new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }),
    []
  );

  return (
    <Box sx={{ width: '100%', height: 400, borderRadius: 2, overflow: 'hidden' }}>
      <MapContainer center={[lat, lng]} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]} icon={markerIcon}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default memo(HotelMap);
