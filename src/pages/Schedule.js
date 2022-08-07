import '../App.css';
import { useState } from 'react';
import { Spinner } from 'reactstrap';


// home functional react component

export default () => {
  const [spinner, setSpinner] = useState(true);
  return (
  <div className="App" style={{backgroundColor: "white"}}>
    <h1 style={{color:"#252525", paddingTop: "2rem"}}>
      SCHEDULE
    </h1>

      {spinner && <Spinner
      color='primary'
      style={{
        height: '100px',
        width: '100px',
        marginTop: '200px'
      }} /> }
      <iframe 
      width='100%' 
      height='750px' 
      src='https://squareup.com/appointments/book/rvkr18hpstsjc6/L7VZ3WMVJH21Y/services' 
      frameborder='0' 
      allowfullscreen='' 
      onLoad={() => setSpinner(false)}
       />

</div>
)
}