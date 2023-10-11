import { DryComponent } from "./DryComponent";
import { WetComponent } from "./WetComponent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <WetComponent />
      <hr />
      <DryComponent />
    </div>
  );
}
