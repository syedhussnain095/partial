import React from 'react';
import Slider from "react-slick";
import slideone from "../images/slideone.jpg";
import slidetwo from "../images/slidetwo.jpg";
import slidethree from "../images/slidethree.jpg";
import slidefour from "../images/slidefour.jpg";
import slidefive from "../images/slidefive.jpg";
import slidesix from "../images/slidesix.jpg";

const SliderData = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000
      };
    return (
        <>

            <div className="for_all_matter_port">
                <div className="container">
                    <div className="py-3 for_slide_text">
                        <h4>{props.slidetext}</h4>
                    </div>
                    <div className="for_cent">
                    <div className="for_img_cent">
                        <Slider {...settings}>
                            <div>
                            <img src={slideone}  alt={slideone} className="img-fluid" />
                            </div>
                            <div>
                            <img src={slidetwo} alt={slidetwo} className="img-fluid" />
                            </div>
                            <div>
                            <img src={slidethree}  alt={slidethree} className="img-fluid" />
                            </div>
                            <div>
                            <img src={slidefour}  alt={slidefour} className="img-fluid" />
                            </div>
                            <div>
                            <img src={slidefive}  alt={slidefive} className="img-fluid" />
                            </div>
                            <div>
                            <img src={slidesix} alt={slidesix} className="img-fluid" />
                            </div>
                        </Slider>
                     </div>    
                     </div>
                </div>   
             </div> 
             
        </>
    );
};

export default SliderData;
