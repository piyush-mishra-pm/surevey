import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAppliance: null,
};

export const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setSelectedAppliance: (state, action) => {
      state.selectedAppliance = action.payload;
    },
    resetSelection: (state) => {
      state.selectedAppliance = null;
    },
  },
});

export const selectedAppliaceSelector = state=>state.scene.selectedAppliance;

export const { setSelectedAppliance, resetSelection } = sceneSlice.actions;

export default sceneSlice.reducer;
