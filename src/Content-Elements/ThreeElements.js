import { useEffect, useRef } from "react";
import * as THREE from "three";


const AnimatingHome = () => {
    const mountRef = useRef(null);
    var initzoom = [1130, 1170]
    var boxsize = 0

    useEffect(() => {
  
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer({alpha: true});
  
      renderer.setSize( window.innerWidth, window.innerHeight );
      mountRef.current.appendChild( renderer.domElement );
  
      var geometry = new THREE.BoxGeometry( 0, 0, 0 );
      var material = new THREE.MeshBasicMaterial( { color: 0xffffff} );
      var cube = new THREE.Mesh( geometry, material );
  
      scene.add( cube );
      camera.position.z = 5;

      var lastpos = 0
  
      var animate = function () {
        requestAnimationFrame( animate );
        var position = window.pageYOffset;

        if (position > initzoom[0] && position < initzoom[1]) {
            geometry.dispose()
            boxsize = 100 * ((initzoom[1] - position) / (initzoom[1] - initzoom[0]))
            
            cube.geometry = THREE.BoxGeometry(boxsize, boxsize, boxsize)
        }
        lastpos = position
        renderer.render( scene, camera );
      }
  
      let onWindowResize = function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
      }
  
      window.addEventListener("resize", onWindowResize, false);
  
      animate();
  
      return () => mountRef.current.removeChild( renderer.domElement);
    }, []);  
      
      return (
          
          <div ref={mountRef} id="threeAnim">
              {/*console.log(boxsize)*/}
          </div>
      )

}

export default AnimatingHome