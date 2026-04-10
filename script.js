// 🌙 Dark Mode
function toggleDark() {
    document.body.classList.toggle("dark");
}

// ✨ Scroll Animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});

// 🐧 3D Penguin (Three.js)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(120, 120);
document.getElementById("penguin-container").appendChild(renderer.domElement);

// Geometry (simple 3D penguin-like shape)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
const penguin = new THREE.Mesh(geometry, material);

scene.add(penguin);
camera.position.z = 3;

// Animation
function animate() {
    requestAnimationFrame(animate);
    penguin.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
