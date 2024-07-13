import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const WireframeGlobe = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, globe;

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7; // Increased distance for larger globe

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable alpha for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set background to transparent
    globeRef.current.appendChild(renderer.domElement);

    // Globe
    const globeSize = window.innerWidth < 768 ? 2.5 : 3.5; // Adjust globe size for smaller screens
    const geometry = new THREE.SphereGeometry(globeSize, 8, 8); // Decreased segments for fewer lines

    // Material with custom colored lines
    const material = new THREE.MeshBasicMaterial({
      color: 0xaeb506, // Line color in hexadecimal
      wireframe: true,
    });

    globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Overlay Text
    const textContainer = document.createElement('div');
    textContainer.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-formula';
    textContainer.style.fontSize = window.innerWidth < 768 ? '5vw' : '9vw'; // Adjust text size for smaller screens

    const textLine1 = document.createElement('div');
    textLine1.className = 'text-9xl';
    textLine1.textContent = 'INDIAN ROOTS,';

    const textLine2 = document.createElement('div');
    textLine2.className = 'text-9xl';
    textLine2.textContent = 'GLOBAL REACH';

    textContainer.appendChild(textLine1);
    textContainer.appendChild(textLine2);
    globeRef.current.appendChild(textContainer);

    // Function to center text container
    const centerTextContainer = () => {
      const rect = globeRef.current.getBoundingClientRect();
      textContainer.style.top = `${rect.height / 2}px`;
      textContainer.style.left = `${rect.width / 2}px`;
    };

    // Initial centering
    centerTextContainer();

    // Animation Loop for Rotation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate globe around its own axis
      globe.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      textContainer.style.fontSize = window.innerWidth < 768 ? '3xl' : '9xl'; // Update text size on resize
      centerTextContainer(); // Re-center text on resize
      renderer.render(scene, camera); // Render again on resize
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={globeRef} className="relative w-full h-full"></div>;
};

export default WireframeGlobe;
