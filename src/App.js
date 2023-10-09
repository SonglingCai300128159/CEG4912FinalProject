
import './App.css';
import Title from "./components/Title";
import battery_main from './components/battery_main';
import function_bar from './components/function_bar';
import camera_main from './components/camera_main';
import water_main from './components/water_main';
import environment_main from './components/environment_main';

function Header(){
  return <h1>Hello world</h1>;
}

function App() {
  return (
    <div className="app">
      <header className="title">
        <h1>Title</h1>
      </header>
      <section className="content">
        <article className="Left">
          <div className="Function_Bar">
            <function_bar />function
          </div>
        </article>
        <article className="Middle">
          <div className="Battery_Main"><battery_main />battery</div>
          <div className="Camera_Main"><camera_main />camera</div>
        </article>
        <article className="Right">
          <div className="Water_Main"><water_main />water</div>
          <div className="Environment_Main"><environment_main />environment</div>
        </article>
      </section>
    </div>
  );
}

export default App;