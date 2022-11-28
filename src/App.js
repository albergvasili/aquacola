import './App.css';

const FirstHeader = () => {
  return (
      <div className='test'>Comprar Agua</div>
  );
};

const SecondHeader = () => {
  return (
      <div className='test'>Testing second</div>
  );
};

const ThirdHeader = () => {
  return (
      <div className='test'>Testing third</div>
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

const CenterLeft = () => {
  return(
    <div className='test' >
      <div className='four'> 1Gal = 6bot</div>
      <div className='forty-one'>ONE(1)</div>
      <div className='nine'> 30 dias x $6 = $150</div>
      <div className='twelve'>FIFTY(50%)</div>
    </div>
  );
};

const TopCenter = () => {
  return (
    <div className='test'>TopCenter</div>
  );
};

const TopRight = () => {
  return (
    <div className='test'>TopRight</div>
  );
};

const FirstOption = () => {
  return (
    <div className='flex-column'>
      <FirstHeader/>
      <TopLeft/>
      <CenterLeft/>
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

const ThirdOption = () => {
  return (
    <div className='flex-column'>
      <ThirdHeader/>
      <TopRight/>
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
        <ThirdOption/>
      </div>
    </>
 );
};

export default App;
