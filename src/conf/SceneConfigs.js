export const SCENE_CONFIGS = {
  RESI: {
    USER_TYPE: "RESI",
    SCENE_BASE_OBJECTS: [
      {
        MODEL_NAME: "Base-House",
        MODEL_PATH: "/heavy-assets/models/House.glb",
        POSITION: [0, 0, 0],
        ROTATION: [0, 0, 0],
        SCALE: [1, 1, 1],
      },
      {
        MODEL_NAME: "Base-Lantern",
        MODEL_PATH: "/heavy-assets/models/Lantern.glb",
        POSITION: [2, 0, -1.5],
        ROTATION: [0, (-3 * Math.PI) / 4, 0],
        SCALE: [0.1, 0.1, 0.1],
      },
    ],
    SCENE_OBJECTS: [
      {
        MODEL_NAME: "Scene-Fox",
        APPLIANCE_ID: "FOX",
        MODEL_PATH: "/heavy-assets/models/Fox.glb",
        POSITION: [0, 0, 0],
        ROTATION: [0, -Math.PI / 4, 0],
        SCALE: [0.02, 0.02, 0.02],
      },
      {
        MODEL_NAME: "Scene-Lantern2",
        APPLIANCE_ID: "LANTERN2",
        MODEL_PATH: "/heavy-assets/models/Lantern2.glb",
        POSITION: [-2, 0, 2.5],
        ROTATION: [0, 1.8 * Math.PI, 0],
        SCALE: [0.1, 0.1, 0.1],
      },
      {
        MODEL_NAME: "Scene-Wall",
        APPLIANCE_ID: "WALL",
        MODEL_PATH: "/heavy-assets/models/Wall.gltf",
        POSITION: [-2, 0, 3.5],
        ROTATION: [0, (7 * Math.PI) / 4, 0],
        SCALE: [0.6, 0.6, 0.6],
      },
    ],
  },
  SMB: {
    USER_TYPE: "SMB",
    SCENE_BASE_OBJECTS: [
      {
        MODEL_NAME: "Base-Fox",
        MODEL_PATH: "/heavy-assets/models/Fox.glb",
        POSITION: [1, 0, 1],
        ROTATION: [0, 3 * Math.PI / 4, 0],
        SCALE: [0.02, 0.02, 0.02],
      },
      {
        MODEL_NAME: "Base-Lantern2",
        MODEL_PATH: "/heavy-assets/models/Lantern2.glb",
        POSITION: [-2, 0, 2.5],
        ROTATION: [0, 1.8 * Math.PI, 0],
        SCALE: [0.1, 0.1, 0.1],
      },
      {
        MODEL_NAME: "Base-Wall",
        MODEL_PATH: "/heavy-assets/models/Wall.gltf",
        POSITION: [3.5 , 0, -2],
        ROTATION: [0, (3 * Math.PI) / 4, 0],
        SCALE: [0.6, 0.6, 0.6],
      },
    ],
    SCENE_OBJECTS: [
      {
        MODEL_NAME: "Scene-House",
        APPLIANCE_ID: "HOUSE",
        MODEL_PATH: "/heavy-assets/models/House.glb",
        POSITION: [0, 0, 0],
        ROTATION: [0, 0, 0],
        SCALE: [1, 1, 1],
      },
      {
        MODEL_NAME: "Scene-Lantern",
        APPLIANCE_ID: "LANTERN",
        MODEL_PATH: "/heavy-assets/models/Lantern.glb",
        POSITION: [2, 0, -1.5],
        ROTATION: [0, (- Math.PI) / 4, 0],
        SCALE: [0.1, 0.1, 0.1],
      },
    ],
  },
  LMI: {
    USER_TYPE: "LMI",
    SCENE_OBJECTS: null,
  },
  EV: {
    USER_TYPE: "EV",
    SCENE_OBJECTS: null,
  },
};