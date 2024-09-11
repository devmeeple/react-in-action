import './App.css';

interface LearnProps {
  protagonist: string;
}

function App({protagonist}: LearnProps) {
  return (
    <>
      <header>
        <h1>데미안: {protagonist}</h1>
        <button type="button" className="primary">
          좋아요
        </button>
      </header>
    </>
  );
}

export default App;
