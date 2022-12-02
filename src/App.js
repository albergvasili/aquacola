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
    <div className='three-by-three test'>
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
    <div className='test three-by-three'>
      <span className='thirtyfive'>Value x </span>
      <span className='thirtysix'>12 meses </span>
      <span className='thirtyseven'>= value </span>
      <br/>
      <span className='thirtyeight'>Value x </span>
      <span className='thirtynine'>10 años </span>
      <span className='forty'>= value </span>
      <br/>
      <span className='fortyeight'>153 /</span>
        <div className="fiftyone-two">
          <span>LC </span>
          <span>$7.690 </span>
        </div>
      <span className='fiftyfive'>TODO</span>
    </div>
  );
};

const BottomRight = () => {
  return (
    <div className='test'>
      <div className='fiftysix'>0 Tax</div>
      <div className='fiftyseven'>0 DP</div>
      <div className='fiftyeight'>0 Instalacion</div>
      <div className='fiftynine'>Aho. $1200 aprox.</div>
      <div className='house'>
        HOUSE DIAGRAM
      </div>
      <span className='fortyfour'>$150 + </span>
      <span className='fortysix'>value </span>
      <span className='fortyseven'>= value</span>
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
      <BottomRight/>
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
