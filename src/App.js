import './App.css';

const Header = (props) => {
  const sampleHeader = 'This is a header';
  return (
    <div className='test flex-container'>
        <Column children={sampleHeader}/>
        <Column children={sampleHeader}/>
        <Column children={sampleHeader}/>
    </div>
  );
};

const Columns = (props) => {
  const sampleText = 'This is a column'
  return (
    <div className='test flex-container'>
      <Column>
        <FirstOption/>
      </Column>
      <Column children={sampleText}/>
      <Column children={sampleText}/>
    </div>
  );
};

const Column = ({children}) => {

  return (
    <div  className='test flex-item'>
      {children}
    </div>
  );
};

const FirstOption = ({props}) => {
  return (
    <SubSection className='top-left'>
      <TopLeft/>
    </SubSection>
  );
};

const SubSection = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const TopLeft = () => {
  return (
    <>
      <div className='two'>Tomar</div>
      <div className='three'>Cocinar</div>
      <div className='five variable'>Value</div>
      <div className='six variable'>Value</div>
      <div className='seven constant'>Value</div>
      <div className='eight constant'>value</div>
    </>
  );
};

const App = (props) => {
  return (
    <>
      <h1> Title </h1>
      <Header/>
      <Columns/>
    </>
 );
};

export default App;
