import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Personnel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface PersonnelState {
  personnel: Personnel[];
}

const initialState: PersonnelState = {
  personnel: [],
};

const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {
    addPersonnel: (state, action: PayloadAction<Personnel>) => {
      state.personnel.push(action.payload);
    },
    setPersonnel: (state, action: PayloadAction<Personnel[]>) => {
      state.personnel = action.payload;
    },
  },
});

export const { addPersonnel, setPersonnel } = personnelSlice.actions;
export default personnelSlice.reducer;
