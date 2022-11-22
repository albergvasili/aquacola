import './App.css';

const Header = (props) => {
  const sampleHeader = 'This is a header';
  return (
    <div className='test flex'>
        <Column children={sampleHeader}/>
        <Column children={sampleHeader}/>
        <Column children={sampleHeader}/>
    </div>
  );
};

const Columns = (props) => {
  const sampleText = 'This is a column'
  return (
    <div className='test flex'>
      <Column>
        <SubSection/>
      </Column>
      <Column children={sampleText}/>
      <Column children={sampleText}/>
    </div>
  );
};

const Column = ({children}) => {
  const style = {
    flexGrow: 1
  }

  return (
    <div style={style} className='test'>
      {children}
    </div>
  );
};

const SubSection = (props) => {
  return (
    <div className='topLeft'>
     This is a subsection
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
