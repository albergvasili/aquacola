import './App.css';

const FirstHeader = () => {
  return (
      <div className='test'>Comprar Agua</div>
  );
};

const SecondHeader = () => {
  return (
      <div className='test'>Programa de Ayuda</div>
  );
};

const ThirdHeader = () => {
  return (
      <div className='test'>Tienda</div>
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

const BottomLeft = () => {
  return(
    <div className='test' >
      <fieldset className='flex-column thirteen'>
        <legend>Lista:</legend>
          <label>
            <input type='checkbox'/>
            Salud
          </label>
          <label>
            <input type='checkbox'/>
            Seguridad
          </label>
          <label>
            <input type='checkbox'/>
            Ahorro
          </label>
          <label>
            <input type='checkbox'/>
            Tranquilidad
          </label>
          <label>
            <input type='checkbox'/>
            Otros
          </label>
      </fieldset>
    </div>
  );
};

const TopCenter = () => {
  return (
    <div className='test'>
      <div className='fifteen'>100%</div>
      <ul>
        <li className='sixteen'>
          Tres condiciones:
          <ol className='sixteen'>
            <li className='seventeen'>Dueños de casa</li>
            <li className='eihteen'>Querer agua pure</li>
            <li className='nineteen'>Lista de gastos(Jabones)</li>
          </ol>
        </li>
      </ul>
    </div>
  );
};

const CenterCenter = () => {
  return (
    <div className='test'>
      <div className='twenty'>Lavanderia</div>
      <div className='twentythree'>Values</div>
      <div className='twentyone'>Cocina(limpieza)</div>
      <div className='fortyfive'>TWO</div>
      <div className='twentyfour'>Values</div>
    </div>
  );
};

const BottomCenter = () => {
  return (
    <div className='test'>
      <div className='twentytwo'>Baño</div>
      <div className='twentyfive'>Values</div>
      <div className='twentysix'>=#$XXX</div>
      <span className='twentyseven'>Real</span>
      <span className='twentyeight'>Fijo</span>
    </div>
  );
};

const TopRight = () => {
  return (
    <div className='test'>
      <div className='thirty'>$150</div>
      <div className='thirtyone'>$value</div>
      <div className='thirtyone'>$value x</div>
      <div className='thirtytwo'>Toda la vida</div>
      <div className='thirtyfour'>Nada</div>
    </div>
  );
};

const CenterRight = () => {
  return (
    <div className='test'>
    </div>
  );
};

const FirstOption = () => {
  return (
    <div className='flex-column'>
      <FirstHeader/>
      <TopLeft/>
      <CenterLeft/>
      <BottomLeft/>
    </div>
  );
};

const SecondOption = () => {
  return (
    <div className='flex-column'>
      <SecondHeader/>
      <TopCenter/>
      <CenterCenter/>
      <BottomCenter/>
    </div>
  );
};

const ThirdOption = () => {
  return (
    <div className='flex-column'>
      <ThirdHeader/>
      <TopRight/>
      <CenterRight/>
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
