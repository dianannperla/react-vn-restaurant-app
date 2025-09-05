import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Menu from './components/Menu';
import Reservation from './components/Reservation';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="text-center text-3xl font-bold">Ứng dụng Quản lý Nhà hàng</h1>
        <Menu />
        <Reservation />
      </div>
    </Provider>
  );
};

export default App;