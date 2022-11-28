import './App.css';

const FirstHeader = () => {
  return (
      <div className='test'>Testing</div>
  );
};

const SecondHeader = () => {
  return (
      <div className='test'>Testing second</div>
  );
};


const TopLeft = () => {
  return (
    <div className='top-left test'>
      <div className='two'>Tomar</div>
      <div className='three'>Cocinar</div>
      <div className='five variable'>Value</div>
      <div className='six variable'>Value</div>
      <div className='seven constant'>Value</div>
      <div className='eight constant'>value</div>
    </div>
  );
};

const TopCenter = () => {
  return (
    <div className='test'> >TopCenter</div>
  );
};


const FirstOption = () => {
  return (
    <div className='flex-column'>
      <FirstHeader/>
      <TopLeft/>
    </div>
  );
};

const SecondOption = () => {
  return (
    <div className='flex-column'>
      <SecondHeader/>
      <TopCenter/>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1> Title </h1>
      <div className='test flex-row'>
        <FirstOption/>
        <SecondOption/>
      </div>
    </>
 );
};

export default App;
