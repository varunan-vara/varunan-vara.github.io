import './style.css'

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const loader = new OBJLoader();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#background"),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render(scene, camera);
const controls = new OrbitControls(camera, renderer.domElement)

/* -----Render Title Card----- */

/* Potential Stage */
// const mesh = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});
// loader.load(
//     'Js-Shapes/3d/stage.obj', function (obj) {
//         const stage = new THREE.Mesh(obj.scene, mesh);
//         scene.add(stage)
//     },
// );

// const cylinder1shape = new THREE.CylinderGeometry(20,20,2,100);
// const cylinder2shape = new THREE.CylinderGeometry(18,16,2,100);
// const material = new THREE.MeshStandardMaterial( { color: 0xEFEFEF });
// const cylinder1 = new THREE.Mesh(cylinder1shape, material);
// const cylinder2 = new THREE.Mesh(cylinder2shape, material);
// cylinder2.position.set(0,2,0);

/*Light Set up*/
function lightup () {
    const ambientlight = new THREE.AmbientLight(0xFFFFFF, 0.6);

    const pointlight = new THREE.PointLight(0xF404040);
    pointlight.position.set(40, 50 ,100)

    scene.background = new THREE.Color(0xFFFFFA);

    scene.add(pointlight, ambientlight);
    animate()
}

function randomgreen (min, max) {
    //103,146,137
    //29,120,116
    // return [29 + (Math.random() * 74), 120 + (Math.random() * 26), 116 + (Math.random() * 21)]
    //(randomgreen(29,103), randomgreen(120,146), randomgreen(116,137))
    return (min + (Math.random() * (max - min))) / 255
}

function icosahedron () {
    const funky = new THREE.IcosahedronGeometry((Math.random() * 10), 1);
    const material = new THREE.MeshStandardMaterial({});
    material.color.setRGB(randomgreen(29,103), randomgreen(120,146), randomgreen(116,137));
    const wireframemesh = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true,
        transparent: true
    });
    const mesh = new THREE.Mesh(funky,material);
    const wireframe = new THREE.Mesh(funky,wireframemesh);
    mesh.add(wireframe);
    return mesh;
}

function flyingshape () {
    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(475));
    var mesh = icosahedron();
    mesh.position.set(x,y,z);
    return mesh
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    for (var i = 0; i < 100; i++) {
        objects[i].rotation.x += 0.001;
        objects[i].rotation.y += 0.005;
        objects[i].rotation.z += 0.004;

    }
    renderer.render( scene, camera );
}


const objects = Array(100).fill().map(flyingshape);
for (var i = 0; i < 100; i++) {
    scene.add(objects[i])
}
lightup();
animate();