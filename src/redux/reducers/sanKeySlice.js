import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chartData: {
    nodes: [],
    links: [],
  },
};

const sankeySlice = createSlice({
  name: 'sankey',
  initialState,
  reducers: {
    updateChartData: (state, action) => {
      console.log(action.payload)
      state.chartData = action.payload;
    },
    editData: (state, action) => {
      const { index, newData } = action.payload;
      state.chartData.nodes[index] = newData;
    },
    deleteData: (state, action) => {
      const index = action.payload;
      console.log(index)
      state.chartData.nodes.splice(index, 1);
    },
  },
});

export const { updateChartData, addData, editData, deleteData } = sankeySlice.actions;
export default sankeySlice.reducer;
