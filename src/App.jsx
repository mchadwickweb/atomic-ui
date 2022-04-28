import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './elements/Text/Text';
import Input from './elements/Input/Input';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Text as="h1">Heading level 1</Text>
      <Text as="h2">Heading level 2</Text>
      <Text as="h3">Heading level 3</Text>
      <Text as="p">Paragraph</Text>

      <Form>
        <Input.Label>My input</Input.Label>
        <Input.Field></Input.Field>
      </Form>

      <Form>
        <Label>My input</Label>
        <Input />
      </Form>
    </div>
  );
}

export default App;
