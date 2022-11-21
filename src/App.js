import './App.css';

const Header = (props) => {
  return (
    <div>
      This is the header
    </div>
  );
};

const Columns = (props) => {
  return (
    <div>
        <Column />
        <Column />
        <Column />
    </div>
  );
};

const Column = (props) => {
  return (
    <div>
      This is a column
    </div>
  );
};

const App = (props) => {
  return (
    <>
      <h1> Title </h1>
      <Header />
      <Columns/>
    </>
 );
};

export default App;
