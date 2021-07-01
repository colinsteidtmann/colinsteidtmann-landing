import React from "react";

const Carousel = (props) => {
	const {id, images, figures} = props;
	return (
		<React.Fragment>
			<div id={id} className="carousel carousel-dark" data-bs-ride="carousel">
			  <div className="carousel-inner">
			    {
			    	figures ? 
			    	figures.map((figure, imgId) => (

			    		<figure className={"figure carousel-item text-center " + (imgId === 0 && "active")}>
			    		  <img 
			    		  	src={figure.img}
			    		  	className="figure-img img-fluid rounded" 
			    		  	alt={figure.caption + " image"}
			    		  />
			    		  <figcaption className="figure-caption text-center">
			    		  	{figure.caption}
			    		  </figcaption>
			    		</figure>
			    	))
			    	:
			    	images.map((img, imgId) => (
			    		<div key={imgId} className={"carousel-item " + (imgId === 0 && "active")}>
			    		  <img 
			    		  	src={img} 
			    		  	className="d-block w-100" 
			    		  	alt="carousel image" 
			    		  />
			    		</div>
			    	))
			    }
			  </div>
			  <button className="carousel-control-prev" type="button" data-bs-target={"#"+id} data-bs-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="visually-hidden">Previous</span>
			  </button>
			  <button className="carousel-control-next" type="button" data-bs-target={"#"+id} data-bs-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="visually-hidden">Next</span>
			  </button>
			</div>
		</React.Fragment>
	);
};

export default Carousel;