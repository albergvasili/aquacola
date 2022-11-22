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

const SubSection = ({className}) => {
  return (
    <div className={className}>
      <TopLeft/>
    </div>
  );
};

const TopLeft = () => {
  return (
    <>
      <div>Tomar</div>
      <div>Cocinar</div>
      <div className='variable'>Value</div>
      <div className='variable'>Value</div>
      <div className='constant'>Value</div>
      <div className='constant'>value</div>
    </>
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
