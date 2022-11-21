import './App.css';

const Header = (props) => {
  return (
    <div>
      This is the header
    </div>
  )
};

const Column = (props) => {
  return (
    <div>
      This is a column
    </div>
  )
};



const App = (props) => {
  return (
    <>
      <h1> Title </h1>
      <Header />
      <Column />
    </>
 );
}

export default App;
