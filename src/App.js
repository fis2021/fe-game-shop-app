import {useSelector} from "./stateManager";

import { InstagramOutlined } from "@ant-design/icons";
import {Button} from "antd";

function App() {
    const testing = useSelector(state => state.testing);
    const person = testing[0];
  return (
    <div className="App">
        Person: {person.name}
        <div className="testing">Limegreen</div>
        <InstagramOutlined />
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </div>
  );
}

export default App;
