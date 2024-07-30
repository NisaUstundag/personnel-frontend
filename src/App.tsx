import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { PersonnelProvider } from './context/PersonnelContext';
import PersonnelForm from './components/PersonnelForm';
import PersonnelList from './components/PersonnelList';

const App = () => {
  return (
    <Provider store={store}>
      <PersonnelProvider>
        <PersonnelForm />
        <PersonnelList />
      </PersonnelProvider>
    </Provider>
  );
};

export default App;
