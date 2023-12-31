// Only Props need to be here, not appliances
// Appliances placed in Constants.js

export const SCENE_CONFIGS = {
    SCENE_BASE_OBJECTS: [
      {
        MODEL_NAME: "Base-House",
        MODEL_PATH: "/heavy-assets/models/House.glb",
        POSITION: [0, 0, 0],
        ROTATION: [0, 0, 0],
        SCALE: [0.6, 0.6, 0.6],
        COUNT: 1,
      },
      {
        MODEL_NAME: "Horizon",
        APPLIANCE_ID: "HORIZON",
        MODEL_PATH: "/heavy-assets/models/Horizon.glb",
        POSITION: [0, 0, 0],
        ROTATION: [0, 0, 0],
        SCALE: [0.6, 0.6, 0.6],
        COUNT: 1,
      },
      {
        MODEL_NAME: "Garage",
        APPLIANCE_ID: "GARAGE",
        MODEL_PATH: "/heavy-assets/models/Garage.glb",
        POSITION: [0.25, -0.05, 0],
        ROTATION: [0, 0, 0],
        SCALE: [0.5, 0.5, 0.5],
      },
    ],
    // SCENE_OBJECTS: [
      // {
      //   MODEL_NAME: "EV",
      //   APPLIANCE_ID: "EV",
      //   MODEL_PATH: "/heavy-assets/models/EV.glb",
      //   POSITION: [0, 0, 0],
      //   ROTATION: [0, 0, 0],
      //   SCALE: [0.6, 0.6, 0.6],
      //   TEXT_POSITION: [0, 0, 0],
      //   COUNT: 1,
      // },
      // {
      //   MODEL_NAME: "Fireplace",
      //   APPLIANCE_ID: "HEATING",
      //   MODEL_PATH: "/heavy-assets/models/Fireplace.glb",
      //   POSITION: [0, 0, 0],
      //   ROTATION: [0, 0, 0],
      //   SCALE: [0.6, 0.6, 0.6],
      //   TEXT_POSITION: [-10, -5, -5],
      //   COUNT: 1,
      // },
      // {
      //   MODEL_NAME: "HeatPump_Gas",
      //   APPLIANCE_ID: "HEATPUMP_GAS",
      //   MODEL_PATH: "/heavy-assets/models/HeatPump_Gas.glb",
      //   POSITION: [0, 0, 0],
      //   ROTATION: [0, 0, 0],
      //   SCALE: [0.6, 0.6, 0.6],
      //   TEXT_POSITION: [7, 0, 7],
      //   COUNT: 1,
      // },
      // {
      //   MODEL_NAME: "PoolPump",
      //   APPLIANCE_ID: "PP",
      //   MODEL_PATH: "/heavy-assets/models/PoolPump.glb",
      //   POSITION: [-0.2, 0, -1],
      //   ROTATION: [0, 0, 0],
      //   SCALE: [0.6, 0.6, 0.6],
      //   TEXT_POSITION: [-7, -7, 6],
      // },
      // {
      //   MODEL_NAME: "Refrigerator",
      //   APPLIANCE_ID: "REFRIGERATOR",
      //   MODEL_PATH: "/heavy-assets/models/Refrigerator.glb",
      //   POSITION: [0.3, 0, 0],
      //   ROTATION: [0, 0, 0],
      //   SCALE: [0.7, 0.7, 0.7],
      //   TEXT_POSITION: [-3, 1, 1.2],
      //   COUNT: 1,
      // },
      // {
      //   MODEL_NAME: "Solar",
      //   APPLIANCE_ID: "SOLAR",
      //   MODEL_PATH: "/heavy-assets/models/Solar.glb",
      //   POSITION: [0, 0.34, 0.1],
      //   ROTATION: [-0.01, 0, 0],
      //   SCALE: [0.5, 0.5, 0.5],
      //   TEXT_POSITION: [0, 4, 0],
      //   COUNT: 1,
      // },
    // ],
};