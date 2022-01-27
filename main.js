import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#background"),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render(scene, camera);
function resizehandler () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( "resize", resizehandler, false);
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
    const funky = new THREE.IcosahedronGeometry((Math.random() * 5), 1);
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
    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(700));
    var mesh = icosahedron();
    mesh.position.set(x,y,z);
    return mesh
}

function roundedrect (l, w, r) {
    const rrect = new THREE.Shape();
    rrect.moveTo(0,r);
    rrect.lineTo(0, l-r);
    rrect.bezierCurveTo(0, l-r, l, 0, l, r);
    rrect.lineTo(w-r, l);
    rrect.bezierCurveTo(w-r,l,w,l,w,l-r);
    rrect.lineTo(w, r);
    rrect.bezierCurveTo(w,r,w,0,w-r,0)
    rrect.lineTo(r,0)
    rrect.bezierCurveTo(r,0,0,0,0,r);
    return rrect
}

function plaque () {
    const extrudesettings = {
        steps: 2,
        depth: 2,
    }
    const geometry = new THREE.ExtrudeGeometry(roundedrect(40,30,2),extrudesettings);
    const meshmaterial = new THREE.MeshStandardMaterial({});
    meshmaterial.color.set(0xFEFEFE);
    const wireframemesh = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true,
        transparent : true
    });
    const mesh = new THREE.mesh(geometry, meshmaterial);
    const wireframe = new THREE.mesh(geometry, wireframemesh);
    mesh.add(wireframe);
    return mesh
}

function scroller () {
    const t = document.body.getBoundingClientRect().top;

    camera.position.y = (t) * -0.001;
    camera.position.x = (t) * -0.005;
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    for (var i = 0; i < 400; i++) {
        objects[i].rotation.x += Math.random() * 0.005;
        objects[i].rotation.y += Math.random() * 0.001;
        objects[i].rotation.z += Math.random() * 0.007;
    }
    console.log(window.innerWidth);
    renderer.render( scene, camera );

    //temp
    camera.updateMatrix();
    var vector = camera.position.clone();
    //vector.applyMatrix3( camera.matrixWorld );
    console.log(vector)
}

const objects = Array(5000).fill().map(flyingshape);
for (var i = 0; i < 400; i++) {
    scene.add(objects[i])
}

document.body.onscroll = scroller;
lightup();

//unused
roundedplaque = plaque();

animate();

