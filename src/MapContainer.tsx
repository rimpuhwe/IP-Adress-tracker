import React, { useEffect, useRef } from "react";

interface MapContainerProps {
  lat: number;
  lng: number;
}

const MapContainer: React.FC<MapContainerProps> = ({ lat, lng }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

      const H = window.H;

      // Initialize the HERE Maps platform
      const platform = new H.service.Platform({
        apikey: "Ah5lnrvyedguDezyYDJrfmdM3sbH_BoTrpWG-GRjVF0",
      });

      const defaultLayers = platform.createDefaultLayers();

      // Initialize a map
      const map = new H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          center: { lat, lng },
          zoom: 14,
          pixelRatio: window.devicePixelRatio || 1,
        }
      );

      // Add map controls
      const ui = H.ui.UI.createDefault(map, defaultLayers);
      const mapEvents = new H.mapevents.MapEvents(map);
      new H.mapevents.Behavior(mapEvents);
      console.log(ui);

      // Cleanup map on component unmount
      return () => {
        map.dispose();
      };
  }, [lat, lng]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapContainer;

