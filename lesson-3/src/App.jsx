import './App.css';
import Avatar from './components/Avatar';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <div className="cards">
        <Card
          imageUrl="https://a-z-animals.com/media/2022/09/iStock-492611032.jpg"
          title="Lion"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem a modi veritatis possimus est, error unde voluptatem sequi eligendi."
        />
        <Card
          imageUrl="https://t3.ftcdn.net/jpg/05/69/46/54/360_F_569465421_JQV2FRU8yjhmHSWneHVoLbk2RK0SKz5M.jpg"
          title="Girafe"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae id voluptate cupiditate itaque at quasi impedit ducimus veritatis odit. Quidem!"
        />
      </div>
      <div className="avatars">
        <Avatar name="Rolandas Pranaitis" bgColor="bg-green" />
        <Avatar name="Petras Jusevičius" bgColor="bg-blue" />
        <Avatar name="Jonas Sakalavičius" bgColor="bg-red" />
      </div>
    </>
  );
};

export default App;
