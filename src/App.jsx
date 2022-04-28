import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './elements/Text/Text';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Text as="h1">Heading level 1</Text>
      <Text as="h2">Heading level 2</Text>
      <Text as="h3">Heading level 3</Text>
      <Text as="p">Paragraph</Text>
    </div>
  );
}

export default App;
