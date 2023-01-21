import '../App.css';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import { useEffect } from 'react';
// home functional react component

const Schedule = ({data}) => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]');
    robots.content = "noindex";
    if (data['weddings-meta-title']) {
      document.title = data['weddings-meta-title'];
    }
    if (data['weddings-description']) {
      document.querySelector('meta[name="description"]').content = data['weddings-description'];
    }
  }, [data])
  
  

  return (
  <div className="App" style={{backgroundColor: "white"}}>
    <h1 style={{color:"#252525", paddingTop: "2rem"}}>
      {data['wedding-page-title'] || `Book us for your wedding!`}
    </h1>
    <img src={data['weddings-pic-url'] || 'https://www.jacksaxes.co/images/pexels-soner-g%C3%B6rkem-6119578.jpg'} className='cover' alt='wedding celebration'></img>

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
      src='https://squareup.com/appointments/book/1sh85jpvygkv71/L7VZ3WMVJH21Y/services' 
      frameborder='0' 
      allowfullscreen='' 
      onLoad={() => setSpinner(false)}
       />

</div>
)
}

export default Schedule