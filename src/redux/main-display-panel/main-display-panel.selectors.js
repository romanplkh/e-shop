import { createSelector } from "reselect";

const selectMainDisplayPanel = state => state.mainDisplayPanel;

export const selectDisplayPanelGroup = createSelector(
  [selectMainDisplayPanel],
  mainDisplayPanel => {
    return mainDisplayPanel.groups;
  }
);
