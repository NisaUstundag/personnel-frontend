export interface Personnel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
  
  interface State {
    personnel: Personnel[];
  }
  
  export interface PersonnelAction {
    type: 'ADD_PERSONNEL' | 'SET_PERSONNEL';
    payload: Personnel | Personnel[];
  }
  
  const personnelReducer = (state: State, action: PersonnelAction): State => {
    switch (action.type) {
      case 'ADD_PERSONNEL':
        return { ...state, personnel: [...state.personnel, action.payload as Personnel] };
      case 'SET_PERSONNEL':
        return { ...state, personnel: action.payload as Personnel[] };
      default:
        return state;
    }
  };
  
  export default personnelReducer;
  