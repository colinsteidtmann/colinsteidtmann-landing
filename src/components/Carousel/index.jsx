import React from "react";

const Carousel = (props) => {
	const {id, images, figures} = props;
	return (
		<React.Fragment>
			<div id={id} class="carousel carousel-dark" data-bs-ride="carousel">
			  <div class="carousel-inner">
			    {
			    	figures ? 
			    	figures.map((figure, imgId) => (

			    		<figure class={"figure carousel-item text-center " + (imgId === 0 && "active")}>
			    		  <img 
			    		  	src={figure.img}
			    		  	class="figure-img img-fluid rounded" 
			    		  	alt={figure.caption + " image"}
			    		  />
			    		  <figcaption class="figure-caption text-center">
			    		  	{figure.caption}
			    		  </figcaption>
			    		</figure>
			    	))
			    	:
			    	images.map((img, imgId) => (
			    		<div key={imgId} class={"carousel-item " + (imgId === 0 && "active")}>
			    		  <img 
			    		  	src={img} 
			    		  	class="d-block w-100" 
			    		  	alt="carousel image" 
			    		  />
			    		</div>
			    	))
			    }
			  </div>
			  <button class="carousel-control-prev" type="button" data-bs-target={"#"+id} data-bs-slide="prev">
			    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="visually-hidden">Previous</span>
			  </button>
			  <button class="carousel-control-next" type="button" data-bs-target={"#"+id} data-bs-slide="next">
			    <span class="carousel-control-next-icon" aria-hidden="true"></span>
			    <span class="visually-hidden">Next</span>
			  </button>
			</div>
		</React.Fragment>
	);
};

export default Carousel;