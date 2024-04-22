import Button from './components/Button/Button';
import style from './App.module.scss';
import Notification from './components/Notification/Notification';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div className={style.container}>
      <div>
        <Button>Click me!</Button>
        <Button color="secondary">Click me!</Button>
      </div>
      <div>
        <Notification>This is notification component!</Notification>
        <Notification type="success">This is notification component!</Notification>
        <Notification type="error">This is notification component!</Notification>
      </div>
      <div>
        <Hero title="Primary hero" subtitle="This is primary hero." />
        <Hero type="secondary" title="Secondary hero" subtitle="This is secondary hero." />
      </div>
    </div>
  );
};

export default App;
