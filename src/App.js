import React, {useState} from 'react';
import Display from './components/visualization';
import data from './components/africa.geo.json';
import './App.css';

function App() {
  const [property, setProperty] = useState("pop_est");
  // const svgRef = useRef();
  // useEffect(() => {
  //   const svg = select(svgRef.current)
  // }, []);

  return (
  <>
  <h1> Africa map</h1>
  <React.Fragment>
       <Display data={data} property={property}/> 
       <select
        value={property}
        onChange={event => setProperty(event.target.value)}
      >
        <option value="pop_est">Population</option>
        <option value="name_len">Name length</option>
        <option value="gdp_md_est">GDP</option>
      </select>
      </React.Fragment>
</>)
  
}

export default App;
