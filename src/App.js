import logo from './logo.svg';
import './App.css';
import Button from './component/Button.jsx';
import Card from './component/ui/Card.jsx';
import Counter from './component/ui/Counter.jsx';
import List from './component/ui/List.jsx';


function App() {
  return (
    <>
    <p>Oimji, i'm su priti</p>
    <Button/>
      <Card
        name ="Lhey"
        description = "Pretty ako"
      />

    <Counter />

    <List/>
    </>
  );
}

export default App;
