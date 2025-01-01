import image1 from './images/image1.png';
import image2 from './images/image2.jpg';
import image3 from './images/image33.jpg';
import './Slider.css';
function Slider(){
return(<>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100 h-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100 h-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100 h-500" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    
    
    
    
    
    
    
    </>)





}
export default Slider;