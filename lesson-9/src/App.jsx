import RegisterForm from './components/RegisterForm/RegisterForm';
import UsersView from './views/UsersView/UsersView';
import style from './App.module.scss';
import { useState } from 'react';

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className={style.container}>
      <div className={style.firstBlock}>
        <h3 className={style.title}>REGISTRATION FORM</h3>
        <RegisterForm editingUser={editingUser} setEditingUser={setEditingUser} />
      </div>
      <div className={style.secondBlock}>
        <h3 className={style.title}>USERS</h3>
        <UsersView setEditingUser={setEditingUser} />
      </div>
    </div>
  );
};

export default App;
