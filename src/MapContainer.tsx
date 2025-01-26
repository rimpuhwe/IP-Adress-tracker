import React, { useEffect, useRef } from "react";

interface MapContainerProps {
  lat: number;
  lng: number;
}

const MapContainer: React.FC<MapContainerProps> = ({ lat, lng }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
      });
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.H) return;

      const H = window.H;

      // Initialize the HERE Maps platform
      const platform = new H.service.Platform({
        apikey: "Ah5lnrvyedguDezyYDJrfmdM3sbH_BoTrpWG-GRjVF0",
      });

      const defaultLayers = platform.createDefaultLayers();

      // Initialize a map
      const map = new H.map.Map(
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

      // Add a marker to the map
      const marker = new H.map.Marker({ lat, lng });
      map.addObject(marker);

      // Cleanup map on component unmount
      return () => {
        map.dispose();
      };
    };

    const loadHereMaps = async () => {
      try {
        await loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");
        await loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js");
        await loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js");
        await loadScript("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js");
        initializeMap();
      } catch (error) {
        console.error("Error loading HERE Maps scripts:", error);
      }
    };

    loadHereMaps();
  }, [lat, lng]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapContainer;
