// actions.ts

import { ADD_PERSONNEL, REMOVE_PERSONNEL } from './actionTypes';

// Action Types
interface AddPersonnelAction {
  type: typeof ADD_PERSONNEL;
  payload: {
    name: string;
    role: string;
  };
}

interface RemovePersonnelAction {
  type: typeof REMOVE_PERSONNEL;
  payload: {
    id: number;
  };
}

// Union of Action Types
export type PersonnelActionTypes = AddPersonnelAction | RemovePersonnelAction;

// Action Creators
export const addPersonnel = (name: string, role: string): AddPersonnelAction => ({
  type: ADD_PERSONNEL,
  payload: {
    name,
    role,
  },
});

export const removePersonnel = (id: number): RemovePersonnelAction => ({
  type: REMOVE_PERSONNEL,
  payload: {
    id,
  },
});
export{}
