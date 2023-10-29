import { createSlice } from "@reduxjs/toolkit";
import { APPLIANCE_GROUPS, INITIALLY_ALL_APPS_PRESENT } from "../CONSTANTS";

function createAppView(){
  const initAppViewState = {};
  Object.entries(APPLIANCE_GROUPS).map(([k,v],i)=>{
    initAppViewState[k]={
      present:INITIALLY_ALL_APPS_PRESENT,
      variant:APPLIANCE_GROUPS[k].SCENE_START_VARIANT,
      text:'',
      emoji:'',
    }
  })
  return initAppViewState;
}

const initialState = {
  selectedAppliance: null,
  appViews:createAppView(),
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
    modifyAppView: (state, action) => {
      const {appGroupId, present, variant, text, emoji} = action.payload;
      state.appViews[appGroupId] = {present,variant, text, emoji};
    }
  },
});

export const selectedAppliaceSelector = state=>state.scene.selectedAppliance;

export const { setSelectedAppliance, resetSelection, modifyAppView } =
  sceneSlice.actions;

export default sceneSlice.reducer;
