import './App.css';

const Header = (props) => {
  const sampleHeader = 'This is a header';
  return (
    <div className='test flex'>
        <Column content={sampleHeader}/>
        <Column content={sampleHeader}/>
        <Column content={sampleHeader}/>
    </div>
  );
};

const Columns = (props) => {
  const sampleText = 'This is a column'
  return (
    <div className='test flex'>
        <Column content={sampleText}/>
        <Column content={sampleText}/>
        <Column content={sampleText}/>
    </div>
  );
};

const Column = ({content}) => {
  const style = {
    flexGrow: 1
  }

  return (
    <div style={style} className='test'>
      {content}
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
