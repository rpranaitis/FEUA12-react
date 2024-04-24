import RegisterForm from './components/RegisterForm/RegisterForm';
import UsersView from './views/UsersView/UsersView';
import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.container}>
      <div className={style.firstBlock}>
        <h3 className={style.title}>REGISTRATION FORM</h3>
        <RegisterForm />
      </div>
      <div className={style.secondBlock}>
        <h3 className={style.title}>USERS</h3>
        <UsersView />
      </div>
    </div>
  );
};

export default App;
