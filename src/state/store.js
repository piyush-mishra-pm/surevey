import { configureStore } from "@reduxjs/toolkit";

import sceneReducer from "./sceneSlice";
import surveyReducer from "./surveySlice";

export const store = configureStore({
  reducer: {
    scene: sceneReducer,
    survey: surveyReducer,
  },
});
