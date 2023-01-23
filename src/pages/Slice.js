import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const Slice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    addArtist: (state, action) => {
      console.log("action", action);
      state.push(action.payload);
    },
    editArtist: (state, action) => {
      const { id, artist, artWork } = action.payload;
      console.log(action);
      let existingArtist = state.find(art => art.id === id);
      if (existingArtist) {
        existingArtist.artist = artist;
        existingArtist.artWork = artWork;
      }
    },
    deleteArtist: (state , action) => {
        console.log(action , "==>")
      const id  = action.payload;
    return state.filter(art => art.id !== id);
    
    },
  },
});

export const { addArtist, editArtist, deleteArtist } = Slice.actions;

export default Slice.reducer;