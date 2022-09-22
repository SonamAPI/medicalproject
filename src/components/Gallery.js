// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Gallery extends React.Component {
    render() {
        return (
            <div className="container carousel-wrapper">
                <Carousel autoPlay="true"  showThumbs={false} interval="500" transitionTime="1000" infiniteLoop>
                    <div>
                        <img
                            className="card-img-top"
                            src="https://picsum.photos/500/300?img=1"
                            alt="Card image cap"
                            style={{"width": "100%","height": "auto"}}
                        />

                    </div>
                    <div>
                        <img
                            className="card-img-top"
                            src="https://picsum.photos/500/300?img=2"
                            alt="Card image cap"
                        />


                    </div>
                    <div>
                        <img
                            className="card-img-top"
                            src="https://picsum.photos/500/300?img=3"
                            
                        />

                    </div>
                </Carousel>
            </div>

        )
    };
}
export default Gallery