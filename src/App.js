import './App.css';

const Header = (props) => {
  return (
    <div className='test flex'>
      This is the header
    </div>
  );
};

const Columns = (props) => {
    return (
    <div className='test flex'>
        <Column />
        <Column />
        <Column />
    </div>
  );
};

const Column = (props) => {
  const style = {
    flexGrow: 1
  }

  return (
    <div style={style} className='test'>
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
