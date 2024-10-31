import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngBoundsExpression } from "leaflet";
import styles from "./map.module.css";

// Define types for node data
interface Node {
  type: string;
  count: number;
  position: [number, number]; // [latitude, longitude]
}

// Sample node data with multiple markers, including more in Africa and other regions
const nodes: Node[] = [
  { type: "edge", count: 8831, position: [37.7749, -122.4194] },
  { type: "guardian", count: 2766, position: [34.0522, -118.2437] },
  { type: "validator", count: 29, position: [40.7128, -74.006] },
  { type: "edge", count: 1200, position: [6.5244, 3.3792] },
  { type: "guardian", count: 800, position: [-1.2864, 36.8172] },
  { type: "validator", count: 50, position: [34.8021, 38.9968] },
  { type: "edge", count: 5000, position: [51.5074, -0.1278] },
  { type: "guardian", count: 3200, position: [48.8566, 2.3522] },
  { type: "validator", count: 15, position: [35.6895, 139.6917] },
  { type: "edge", count: 400, position: [-29.8587, 31.0218] },
  { type: "guardian", count: 600, position: [15.5007, 32.5599] },
  { type: "validator", count: 30, position: [36.8219, 1.2921] },
  { type: "edge", count: 1500, position: [-4.4403, 15.2663] },
  { type: "guardian", count: 700, position: [10.4515, -17.4556] },
  { type: "validator", count: 250, position: [-25.7461, 28.1881] },
  { type: "edge", count: 120, position: [1.3521, 103.8198] },
  { type: "guardian", count: 300, position: [40.7128, -74.006] },
  { type: "validator", count: 90, position: [41.9028, 12.4964] },
  { type: "edge", count: 400, position: [34.0522, -118.2437] },
];

// Color mapping for nodes
const markerColors: Record<string, string> = {
  edge: "red",
  guardian: "yellow",
  validator: "lightblue",
};

const MapComponent: React.FC = () => {
  const [center] = useState<[number, number]>([20, 0]);
  const [zoom] = useState<number>(2);

  // Define geographic boundaries to prevent excessive zooming out
  const bounds: LatLngBoundsExpression = [
    [-85, -180], // Bottom-left corner
    [85, 180], // Top-right corner
  ];

  const createCustomMarker = (count: number, type: string) => {
    return L.divIcon({
      className: "custom-marker",
      html: `<div style="background-color: ${markerColors[type]}; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold;">${count}</div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
  };

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={center}
        zoom={zoom}
        minZoom={2}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {nodes.map((node, index) => (
          <Marker
            key={index}
            position={node.position}
            icon={createCustomMarker(node.count, node.type)}
          >
            <Popup>
              {`${
                node.type.charAt(0).toUpperCase() + node.type.slice(1)
              } Node: ${node.count}`}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
