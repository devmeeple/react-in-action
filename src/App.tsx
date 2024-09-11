import './App.css';

const title = 'React';

function App() {

  return (
    <>
      <header>
        <h1>어서 오세요! {title} 세계로!</h1>
        <h1>1 + 1 = {1 + 1}</h1>
        <button type="button" className="primary">
          좋아요
        </button>
      </header>
    </>
  );
}

export default App;
