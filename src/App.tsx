import NavBar from './components/NavBar';
import Logo from './components/HomeLogo';
import AddItem from './components/addItem';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Logo />
      <AddItem />
      <Dashboard />
    </div>
  );
}

export default App;
