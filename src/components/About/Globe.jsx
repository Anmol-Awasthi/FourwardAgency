import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const WireframeGlobe = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, globe;
    const container = globeRef.current;

    const init = () => {
      console.log("Initializing scene...");

      scene = new THREE.Scene();

      const width = container.clientWidth;
      const height = container.clientHeight || container.offsetHeight || window.innerHeight;

      console.log(`Container dimensions - width: ${width}, height: ${height}`);

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = width < 768 ? 6 : 7;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);

      container.appendChild(renderer.domElement);

      createGlobe(width);

      // Overlay Text
      const textContainer = document.createElement('div');
      textContainer.className = 'absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-formula';
      textContainer.style.fontSize = width < 768 ? '5xl' : '9xl';

      const textLine1 = document.createElement('div');
      textLine1.className = 'w-full tracking-wider text-7xl md:text-9xl';
      textLine1.textContent = 'INDIAN ROOTS,';

      const textLine2 = document.createElement('div');
      textLine2.className = 'text-7xl tracking-wider md:text-9xl';
      textLine2.textContent = 'GLOBAL REACH';

      textContainer.appendChild(textLine1);
      textContainer.appendChild(textLine2);
      container.appendChild(textContainer);

      const centerTextContainer = () => {
        const rect = container.getBoundingClientRect();
        textContainer.style.top = `${rect.height / 2}px`;
        textContainer.style.left = `${rect.width / 2}px`;
        console.log(`Text container centered at top: ${textContainer.style.top}, left: ${textContainer.style.left}`);
      };

      centerTextContainer();

      const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.002;
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight || container.offsetHeight || window.innerHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);

        if (globe) scene.remove(globe);
        createGlobe(newWidth);

        if (newWidth < 768) {
          camera.position.z = 6;
          textContainer.style.fontSize = '5rem';
        } else {
          camera.position.z = 7;
          textContainer.style.fontSize = '9rem';
        }

        centerTextContainer();
        renderer.render(scene, camera);
      };

      window.addEventListener('resize', handleResize);
    };

    const createGlobe = (width) => {
      const globeSize = width < 768 ? 2.2 : 3.5; // Increase globe size for mobile view
      const segments = 10; // Reduce the number of segments for the wireframe

      const geometry = new THREE.SphereGeometry(globeSize, segments, segments);

      const material = new THREE.MeshBasicMaterial({
        color: 0xaeb506,
        wireframe: true,
      });

      globe = new THREE.Mesh(geometry, material);
      scene.add(globe);
    };

    init();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer) renderer.dispose();
      if (globeRef.current) globeRef.current.innerHTML = '';
    };
  }, []);

  return <div ref={globeRef} className="relative h-[70vh] w-full md:h-full"></div>;
};

export default WireframeGlobe;
