// Ensure this file is added to your `tsconfig.json` include array
declare namespace H {
    namespace service {
      class Platform {
        constructor(options: { apikey: string });
        createDefaultLayers: () => any;
      }
    }
    namespace map {
      interface ICoordinates {
        lat: number;
        lng: number;
      }
  
      class Marker {
        constructor(coordinates: ICoordinates);
      }
  
      interface IOptions {
        center: ICoordinates;
        zoom: number;
        pixelRatio: number;
      }
  
      class Map {
        constructor(element: HTMLElement, layer: any, options: IOptions);
        addObject: (object: any) => void;
        dispose: () => void;
      }
    }
    namespace ui {
      class UI {
        static createDefault(map: any, layers: any): any;
      }
    }
    namespace mapevents {
      class MapEvents {
        constructor(map: any);
      }
      class Behavior {
        constructor(mapEvents: any);
      }
    }
  }
  