import './App.css';
import TITLE from "./components/TITLE";
import CAMERA_MAIN from './components/CAMERA_MAIN';
import WATER_MAIN from './components/WATER_MAIN';
import ENVIRONMENT_MAIN from './components/ENVIRONMENT_MAIN';
import BATTERY_MAIN from './components/BATTERY_MAIN';
import FUNCTION_BAR from './components/FUNCTION_BAR';

function App() {
  return (
    <div className="app">
      <header className="title">
        <TITLE />
      </header>
      <section className="content">
        <article className="Function_Bar">
          <div>
            <FUNCTION_BAR />
          </div>
        </article>
        <article className="Battery_Main">
          <div >
            <BATTERY_MAIN />
          </div>
        </article>
        <article  className="Camera_Main">
          <div>
            <CAMERA_MAIN />
          </div>
        </article>
        <article className="Water_Main">
          <div >
            <WATER_MAIN />
          </div>
        </article>
        <article className="Environment_Main">
          <div>
            <ENVIRONMENT_MAIN />
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;