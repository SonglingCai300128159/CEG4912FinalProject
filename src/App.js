import './App.css';
import TITLE from "./components/TITLE";
import CAMERA_MAIN from './components/CAMERA_MAIN';
import WATER_MAIN from './components/WATER_MAIN';
import ENVIRONMENT_MAIN from './components/ENVIRONMENT_MAIN';
import BATTERY_MAIN from './components/BATTERY_MAIN';
import FUNCTION_BAR from './components/FUNCTION_BAR';


function Header(){
  return <h1>Hello world</h1>;
}

function App() {
  return (
    <div className="app">
      <header className="title">
        <TITLE />
      </header>
      <section className="content">
        <article className="Left">
          <div className="Function_Bar">
            <FUNCTION_BAR />
          </div>
        </article>
        <article className="Middle">
          <div className="Battery_Main"><BATTERY_MAIN /></div>
          <div className="Camera_Main"><CAMERA_MAIN /></div>
        </article>
        <article className="Right">
          <div className="Water_Main"><WATER_MAIN /></div>
          <div className="Environment_Main"><ENVIRONMENT_MAIN /></div>
        </article>
      </section>
    </div>
  );
}

export default App;