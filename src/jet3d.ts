import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

export interface Jet3DController {
  element: HTMLElement;
  setSystem: (sysName: string) => void;
  setRotate: (rot: boolean) => void;
  toggleRotate: () => boolean;
  setExplode: (ex: boolean) => void;
  toggleExplode: () => boolean;
  resetView: () => void;
  setFullscreen: (fs: boolean) => void;
  toggleFullscreen: () => boolean;
  onSelectSystem: (cb: (sys: string) => void) => void;
  onStateChange: (cb: (state: { rot: boolean; ex: boolean; sys: string }) => void) => void;
  resize: () => void;
}

// Subsystem health dictionary matching AeroFleet data
export const SYSTEM_DATA: Record<string, { health: number; status: string; color: string; tag: string }> = {
  Engine: { health: 32, status: 'Degrading', color: '#d12e37', tag: 'ENGINE' },
  Hydraulics: { health: 68, status: 'Stable', color: '#f59e0b', tag: 'HYDRAULICS' },
  Electrical: { health: 82, status: 'Stable', color: '#12a35f', tag: 'ELECTRICAL' },
  'Flight Control': { health: 61, status: 'Monitor', color: '#f59e0b', tag: 'FLIGHT_CONTROL' },
  Avionics: { health: 77, status: 'Stable', color: '#12a35f', tag: 'AVIONICS' },
  Airframe: { health: 89, status: 'Healthy', color: '#12a35f', tag: 'AIRFRAME' },
  Fuel: { health: 95, status: 'Healthy', color: '#38bdf8', tag: 'FUEL' },
  'Landing Gear': { health: 86, status: 'Healthy', color: '#a855f7', tag: 'LANDING_GEAR' },
};

export const OG_SYSTEMS = [
  'AIRFRAME',
  'ENGINE',
  'HYDRAULICS',
  'ELECTRICAL',
  'AVIONICS',
  'FLIGHT_CONTROL',
  'FUEL',
  'LANDING_GEAR',
];

function classifyMeshSystem(name: string): string {
  const lower = name.toLowerCase();

  if (
    lower.includes('hydraulic') ||
    lower.includes('brake hose') ||
    lower.includes('gear cylinder') ||
    lower.includes('chrome piston')
  ) {
    return 'HYDRAULICS';
  }

  if (
    lower.includes('reservoir') ||
    lower.includes('tank ') ||
    lower.startsWith('tank')
  ) {
    return 'FUEL';
  }

  if (
    lower.includes('wheel') ||
    lower.includes('tire') ||
    lower.includes('tread') ||
    lower.includes('wheel rim') ||
    lower.includes('gear door') ||
    lower.includes('axle') ||
    lower.includes('gear fork') ||
    lower.includes('strut') ||
    lower.includes('drag brace') ||
    lower.includes('wheel lug') ||
    lower.includes('diagonal support') ||
    lower.includes('strut collar')
  ) {
    return 'LANDING_GEAR';
  }

  if (
    lower.includes('engine') ||
    lower.includes('turbine') ||
    lower.includes('rotor hub') ||
    lower.includes('blade') ||
    lower.includes('combust') ||
    lower.includes('nozzle') ||
    lower.includes('exhaust') ||
    lower.includes('chamber') ||
    lower.includes('sleeve') ||
    lower.includes('petal') ||
    lower.includes('drum') ||
    lower.includes('casing')
  ) {
    return 'ENGINE';
  }

  if (
    lower.includes('rudder') ||
    lower.includes('control stick') ||
    lower.includes('control grip') ||
    lower.includes('control panel') ||
    lower.includes('seat') ||
    lower.includes('harness') ||
    lower.includes('head rest') ||
    lower.includes('cushion')
  ) {
    return 'FLIGHT_CONTROL';
  }

  if (
    lower.includes('wire') ||
    lower.includes('wiring') ||
    lower.includes('loom') ||
    lower.includes('cable') ||
    lower.includes('light') ||
    lower.includes('lamp') ||
    lower.includes('lens') ||
    lower.includes('marker') ||
    lower.includes('nav light') ||
    lower.includes('strobe')
  ) {
    return 'ELECTRICAL';
  }

  if (
    lower.includes('avionics') ||
    lower.includes('radar') ||
    lower.includes('radome') ||
    lower.includes('antenna') ||
    lower.includes('sensor') ||
    lower.includes('probe') ||
    lower.includes('pitot') ||
    lower.includes('hud') ||
    lower.includes('instrument') ||
    lower.includes('display') ||
    lower.includes('bay') ||
    lower.includes('module') ||
    lower.includes('circuit') ||
    lower.includes('plate')
  ) {
    return 'AVIONICS';
  }

  return 'AIRFRAME';
}

function getExplosionVector(mesh: THREE.Mesh, systemName: string, worldCenter: THREE.Vector3): THREE.Vector3 {
  const vec = new THREE.Vector3();
  const lower = mesh.name.toLowerCase();
  const cx = worldCenter.x;
  const cy = worldCenter.y;
  const cz = worldCenter.z;

  // 1. LANDING GEAR: drop down & slightly out
  if (systemName === 'LANDING_GEAR') {
    if (cx < -1.0) {
      vec.set(-0.5, -2.5, 0.0);
    } else {
      const lat = cz >= 0 ? 1.6 : -1.6;
      vec.set(0.0, -2.8, lat);
    }
    return vec;
  }

  // 2. HYDRAULICS
  if (systemName === 'HYDRAULICS') {
    if (Math.abs(cz) > 0.8) {
      const lat = cz >= 0 ? 2.6 : -2.6;
      vec.set(0.0, -1.2, lat);
    } else {
      vec.set(0.4, -1.8, 0.0);
    }
    return vec;
  }

  // 3. FUEL SYSTEM
  if (systemName === 'FUEL') {
    if (Math.abs(cz) > 0.8 || lower.includes('tank')) {
      const lat = cz >= 0 ? 2.8 : -2.8;
      vec.set(0.0, -2.2, lat);
    } else {
      vec.set(0.0, 2.5, 0.0);
    }
    return vec;
  }

  // 4. ENGINE: CAD multi-stage axial explosion along engine centerline
  if (systemName === 'ENGINE') {
    if (lower.includes('drum') || cx < 1.5) {
      vec.set(-1.8, 0.0, 0.0);
    } else if (
      lower.includes('turbine') ||
      lower.includes('rotor hub') ||
      lower.includes('blade') ||
      lower.includes('retaining ring')
    ) {
      const stageX = (cx - 2.85) * 1.8;
      vec.set(stageX, 0.0, 0.0);
    } else if (lower.includes('shaft')) {
      vec.set(0.2, 0.0, 0.0);
    } else if (
      lower.includes('combust') ||
      lower.includes('chamber') ||
      lower.includes('band') ||
      lower.includes('lining')
    ) {
      const dy = cy - 2.23;
      const dz = cz;
      vec.set(2.4, dy * 0.8, dz * 0.8);
    } else if (lower.includes('sleeve') || lower.includes('collar')) {
      vec.set(3.6, 0.0, 0.0);
    } else if (
      lower.includes('nozzle') ||
      lower.includes('petal') ||
      lower.includes('lip') ||
      lower.includes('dark exhaust')
    ) {
      const dy = cy - 2.23;
      const dz = cz;
      vec.set(4.8, dy * 1.2, dz * 1.2);
    } else if (
      lower.includes('casing') ||
      lower.includes('envelope') ||
      lower.includes('service line') ||
      lower.includes('flange bolt') ||
      lower.includes('support hoop')
    ) {
      if (cz > 0.1) vec.set(0.5, 0.3, 2.0);
      else if (cz < -0.1) vec.set(0.5, 0.3, -2.0);
      else if (cy > 2.4) vec.set(0.5, 2.0, 0.0);
      else vec.set(0.5, -1.5, 0.0);
    } else {
      vec.set(2.0, 0.0, 0.0);
    }
    return vec;
  }

  // 5. AVIONICS
  if (systemName === 'AVIONICS') {
    if (cx < -5.5 || lower.includes('radome') || lower.includes('probe')) {
      vec.set(-3.8, 0.0, 0.0);
    } else if (lower.includes('hud')) {
      vec.set(-0.6, 2.4, 0.0);
    } else if (lower.includes('instrument') || lower.includes('display')) {
      vec.set(-0.3, 1.8, cz * 1.5);
    } else if (lower.includes('tray') || Math.abs(cz) > 1.0) {
      const lat = cz >= 0 ? 3.4 : -3.4;
      vec.set(0.3, 0.2, lat);
    } else if (lower.includes('antenna')) {
      vec.set(0.0, 2.8, 0.0);
    } else {
      if (cz > 0.1) vec.set(0.0, 0.5, 2.4);
      else if (cz < -0.1) vec.set(0.0, 0.5, -2.4);
      else vec.set(0.0, 2.2, 0.0);
    }
    return vec;
  }

  // 6. FLIGHT CONTROL
  if (systemName === 'FLIGHT_CONTROL') {
    if (
      lower.includes('seat') ||
      lower.includes('harness') ||
      lower.includes('head rest') ||
      lower.includes('cushion')
    ) {
      vec.set(0.3, 3.6, 0.0);
    } else if (lower.includes('stick') || lower.includes('grip')) {
      vec.set(0.0, 1.4, 0.0);
    } else if (lower.includes('rudder')) {
      vec.set(1.8, 3.6, 0.0);
    } else if (lower.includes('trailing')) {
      const lat = cz >= 0 ? 3.4 : -3.4;
      vec.set(1.2, -0.2, lat);
    } else {
      vec.set(0.0, 2.0, 0.0);
    }
    return vec;
  }

  // 7. ELECTRICAL
  if (systemName === 'ELECTRICAL') {
    if (cx < -2.0 || lower.includes('loom')) {
      vec.set(-1.2, 1.4, 0.0);
    } else if (lower.includes('wingtip') || Math.abs(cz) > 2.0) {
      const lat = cz >= 0 ? 4.2 : -4.2;
      vec.set(0.3, 0.1, lat);
    } else if (lower.includes('marker') || lower.includes('tail')) {
      vec.set(1.5, 3.5, 0.0);
    } else {
      if (cz > 0.2) vec.set(0.0, 0.2, 1.8);
      else if (cz < -0.2) vec.set(0.0, 0.2, -1.8);
      else if (cy > 2.2) vec.set(0.0, 1.8, 0.0);
      else vec.set(0.0, -1.2, 0.0);
    }
    return vec;
  }

  // 8. AIRFRAME: Canopy up, wings outward, empennage up/back
  if (lower.includes('canopy') || lower.includes('windshield')) {
    vec.set(-0.2, 3.8, 0.0);
  } else if (
    lower.includes('vertical stabilizer') ||
    lower.includes('tail') ||
    lower.includes('fin')
  ) {
    vec.set(2.4, 4.5, 0.0);
  } else if (lower.includes('wing') || Math.abs(cz) > 0.8) {
    const lat = cz >= 0 ? 3.6 : -3.6;
    vec.set(0.0, 0.0, lat);
  } else if (cx < -4.0) {
    vec.set(-3.2, 0.0, 0.0);
  } else if (cy < 1.2) {
    vec.set(0.0, -1.8, 0.0);
  } else {
    vec.set(0.0, 1.8, 0.0);
  }

  return vec;
}

// Global singleton instance so the 3D scene loads once and stays persistent across tabs
let instance: Jet3DController | null = null;

export function getJet3DInstance(): Jet3DController {
  if (instance) return instance;

  // Root container element
  const container = document.createElement('div');
  container.className = 'jet3d-container';
  container.id = 'jet3d-root';
  container.style.cssText = `
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 430px;
    background: #0e1726;
    border-radius: 12px;
    overflow: hidden;
    user-select: none;
  `;

  // 1. WebGL Canvas Container
  const canvasWrapper = document.createElement('div');
  canvasWrapper.style.cssText = 'position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1;';
  container.appendChild(canvasWrapper);

  // 2. Three.js Scene Setup (Matching viewer.html studio rendering quality)
  const scene = new THREE.Scene();
  const DARK_BG = 0x0e1726;
  scene.background = new THREE.Color(DARK_BG);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
  camera.position.set(-6, 9, 18);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setClearColor(DARK_BG, 1.0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  canvasWrapper.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.set(-0.25, 2.0, 0);
  controls.maxDistance = 50;
  controls.minDistance = 2;
  controls.autoRotate = false;
  controls.autoRotateSpeed = 1.8;

  // Studio Lighting (Exact lighting setup from viewer.html)
  const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.7);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xe2e8f0, 0x1e293b, 0.7);
  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
  keyLight.position.set(-5, 14, 12);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.9);
  fillLight.position.set(5, 10, -10);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.2);
  rimLight.position.set(-2, 5, -12);
  scene.add(rimLight);

  const floorLight = new THREE.DirectionalLight(0x38bdf8, 0.5);
  floorLight.position.set(0, -5, 0);
  scene.add(floorLight);

  // Grid Floor
  const gridHelper = new THREE.GridHelper(50, 50, 0x334155, 0x1e293b);
  gridHelper.position.y = -2.6;
  scene.add(gridHelper);

  // State variables
  let jetModel: THREE.Group | null = null;
  const classifiedMeshes: THREE.Mesh[] = [];
  const turbineBlades: THREE.Mesh[] = [];
  const shellMaterials = new Set<THREE.Material>();
  let isRotating = false;
  let isExploded = false;
  let isFullscreen = false;
  let isSystemsPanelOpen = false;
  let currentSystem = 'Engine';
  let explodeAnimId: number | null = null;
  let explodeFactor = 0;

  // Callbacks
  const selectSystemListeners: ((sys: string) => void)[] = [];
  const stateChangeListeners: ((s: { rot: boolean; ex: boolean; sys: string }) => void)[] = [];

  function notifyState() {
    stateChangeListeners.forEach(cb => cb({ rot: isRotating, ex: isExploded, sys: currentSystem }));
  }

  // 3. UI Overlays

  // A. Systems Control Panel (OG Features from viewer.html)
  const systemsPanel = document.createElement('div');
  systemsPanel.className = 'jet-systems-panel';
  systemsPanel.id = 'jet-systems-panel';
  systemsPanel.style.cssText = `
    position: absolute;
    top: 14px;
    left: 14px;
    width: 228px;
    max-height: calc(100% - 70px);
    overflow-y: auto;
    background: rgba(15, 23, 42, 0.94);
    color: #f1f5f9;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    padding: 13px 14px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(14px);
    z-index: 25;
    font-size: 12.5px;
    user-select: none;
    display: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  `;

  systemsPanel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <h3 style="font-size:13px;font-weight:700;color:#ffffff;margin:0">Systems</h3>
      <span style="font-size:10px;padding:2px 7px;background:rgba(56,189,248,0.18);color:#38bdf8;border:1px solid rgba(56,189,248,0.3);border-radius:999px;font-weight:600">OG CAD</span>
    </div>

    <div class="chk-list-3d" style="display:flex;flex-direction:column;gap:4px;margin-bottom:10px">
      ${OG_SYSTEMS.map(sys => `
        <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:11.5px;font-weight:600;color:#cbd5e1" data-label-sys="${sys}">
          <input type="checkbox" id="chk3d-${sys}" checked data-system="${sys}" style="accent-color:#0284c7;width:14px;height:14px;cursor:pointer">
          ${sys}
        </label>
      `).join('')}
    </div>

    <div style="margin-bottom:8px">
      <label style="display:block;font-size:11px;font-weight:600;color:#94a3b8;margin-bottom:3px">Shell opacity</label>
      <input type="range" id="slider3d-shell" min="0" max="1" step="0.01" value="1.0" style="width:100%;accent-color:#0284c7;cursor:pointer">
    </div>

    <div style="margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;font-weight:600;color:#94a3b8;margin-bottom:3px">
        <span>Explode</span>
        <span id="explode-pct-label" style="color:#38bdf8;font-weight:700">0%</span>
      </div>
      <input type="range" id="slider3d-explode" min="0" max="1" step="0.01" value="0" style="width:100%;accent-color:#0284c7;cursor:pointer">
    </div>

    <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:11px;font-weight:600;color:#cbd5e1;margin-bottom:10px">
      <input type="checkbox" id="chk3d-animate" checked style="accent-color:#0284c7;width:13px;height:13px;cursor:pointer">
      Animate rotors & actuators
    </label>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px">
      <button class="og-panel-btn" id="btn3d-explode-toggle">Explode view</button>
      <button class="og-panel-btn" id="btn3d-isolate-engine">Isolate engine</button>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
      <button class="og-panel-btn" id="btn3d-show-all">Show all</button>
      <button class="og-panel-btn" id="btn3d-export-glb">Export GLB</button>
    </div>

    <div style="font-size:10.5px;color:#64748b;margin-top:8px;font-style:italic">Click a part to select its system</div>
  `;
  container.appendChild(systemsPanel);

  // Style buttons inside systems panel
  const ogBtnStyles = `
    .og-panel-btn {
      padding: 5px 8px;
      background: rgba(30, 41, 59, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 5px;
      font-size: 11px;
      font-weight: 500;
      color: #e2e8f0;
      cursor: pointer;
      transition: all 0.15s ease;
      text-align: center;
    }
    .og-panel-btn:hover {
      background: #0284c7;
      border-color: #38bdf8;
      color: #ffffff;
    }
    .jet3d-container.fullscreen-mode {
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      z-index: 99999 !important;
      border-radius: 0 !important;
    }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = ogBtnStyles;
  container.appendChild(styleEl);

  // Wire up Systems Panel elements
  const sliderShell = systemsPanel.querySelector('#slider3d-shell') as HTMLInputElement;
  const sliderExplode = systemsPanel.querySelector('#slider3d-explode') as HTMLInputElement;
  const explodePctLabel = systemsPanel.querySelector('#explode-pct-label') as HTMLElement;
  const chkAnimate = systemsPanel.querySelector('#chk3d-animate') as HTMLInputElement;
  const btnExplodeToggle = systemsPanel.querySelector('#btn3d-explode-toggle') as HTMLButtonElement;
  const btnIsolateEngine = systemsPanel.querySelector('#btn3d-isolate-engine') as HTMLButtonElement;
  const btnShowAll = systemsPanel.querySelector('#btn3d-show-all') as HTMLButtonElement;
  const btnExportGlb = systemsPanel.querySelector('#btn3d-export-glb') as HTMLButtonElement;

  function updateShellOpacity(val: number) {
    shellMaterials.forEach(mat => {
      (mat as any).opacity = Math.max(0.01, Math.min(1.0, val));
      mat.transparent = val < 0.99;
      mat.depthWrite = val >= 0.99;
      mat.needsUpdate = true;
    });
  }

  sliderShell.oninput = (e) => {
    updateShellOpacity(parseFloat((e.target as HTMLInputElement).value));
  };

  function setExplodeFactor(factor: number) {
    explodeFactor = Math.max(0, Math.min(1, factor));
    sliderExplode.value = String(explodeFactor);
    const pct = Math.round(explodeFactor * 100);
    if (explodePctLabel) explodePctLabel.textContent = `${pct}%`;
    if (btnExplodeToggle) {
      btnExplodeToggle.textContent = explodeFactor > 0.5 ? 'Collapse view' : 'Explode view';
    }
    btnExplode.style.cssText = getButtonStyle(explodeFactor > 0.5);

    classifiedMeshes.forEach(mesh => {
      const orig = mesh.userData.origPos;
      const vec = mesh.userData.explodeVec;
      if (orig && vec) {
        mesh.position.set(
          orig.x + vec.x * explodeFactor,
          orig.y + vec.y * explodeFactor,
          orig.z + vec.z * explodeFactor
        );
      }
    });
    if (jetModel) jetModel.updateMatrixWorld(true);
  }

  function animateExplodeTo(targetFactor: number, duration = 850) {
    if (explodeAnimId) cancelAnimationFrame(explodeAnimId);
    const startFactor = explodeFactor;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Smooth easeInOutCubic
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const current = startFactor + (targetFactor - startFactor) * ease;
      setExplodeFactor(current);

      if (progress < 1) {
        explodeAnimId = requestAnimationFrame(step);
      } else {
        explodeAnimId = null;
        isExploded = targetFactor > 0.5;
        notifyState();
      }
    }
    explodeAnimId = requestAnimationFrame(step);
  }

  sliderExplode.oninput = (e) => {
    if (explodeAnimId) {
      cancelAnimationFrame(explodeAnimId);
      explodeAnimId = null;
    }
    setExplodeFactor(parseFloat((e.target as HTMLInputElement).value));
  };

  btnExplodeToggle.onclick = () => {
    const target = explodeFactor > 0.5 ? 0.0 : 1.0;
    animateExplodeTo(target, 850);
  };

  // Systems visibility checkboxes
  const systemCheckboxes = systemsPanel.querySelectorAll('input[data-system]') as NodeListOf<HTMLInputElement>;
  systemCheckboxes.forEach(chk => {
    chk.onchange = () => {
      const sys = chk.getAttribute('data-system');
      const isVisible = chk.checked;
      classifiedMeshes.forEach(mesh => {
        if (mesh.userData.system === sys) {
          mesh.visible = isVisible;
        }
      });
    };
  });

  // Isolate Engine
  btnIsolateEngine.onclick = () => {
    systemCheckboxes.forEach(chk => {
      const sys = chk.getAttribute('data-system');
      chk.checked = (sys === 'ENGINE');
      classifiedMeshes.forEach(mesh => {
        if (mesh.userData.system === sys) {
          mesh.visible = chk.checked;
        }
      });
    });
    selectPart('Engine Core', 'ENGINE');
    controls.target.set(3.5, 2.23, 0);
  };

  // Show All
  btnShowAll.onclick = () => {
    systemCheckboxes.forEach(chk => {
      chk.checked = true;
    });
    classifiedMeshes.forEach(mesh => {
      mesh.visible = true;
    });
    selectPart('Full Aircraft', 'AIRFRAME');
    if (jetModel) {
      const box = new THREE.Box3().setFromObject(jetModel);
      controls.target.copy(box.getCenter(new THREE.Vector3()));
    }
  };

  // Export GLB
  btnExportGlb.onclick = () => {
    if (!jetModel) return;
    btnExportGlb.textContent = 'Exporting…';
    const exporter = new GLTFExporter();
    exporter.parse(
      jetModel,
      (result) => {
        const blob = new Blob([result as ArrayBuffer], { type: 'model/gltf-binary' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'cutaway_jet_custom.glb';
        link.click();
        btnExportGlb.textContent = 'Export GLB';
      },
      (err) => {
        console.error('Export error:', err);
        btnExportGlb.textContent = 'Export GLB';
      },
      { binary: true }
    );
  };

  // B. Selected Part Info Toast / Badge (Bottom Center)
  const selectionBadge = document.createElement('div');
  selectionBadge.id = 'jet-selection-badge';
  selectionBadge.style.cssText = `
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(15, 23, 42, 0.92);
    border: 1px solid rgba(56, 189, 248, 0.4);
    border-radius: 999px;
    padding: 6px 18px;
    font-size: 12px;
    color: #f1f5f9;
    display: flex;
    align-items: center;
    gap: 9px;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    z-index: 20;
    pointer-events: none;
    transition: opacity 0.3s ease;
    display: none;
  `;
  selectionBadge.innerHTML = `
    <span>Inspecting: <strong id="jet-part-name">Full Aircraft</strong></span>
    <span id="jet-part-system" style="background:#0284c7;color:#ffffff;padding:2px 8px;border-radius:999px;font-size:10.5px;font-weight:700;letter-spacing:0.03em">AIRFRAME</span>
  `;
  container.appendChild(selectionBadge);

  // Top-Right Quick Full Size Icon Button
  const btnTopFs = document.createElement('button');
  btnTopFs.innerHTML = `⛶`;
  btnTopFs.title = 'Full Size View';
  btnTopFs.style.cssText = `
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 22;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    background: rgba(15, 23, 42, 0.85);
    color: #94a3b8;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    backdrop-filter: blur(8px);
    transition: all 0.15s ease;
  `;
  btnTopFs.onmouseenter = () => { btnTopFs.style.color = '#38bdf8'; btnTopFs.style.borderColor = '#38bdf8'; };
  btnTopFs.onmouseleave = () => { btnTopFs.style.color = '#94a3b8'; btnTopFs.style.borderColor = 'rgba(255, 255, 255, 0.15)'; };
  btnTopFs.onclick = (e) => { e.stopPropagation(); toggleFullscreen(); };
  container.appendChild(btnTopFs);

  const selectedPartName = selectionBadge.querySelector('#jet-part-name') as HTMLElement;
  const selectedPartSystem = selectionBadge.querySelector('#jet-part-system') as HTMLElement;

  function selectPart(name: string, system: string) {
    const cleanName = name.replace(/\.\d+$/, '');
    selectedPartName.textContent = cleanName;
    selectedPartSystem.textContent = system;

    // Flash corresponding checkbox in Systems panel
    const chk = systemsPanel.querySelector(`#chk3d-${system}`) as HTMLInputElement;
    if (chk && chk.parentElement) {
      const origCol = chk.parentElement.style.color;
      chk.parentElement.style.color = '#38bdf8';
      setTimeout(() => {
        if (chk.parentElement) chk.parentElement.style.color = origCol;
      }, 700);
    }

    // Map system back to AeroFleet subsystem and notify
    const entry = Object.entries(SYSTEM_DATA).find(([_, d]) => d.tag === system);
    if (entry) {
      currentSystem = entry[0];
      notifyState();
      selectSystemListeners.forEach(cb => cb(entry[0]));
    }
  }

  // C. Bottom Toolbar (Rotate, Explode View, Reset View, Systems Panel Toggle, Full Size Button)
  const bottomBar = document.createElement('div');
  bottomBar.style.cssText = `
    position: absolute;
    left: 14px;
    bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 22;
    pointer-events: auto;
  `;
  container.appendChild(bottomBar);

  function getButtonStyle(active: boolean) {
    return `
      background: ${active ? '#0284c7' : 'rgba(15, 23, 42, 0.88)'};
      color: ${active ? '#ffffff' : '#f1f5f9'};
      border: 1px solid ${active ? '#38bdf8' : 'rgba(255, 255, 255, 0.15)'};
      border-radius: 8px;
      padding: 7px 13px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 14px rgba(0,0,0,0.4);
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      gap: 6px;
    `;
  }

  const btnRotate = document.createElement('button');
  btnRotate.innerHTML = `⟳ Rotate`;
  btnRotate.style.cssText = getButtonStyle(false);
  bottomBar.appendChild(btnRotate);

  const btnExplode = document.createElement('button');
  btnExplode.innerHTML = `Explode View`;
  btnExplode.style.cssText = getButtonStyle(false);
  bottomBar.appendChild(btnExplode);

  const btnReset = document.createElement('button');
  btnReset.innerHTML = `Reset View`;
  btnReset.style.cssText = getButtonStyle(false);
  bottomBar.appendChild(btnReset);

  // Toggle Systems Panel Button (Always visible so users can toggle OG features anytime)
  const btnToggleSystems = document.createElement('button');
  btnToggleSystems.innerHTML = `⚙ Systems`;
  btnToggleSystems.title = 'Toggle Systems CAD Panel';
  btnToggleSystems.style.cssText = getButtonStyle(false);
  bottomBar.appendChild(btnToggleSystems);

  // Full Screen / Full Size Button (Top-Right & Bottom Toolbar)
  const btnFullscreen = document.createElement('button');
  btnFullscreen.id = 'btn3d-fullscreen';
  btnFullscreen.innerHTML = `⛶ Full Size`;
  btnFullscreen.title = 'Toggle Fullscreen Mode';
  btnFullscreen.style.cssText = getButtonStyle(false);
  bottomBar.appendChild(btnFullscreen);

  // Exit Fullscreen Floating Button (top right when in fullscreen)
  const btnExitFs = document.createElement('button');
  btnExitFs.innerHTML = `✕ Exit Full Screen`;
  btnExitFs.style.cssText = `
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 30;
    display: none;
    background: rgba(15, 23, 42, 0.92);
    color: #f1f5f9;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 8px 14px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.5);
    transition: all 0.15s ease;
  `;
  btnExitFs.onmouseenter = () => { btnExitFs.style.background = '#dc2626'; btnExitFs.style.borderColor = '#ef4444'; };
  btnExitFs.onmouseleave = () => { btnExitFs.style.background = 'rgba(15, 23, 42, 0.92)'; btnExitFs.style.borderColor = 'rgba(255, 255, 255, 0.2)'; };
  container.appendChild(btnExitFs);

  // Fullscreen controller
  function updateFullscreenUI() {
    if (isFullscreen) {
      btnFullscreen.innerHTML = `⛶ Exit Full`;
      btnFullscreen.style.cssText = getButtonStyle(true);
      btnExitFs.style.display = 'block';
      btnTopFs.style.display = 'none';
      // OG Features appear when full screen is enabled as requested!
      systemsPanel.style.display = 'block';
      isSystemsPanelOpen = true;
      btnToggleSystems.style.cssText = getButtonStyle(true);
      selectionBadge.style.display = 'flex';
    } else {
      btnFullscreen.innerHTML = `⛶ Full Size`;
      btnFullscreen.style.cssText = getButtonStyle(false);
      btnExitFs.style.display = 'none';
      btnTopFs.style.display = 'grid';
      selectionBadge.style.display = 'none';
      // Hide or restore panel state
      if (!isSystemsPanelOpen) {
        systemsPanel.style.display = 'none';
        btnToggleSystems.style.cssText = getButtonStyle(false);
      }
    }
  }

  function setFullscreen(enable: boolean) {
    isFullscreen = enable;
    if (isFullscreen) {
      if (container.parentElement) {
        container.parentElement.style.overflow = 'visible';
      }
      container.classList.add('fullscreen-mode');
      document.body.style.overflow = 'hidden';
      if (container.requestFullscreen && !document.fullscreenElement) {
        container.requestFullscreen().catch(() => {});
      }
    } else {
      if (container.parentElement) {
        container.parentElement.style.overflow = 'hidden';
      }
      container.classList.remove('fullscreen-mode');
      document.body.style.overflow = '';
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
    updateFullscreenUI();
    setTimeout(resize, 40);
    setTimeout(resize, 150);
  }

  function toggleFullscreen(): boolean {
    setFullscreen(!isFullscreen);
    return isFullscreen;
  }

  btnFullscreen.onclick = (e) => {
    e.stopPropagation();
    toggleFullscreen();
  };

  btnExitFs.onclick = (e) => {
    e.stopPropagation();
    setFullscreen(false);
  };

  document.addEventListener('fullscreenchange', () => {
    // Only exit if native fullscreen was active and is now completely closed
    if (!document.fullscreenElement && isFullscreen) {
      setFullscreen(false);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFullscreen) {
      setFullscreen(false);
    }
  });

  // Toggle Systems Panel manually
  btnToggleSystems.onclick = (e) => {
    e.stopPropagation();
    isSystemsPanelOpen = !isSystemsPanelOpen;
    systemsPanel.style.display = isSystemsPanelOpen ? 'block' : 'none';
    btnToggleSystems.style.cssText = getButtonStyle(isSystemsPanelOpen);
  };

  // 4. Loading Overlay
  const loadingOverlay = document.createElement('div');
  loadingOverlay.style.cssText = `
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: #0e1726;
    color: #e2e8f0;
    font-size: 13px;
    z-index: 40;
    transition: opacity 0.4s ease;
  `;
  loadingOverlay.innerHTML = `
    <div style="width:34px;height:34px;border:3px solid rgba(56,189,248,0.2);border-top-color:#38bdf8;border-radius:50%;animation:spin 0.8s linear infinite"></div>
    <div style="font-weight:600">Loading Cutaway Aircraft Model…</div>
    <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
  `;
  container.appendChild(loadingOverlay);

  // 5. 3D Model Loader (ArrayBuffer base64 fallback bypasses file:// CORS completely)
  const loader = new GLTFLoader();

  function onModelLoaded(gltf: any) {
    const loadedModel = gltf.scene as THREE.Group;
    jetModel = loadedModel;
    scene.add(loadedModel);
    loadedModel.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(loadedModel);
    const modelCenter = box.getCenter(new THREE.Vector3());
    controls.target.copy(modelCenter);

    loadedModel.traverse((child: any) => {
      if (child.isMesh) {
        const lowerName = child.name.toLowerCase();
        if (
          lowerName.includes('floor') ||
          lowerName.includes('cube') ||
          lowerName.includes('camera') ||
          lowerName.includes('light')
        ) {
          child.visible = false;
          return;
        }

        const sys = classifyMeshSystem(child.name);
        child.userData.system = sys;

        // Accurate world bounding center before geometry transformation
        const meshBox = new THREE.Box3().setFromObject(child);
        const worldCenter = meshBox.getCenter(new THREE.Vector3());
        child.userData.worldCenter = worldCenter.clone();

        // Center turbine rotor disks on shaft axis so in-place spinning works
        if (
          lowerName.includes('turbine') ||
          lowerName.includes('rotor hub') ||
          lowerName.includes('retaining ring')
        ) {
          child.geometry.translate(0, -worldCenter.y, -worldCenter.z);
          child.geometry.computeBoundingBox();
          child.geometry.computeBoundingSphere();
          child.position.set(child.position.x, worldCenter.y, worldCenter.z);
          turbineBlades.push(child);
        }

        child.userData.origPos = child.position.clone();
        child.userData.explodeVec = getExplosionVector(child, sys, worldCenter);

        classifiedMeshes.push(child);

        // Handle canopy glass separately from airframe shell
        if (child.material) {
          const mat = child.material as any;
          const matName = (mat.name || '').toLowerCase();
          if (matName.includes('canopy')) {
            mat.transparent = true;
            mat.opacity = 0.22;
            mat.depthWrite = false;
            mat.needsUpdate = true;
          } else if (
            matName.includes('skin') ||
            matName.includes('wing panel') ||
            matName.includes('fuselage') ||
            matName.includes('transparent')
          ) {
            shellMaterials.add(mat);
          }
        }
      }
    });

    // Initialize shell opacity to 1.0 (authentic solid metallic fighter jet finish)
    updateShellOpacity(1.0);

    loadingOverlay.style.opacity = '0';
    setTimeout(() => loadingOverlay.remove(), 400);
  }

  function loadModel() {
    if ((window as any).JET_MODEL_DATA && (window as any).JET_MODEL_DATA.length > 100) {
      try {
        const base64Str = (window as any).JET_MODEL_DATA.split(',')[1];
        const binaryString = atob(base64Str);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        loader.parse(bytes.buffer, '', onModelLoaded, (err) => {
          console.warn('Direct parse failed, trying load:', err);
          loader.load('/cutaway_jet.glb', onModelLoaded, undefined, () => {
            loader.load((window as any).JET_MODEL_DATA, onModelLoaded);
          });
        });
        return;
      } catch (e) {
        console.warn('Parse error, fallback to loader.load:', e);
      }
    }
    loader.load('/cutaway_jet.glb', onModelLoaded, undefined, (err) => {
      console.warn('Could not load /cutaway_jet.glb, using JET_MODEL_DATA', err);
      if ((window as any).JET_MODEL_DATA) {
        loader.load((window as any).JET_MODEL_DATA, onModelLoaded);
      }
    });
  }

  loadModel();

  // 6. Subsystem selection and camera focus
  function focusComponent(sys: string) {
    if (sys === 'Engine') {
      controls.target.set(3.5, 2.23, 0);
    } else if (sys === 'Avionics') {
      controls.target.set(-4.5, 2.2, 0);
    } else if (sys === 'Flight Control') {
      controls.target.set(5.5, 3.2, 0);
    } else if (sys === 'Hydraulics' || sys === 'Landing Gear') {
      controls.target.set(1.5, 1.0, 0);
    } else {
      controls.target.set(-0.25, 2.0, 0);
    }
  }

  function setSystem(sysName: string) {
    currentSystem = sysName;
    const tag = SYSTEM_DATA[sysName]?.tag || sysName.toUpperCase();
    selectPart(sysName, tag);
    focusComponent(sysName);
  }

  // 7. Explode Controller
  function setExplode(ex: boolean) {
    isExploded = ex;
    animateExplodeTo(isExploded ? 1.0 : 0.0, 850);
  }

  function toggleExplode(): boolean {
    setExplode(!isExploded);
    return isExploded;
  }

  // 8. Auto-Rotate Controller
  function setRotate(rot: boolean) {
    isRotating = rot;
    controls.autoRotate = isRotating;
    btnRotate.style.cssText = getButtonStyle(isRotating);
    notifyState();
  }

  function toggleRotate(): boolean {
    setRotate(!isRotating);
    return isRotating;
  }

  // 9. Reset View
  function resetView() {
    controls.reset();
    camera.position.set(-6, 9, 18);
    if (jetModel) {
      const box = new THREE.Box3().setFromObject(jetModel);
      controls.target.copy(box.getCenter(new THREE.Vector3()));
    }
    setRotate(false);
    setExplode(false);
    btnShowAll.click();
    selectPart('Full Aircraft', 'AIRFRAME');
  }

  // Button Click Listeners
  btnRotate.onclick = (e) => { e.stopPropagation(); toggleRotate(); };
  btnExplode.onclick = (e) => { e.stopPropagation(); toggleExplode(); };
  btnReset.onclick = (e) => { e.stopPropagation(); resetView(); };

  // 10. Raycasting on 3D mesh click
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  let pointerDownPos = { x: 0, y: 0 };
  let pointerDownTime = 0;

  canvasWrapper.addEventListener('pointerdown', (e: MouseEvent) => {
    pointerDownPos = { x: e.clientX, y: e.clientY };
    pointerDownTime = performance.now();
  });

  canvasWrapper.addEventListener('pointerup', (e: MouseEvent) => {
    // Avoid triggering if clicked on systems panel, inputs, or buttons
    if (
      (e.target as HTMLElement).closest('.jet-systems-panel') ||
      (e.target as HTMLElement).closest('button') ||
      (e.target as HTMLElement).closest('input')
    ) {
      return;
    }

    // Only treat as part selection if user clicked without dragging (OrbitControls drag)
    const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
    const duration = performance.now() - pointerDownTime;
    if (dist > 6 || duration > 500) {
      return;
    }

    const rect = canvasWrapper.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const visibleMeshes = classifiedMeshes.filter(m => m.visible);
    const hits = raycaster.intersectObjects(visibleMeshes, false);

    if (hits.length > 0) {
      const hit = hits[0].object as THREE.Mesh;
      const partName = hit.name || 'Aircraft Component';
      const sysName = hit.userData.system || 'AIRFRAME';
      selectPart(partName, sysName);
    }
  });

  // 11. Render Loop & Responsive Resize
  function resize() {
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 430;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  const resizeObserver = new ResizeObserver(() => resize());
  resizeObserver.observe(container);

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    // Rotate turbine stages in-place around engine centerline when animation enabled
    if (chkAnimate.checked && turbineBlades.length > 0) {
      const rotSpeed = delta * 12.0;
      turbineBlades.forEach(blade => {
        blade.rotation.x += rotSpeed;
      });
    }

    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  instance = {
    element: container,
    setSystem,
    setRotate,
    toggleRotate,
    setExplode,
    toggleExplode,
    resetView,
    setFullscreen,
    toggleFullscreen,
    onSelectSystem: (cb) => { selectSystemListeners.length = 0; selectSystemListeners.push(cb); },
    onStateChange: (cb) => { stateChangeListeners.length = 0; stateChangeListeners.push(cb); },
    resize,
  };

  return instance;
}
