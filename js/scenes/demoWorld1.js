// demoWorld1.js

class DemoWorld1 {
  /**
   * Constructor for DemoWorld1.
   * @param {SceneBuilder} sceneBuilder - An instance of SceneBuilder to manage and load assets.
   * @param {CameraManager} cameraManager - Optional reference to the CameraManager.
   * @param {LightingManager} lightingManager - Optional reference to the LightingManager.
   * @param {BABYLON.Scene} scene - The Babylon.js scene.
   */
  constructor(
    sceneBuilder,
    cameraManager = null,
    lightingManager = null,
    scene = null
  ) {
    this.sceneBuilder = sceneBuilder;
    this.cameraManager = cameraManager;
    this.lightingManager = lightingManager;
    this.scene = scene;
  }

  /**
   * Loads additional test objects.
   */
  async loadTestObjects() {
    const object = new PositionedObject(
      "spaceSky3",
      0,
      0,
      0,
      0,
      0,
      0,
      "",
      "",
      "",
      5000
    );
    const object2 = new PositionedObject(
      "levelLarge",
      0,
      0,
      0,
      0,
      0,
      0,
      "",
      "",
      "",
      1
    );

    await this.sceneBuilder.loadSceneModel(object);
    await this.sceneBuilder.loadSceneModel(object2);
  }

  /**
   * Builds a demo world using SceneBuilder and other managers.
   * This is the main entry point that initializes everything.
   */
  async buildDemoWorld() {
    // Set the background color
    this.sceneBuilder.setBackgroundColor(new BABYLON.Color4(0.1, 0.1, 0.3, 1));

    // Await each loading step to ensure complete setup
    await this.loadTestObjects();

    console.log("DemoWorld1: Demo world built successfully.");
  }
}

// Expose DemoWorld1 globally to make it accessible in GameInitialization
window.DemoWorld1 = DemoWorld1;
console.log("Loaded DemoWorld1.js");
