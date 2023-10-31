import './App.css';
import TITLE from "./components/Title";
import CAMERA_MAIN from './components/camera_main';
import WATER_MAIN from './components/water_main';
import ENVIRONMENT_MAIN from './components/environment_main';
import BATTERY_MAIN from './components/battery_main';
import FUNCTION_BAR from './components/function_bar';
/*import { Button } from 'react-bootstrap';*/

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