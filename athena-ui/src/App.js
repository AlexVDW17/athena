import './App.css';
import React from "react"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          input text
        </p>
        <input ></input>
      </header>
    </div>
  );
}

const Input = () => {
  const [text, onChangeText] = React.useState("Useless Text");

  return <input
  onChangeText={onChangeText}
  value={text}
/>

}

export default App;
