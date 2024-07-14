import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const WireframeGlobe = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, globe;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = window.innerWidth < 768 ? 6 : 7;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    globeRef.current.appendChild(renderer.domElement);


    const globeSize = window.innerWidth < 768 ? 1.5 : 3.5;
    const geometry = new THREE.SphereGeometry(globeSize, 8, 8);

    const material = new THREE.MeshBasicMaterial({
      color: 0xaeb506,
      wireframe: true,
    });

    globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Overlay Text
    const textContainer = document.createElement('div');
    textContainer.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-formula';
    textContainer.style.fontSize = window.innerWidth < 768 ? '3rem' : '9rem';

    const textLine1 = document.createElement('div');
    textLine1.className = 'text-5xl md:text-9xl';
    textLine1.textContent = 'INDIAN ROOTS,';

    const textLine2 = document.createElement('div');
    textLine2.className = 'text-5xl md:text-9xl';
    textLine2.textContent = 'GLOBAL REACH';

    textContainer.appendChild(textLine1);
    textContainer.appendChild(textLine2);
    globeRef.current.appendChild(textContainer);

    const centerTextContainer = () => {
      const rect = globeRef.current.getBoundingClientRect();
      textContainer.style.top = `${rect.height / 2}px`;
      textContainer.style.left = `${rect.width / 2}px`;
    };

    centerTextContainer();

    const animate = () => {
      requestAnimationFrame(animate);

      globe.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (window.innerWidth < 768) {
        camera.position.z = 6;
        globe.scale.set(1, 1, 1);
        textContainer.style.fontSize = '3rem';
      } else {
        camera.position.z = 7;
        globe.scale.set(1, 1, 1);
        textContainer.style.fontSize = '9rem';
      }

      centerTextContainer();
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={globeRef} className="relative h-[50vh] w-full md:h-full"></div>;
};

export default WireframeGlobe;
