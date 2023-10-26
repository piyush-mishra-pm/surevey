export const SCENE_CONFIGS = {
    RESI: {
        BASE_MODEL_PATH: "/heavy-assets/models/House.glb",
        USER_TYPE: "RESI",
        SCENE_OBJECTS: [
            {
                APPLIANCE_ID: 'FOX',
                ASSET_MODEL_PATH: '/heavy-assets/models/Fox.glb',
                POSITION: { X: 0, Y: 0, Z: 0 },
                ROTATION: { X: 0, Y: 0, Z: 0 },
                SCALE: { X: 0, Y: 0, Z: 0 },
            },
            {
                APPLIANCE_ID: 'LANTERN',
                ASSET_MODEL_PATH: '/heavy-assets/models/Lantern.glb',
                POSITION: { X: 3, Y: 0, Z: 4 },
                ROTATION: { X: 0, Y: 0, Z: 0 },
                SCALE: { X: 0, Y: 0, Z: 0 },
            },
        ]
    },
    SMB: {
        BASE_MODEL_PATH: "/heavy-assets/models/suzanne.gltf",
        USER_TYPE: "SMB",
        SCENE_OBJECTS: null
    },
    LMI: {
        BASE_MODEL_PATH: null,
        USER_TYPE: "LMI",
        SCENE_OBJECTS: null
    },
    EV: {
        BASE_MODEL_PATH: null,
        USER_TYPE: "EV",
        SCENE_OBJECTS: null
    }
}