import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProjectNav, IProjectsData, IWorkStates } from "./types";

const initialState: IWorkStates = {
  item: { name: 'all' },
  projects: [],
  active: 0
}

export const workSLice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<IProjectNav>) {
      state.item = action.payload
    },
    setProjects(state, action: PayloadAction<IProjectsData[]>) {
      state.projects = action.payload
    },
    setActive(state, action: PayloadAction<number>) {
      state.active = action.payload
    }
  }
})


export const { setItem, setProjects, setActive } = workSLice.actions
export default workSLice.reducer