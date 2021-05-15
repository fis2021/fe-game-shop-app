import {useSelector} from "./stateManager";

function App() {
    const testing = useSelector(state => state.testing);
    const person = testing[0];
  return (
    <div className="App">
        Person: {person.name}
    </div>
  );
}

export default App;
