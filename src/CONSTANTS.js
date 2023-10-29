export const USER_TYPE_RESI = "RESI";
export const USER_TYPE_SMB = "SMB";
export const USER_TYPE_LMI = "LMI";
export const USER_TYPE_EV = "EV";

export const ON_SELECT_SCALE = 1;

// export const SCENE_OBJECTS = "SCENE_OBJECTS";
export const SCENE_BASE_OBJECTS = "SCENE_BASE_OBJECTS";

export const STATE_ANSWERED = "ANSWERED";

export const PRIMITIVE_TYPE = {
  BOX: "BOX",
};

export const APPLIANCE_GROUPS = {
  SOLAR: {
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_NAME: "SOLAR",
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_ICON:
      "https://d13hc4rsp6iv99.cloudfront.net/dev/Solar-Energy-icon.jpg",

    SCENE_START_VARIANT: "SOLAR0",

    VARIANTS: {
      SOLARq: {
        VARIANT_ID: "SOLARq",
        VARIANT_TYPE: PRIMITIVE_TYPE.BOX,
        // MODEL_PATH will not be used, if VARIANT_TYPE is not null
        MODEL_PATH: null,
        POSITION: [0, 0.34, 0.1],
        ROTATION: [-0.01, 0, 0],
        SCALE: [0.5, 0.5, 0.5],
        TEXT_POSITION: [-9, 2.5, 0],
        COUNT: 1,
      },
      SOLAR0: {
        VARIANT_ID: "SOLAR0",
        // VARIANT_TYPE not needed (null, or left out) as we need an actual model here.
        VARIANT_TYPE: null,
        MODEL_PATH: "/heavy-assets/models/Solar.glb",
        POSITION: [0, 0.34, 0.1],
        ROTATION: [-0.01, 0, 0],
        SCALE: [0.5, 0.5, 0.5],
        TEXT_POSITION: [-9, 2.5, 0],
        COUNT: 1,
      },
    },
  },
  EV: {
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_NAME: "EV",
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_ICON:
      "https://d13hc4rsp6iv99.cloudfront.net/dev/home-ev-charging-point-black-glyph-icon-vector-37786329.jpg",

    SCENE_START_VARIANT: "EV0",

    VARIANTS: {
      EVq: {
        VARIANT_ID: "EVq",
        VARIANT_TYPE: PRIMITIVE_TYPE.BOX,
        // MODEL_PATH will not be used, if VARIANT_TYPE is not null
        MODEL_PATH: null,
        POSITION: [0, 0.34, 0.1],
        ROTATION: [-0.01, 0, 0],
        SCALE: [0.5, 0.5, 0.5],
        TEXT_POSITION: [3, 0, -3],
        COUNT: 1,
      },
      EV0: {
        VARIANT_ID: "EV0",
        // VARIANT_TYPE not needed (null, or left out) as we need an actual model here.
        VARIANT_TYPE: null,
        MODEL_PATH: "/heavy-assets/models/EV.glb",
        POSITION: [0, 0, 0],
        ROTATION: [0, 0, 0],
        SCALE: [0.6, 0.6, 0.6],
        TEXT_POSITION: [3, 0, -3],
        COUNT: 1,
      },
    },
  },
  HEATING: {
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_NAME: "HEATING",
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_ICON:
      "https://d13hc4rsp6iv99.cloudfront.net/dev/heating-icon-0.png",

    SCENE_START_VARIANT: "HEATING0",

    VARIANTS: {
      HEATINGq: {
        VARIANT_ID: "HEATINGq",
        VARIANT_TYPE: PRIMITIVE_TYPE.BOX,
        // MODEL_PATH will not be used, if VARIANT_TYPE is not null
        MODEL_PATH: null,
        POSITION: [0, 0, 0],
        ROTATION: [0, 0, 0],
        SCALE: [0.6, 0.6, 0.6],
        TEXT_POSITION: [-20, -4.5, -6],
        COUNT: 1,
      },
      HEATING0: {
        VARIANT_ID: "HEATING0",
        // VARIANT_TYPE not needed (null, or left out) as we need an actual model here.
        VARIANT_TYPE: null,
        MODEL_PATH: "/heavy-assets/models/Fireplace.glb",
        POSITION: [0, 0, 0],
        ROTATION: [0, 0, 0],
        SCALE: [0.6, 0.6, 0.6],
        TEXT_POSITION: [-20, -4.5, -6],
        COUNT: 1,
      },
    },
  },
  REFRIGERATOR: {
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_NAME: "REFRIGERATOR",
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_ICON:
      "https://d13hc4rsp6iv99.cloudfront.net/dev/fridge-icon.jpg",

    SCENE_START_VARIANT: "REFRIGERATOR0",

    VARIANTS: {
      REFRIGERATORq: {
        VARIANT_ID: "REFRIGERATORq",
        VARIANT_TYPE: PRIMITIVE_TYPE.BOX,
        // MODEL_PATH will not be used, if VARIANT_TYPE is not null
        MODEL_PATH: null,
        POSITION: [0.3, 0, 0],
        ROTATION: [0, 0, 0],
        SCALE: [0.7, 0.7, 0.7],
        TEXT_POSITION: [-3, 1, 1.2],
        COUNT: 1,
      },
      REFRIGERATOR0: {
        VARIANT_ID: "REFRIGERATOR0",
        // VARIANT_TYPE not needed (null, or left out) as we need an actual model here.
        VARIANT_TYPE: null,
        MODEL_PATH: "/heavy-assets/models/Refrigerator.glb",
        POSITION: [0.3, 0, 0],
        ROTATION: [0, 0, 0],
        SCALE: [0.7, 0.7, 0.7],
        TEXT_POSITION: [-3, 1, 1.2],
        COUNT: 1,
      },
    },
  },
  PP: {
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_NAME: "POOL PUMP",
    // This is visible in Survey applaince group panel.
    APP_GROUP_DISPLAY_ICON:
      "https://d13hc4rsp6iv99.cloudfront.net/dev/pool-water-pump-icon-png-image_4866405.png",

    SCENE_START_VARIANT: "PP0",

    VARIANTS: {
      PPq: {
        VARIANT_ID: "PPq",
        VARIANT_TYPE: PRIMITIVE_TYPE.BOX,
        // MODEL_PATH will not be used, if VARIANT_TYPE is not null
        MODEL_PATH: null,
        POSITION: [-0.2, 0, -1],
        ROTATION: [0, 0, 0],
        SCALE: [0.6, 0.6, 0.6],
        TEXT_POSITION: [-7, 5, 10],
        COUNT: 1,
      },
      PP0: {
        VARIANT_ID: "PP0",
        // VARIANT_TYPE not needed (null, or left out) as we need an actual model here.
        VARIANT_TYPE: null,
        MODEL_PATH: "/heavy-assets/models/PoolPump.glb",
        POSITION: [-0.2, 0, -1],
        ROTATION: [0, 0, 0],
        SCALE: [0.6, 0.6, 0.6],
        TEXT_POSITION: [-120, -35, -1],
        COUNT: 1,
      },
    },
  },

  // todo:
  // HEATING: "HEATING",
  // COOLING: "COOLING",
  // REFRIGERATOR: "REFRIGERATOR",
  // PP: "PP",
};

export const APP_GROUPS_IMAGES = {
  SOLAR: "https://d13hc4rsp6iv99.cloudfront.net/dev/Solar-Energy-icon.jpg",
  EV: "https://d13hc4rsp6iv99.cloudfront.net/dev/home-ev-charging-point-black-glyph-icon-vector-37786329.jpg",
  HEATING: "https://d13hc4rsp6iv99.cloudfront.net/dev/heating-icon-0.png",
  COOLING: "https://d13hc4rsp6iv99.cloudfront.net/dev/icon_cooling.png",
  REFRIGERATOR: "https://d13hc4rsp6iv99.cloudfront.net/dev/fridge-icon.jpg",
  PP: "https://d13hc4rsp6iv99.cloudfront.net/dev/pool-water-pump-icon-png-image_4866405.png",
};

export const ACTION_TYPES = {
  PRESENCE: "PRESENCE",
  COUNT: "COUNT",
};

// export const APPLIANCE_VARIANTS = {
//   EV: "EV",
//   HEATING: "HEATING",
//   HEATPUMP_GAS: "HEATPUMP_GAS",
//   HEATPUMP_ELECTRIC: "HEATPUMP_ELECTRIC",
//   POOL_PUMP: "POOL_PUMP",
//   REFRIGERATOR: "REFRIGERATOR",
//   SOLAR: "SOLAR",
// }

// export const ICON_OVERRIDE = {
//   ELECTRIC: "https://d13hc4rsp6iv99.cloudfront.net/dev/Electric-icon-on-transparent-background-PNG.png",
//   GAS: "https://d13hc4rsp6iv99.cloudfront.net/dev/Gas_Pngimage.png.jpeg",
//   WOOD: "https://d13hc4rsp6iv99.cloudfront.net/dev/wood.png",
//   SOLAR: "https://d13hc4rsp6iv99.cloudfront.net/dev/solar_icon.jpeg"
// }

export const QUESTION_ANSWERED_STATES = {
  ANSWERED: "ANSWERED",
  UNANSWERED: "UNANSWERED",
};

export const INITIALLY_ALL_APPS_PRESENT = true;