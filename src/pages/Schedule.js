import '../App.css';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import { useEffect } from 'react';


// home functional react component

const Schedule = ({data}) => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (data['schedule-meta-title']) {
      document.title = data['schedule-meta-title'];
    }
    if (data['schedule-description']) {
      document.querySelector('meta[name="description"]').content = data['schedule-description'];
    }
  }, [data])

  return (
  <div className="App" style={{backgroundColor: "white"}}>
    <h1 style={{color:"#252525", paddingTop: "2rem"}}>
      Book Us Now
    </h1>

      {spinner && <Spinner
      color='primary'
      style={{
        height: '100px',
        width: '100px',
        marginTop: '200px'
      }} /> }
      <iframe 
      title='square-appointments'
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

export default Schedule