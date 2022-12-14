import './App.css';

const FirstHeader = () => {
  return (
      <div className='main-header'>Comprar Agua</div>
  );
};

const SecondHeader = () => {
  return (
      <div className='main-header'>Programa de Ayuda</div>
  );
};

const ThirdHeader = () => {
  return (
      <div className='main-header'>Tienda</div>
  );
};

const TopLeft = () => {
  return (
    <div className='three-by-three test flex-item'>
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
    <div className='test flex-item' >
      <div className='four'> 1Gal = 6bot</div>
      <div className='forty-one'>ONE(1)</div>
      <div className='nine'> 30 dias x $6 = $150</div>
      <div className='twelve'>FIFTY(50%)</div>
    </div>
  );
};

const BottomLeft = () => {
  return(
    <div className='test flex-item' >
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
    <div className='test flex-item'>
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
    <div className='test flex-item'>
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
    <div className='test flex-item'>
      <div className='twentytwo'>Baño</div>
      <div className='twentyfive'>Values</div>
      <div className='twentysix'>=#$XXX</div>
      <div className='twentyseven'>Real</div>
      <div className='twentyeight'>Fijo</div>
    </div>
  );
};

const TopRight = () => {
  return (
    <div className='test flex-item'>
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
    <div className='test three-by-three flex-item'>
      <div className='thirtyfive'>Value x </div>
      <div className='thirtysix'>12 meses </div>
      <div className='thirtyseven'>= value </div>
      <br/>
      <div className='thirtyeight'>Value x </div>
      <div className='thirtynine'>10 años </div>
      <div className='forty'>= value </div>
      <br/>
      <div className='fortyeight'>153 /</div>
        <div className="fiftyone-two">
          <div >LC </div>
          <div >$7.690 </div>
        </div>
      <div className='fiftyfive'>TODO</div>
    </div>
  );
};

const BottomRight = () => {
  return (
    <div className='test flex-item'>
      <div className='fiftysix'>0 Tax</div>
      <div className='fiftyseven'>0 DP</div>
      <div className='fiftyeight'>0 Instalacion</div>
      <div className='fiftynine'>Aho. $1200 aprox.</div>
      <div className='house'>
        HOUSE DIAGRAM
      </div>
      <div className='fortyfour'>$150 + </div>
      <div className='fortysix'>value </div>
      <div className='fortyseven'>= value</div>
    </div>
  );
};

const FirstOption = () => {
  return (
    <div className='flex-column flex-item main-container'>
      <FirstHeader/>
      <TopLeft/>
      <CenterLeft/>
      <BottomLeft/>
    </div>
  );
};

const SecondOption = () => {
  return (
    <div className='flex-column flex-item main-container'>
      <SecondHeader/>
      <TopCenter/>
      <CenterCenter/>
      <BottomCenter/>
    </div>
  );
};

const ThirdOption = () => {
  return (
    <div className='flex-column flex-item main-container'>
      <ThirdHeader/>
      <TopRight/>
      <CenterRight/>
      <BottomRight/>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1> Recomendaciones </h1>
      <div className='main-container flex-row'>
        <FirstOption/>
        <SecondOption/>
        <ThirdOption/>
      </div>
    </>
 );
};

export default App;
