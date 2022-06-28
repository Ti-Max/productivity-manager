import * as THREE from 'three';

export class Scene {
    constructor() {
        //basic scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

        renderer.setSize(canvas.width, canvas.height);

        // scene.background = new THREE.Color(0xffff00);

        renderer.render(scene, camera);

        this.onWindowResize = function () {
            camera.aspect = canvas.innerWidth / canvas.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(canvas.width, canvas.height);
        };

        this.onKeyDown = function (event) {
        };

        this.onKeyUp = function (event) {
        };
        this.update = function () {
            
            //gradient background color
            const color = new THREE.Color(0xffff00);
            color.r = Math.sin(Date.now() * 0.001);
            color.g = Math.cos(Date.now() * 0.001);
            color.b = Math.sin(Date.now() * 0.001);
            renderer.setClearColor(color);

            renderer.render(scene, camera);
        };
        
    }
}