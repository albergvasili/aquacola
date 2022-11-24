import './App.css';

const FirstHeader = () => {
  return (
      <div className='test'>Testing</div>
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

const FirstOption = () => {
  return (
    <TopLeft/>
  );
};

const TableLeft = () => {
  return (
    <>
      <FirstHeader/>
      <FirstOption/>
    </>
  );
};
    
const App = () => {
  return (
    <>
      <h1> Title </h1>
      <TableLeft />
    </>
 );
};

export default App;
