/* SystemJS module definition */
declare var module: NodeModule;
// Import Leaflet into L in case you want to reference Leaflet types
import * as L from 'leaflet';

// Declare the leaflet module so we can modify it
declare module 'leaflet' {

  // We want to alter the control namespace
  namespace control {

    // Define minimal type information for the coordinates function
    function coordinates(v: any);

  }
}
interface NodeModule {
  id: string;
}
