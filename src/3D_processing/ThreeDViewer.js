import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model({ modelData, riskData }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelData);

  // Apply risk visualization
  useEffect(() => {
    if (riskData) {
      riskData.weakPoints.forEach(point => {
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.1),
          new THREE.MeshBasicMaterial({ 
            color: getSeverityColor(point.severity),
            transparent: true,
            opacity: 0.7
          })
        );
        sphere.position.set(point.x, point.y, point.z);
        group.current.add(sphere);
      });
    }
  }, [riskData]);

  return (
    <group ref={group} dispose={null}>
      <primitive object={nodes.scene} />
    </group>
  );
}

export default function ThreeDViewer({ modelData, analysisResult }) {
  return (
    <div className="viewer-container">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model modelData={modelData} riskData={analysisResult} />
        <OrbitControls />
      </Canvas>
      
      {analysisResult && (
        <div className="risk-panel">
          <h3>Risk Score: {analysisResult.riskScore}/100</h3>
          <ul>
            {analysisResult.recommendations.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}