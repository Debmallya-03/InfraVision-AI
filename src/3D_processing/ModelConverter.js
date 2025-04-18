import React, { useState } from 'react';
import { loadImage, findContours } from './utils/contourUtils';
import { extrudeContours } from './utils/threeDHelpers';

export default function ModelConverter({ imageFile }) {
  const [isConverting, setIsConverting] = useState(false);
  const [modelData, setModelData] = useState(null);

  const handleConvert = async () => {
    setIsConverting(true);
    try {
      // Step 1: Load and process image
      const image = await loadImage(imageFile);
      
      // Step 2: Extract contours
      const contours = await findContours(image);
      
      // Step 3: Generate 3D model
      const glbData = await extrudeContours(contours);
      
      setModelData(glbData);
    } catch (error) {
      console.error("Conversion failed:", error);
    }
    setIsConverting(false);
  };

  return (
    <div>
      <button 
        onClick={handleConvert}
        disabled={isConverting}
        className="convert-btn"
      >
        {isConverting ? 'Generating 3D Model...' : 'Convert to 3D'}
      </button>
      {modelData && (
        <div className="success-message">
          3D Model Generated Successfully!
        </div>
      )}
    </div>
  );
}