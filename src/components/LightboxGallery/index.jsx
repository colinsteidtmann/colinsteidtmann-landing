import React from "react";
// Components
import LightboxModal from "./LightboxModal";
// Other imports

export const LightboxGallery = (props) => {
	const {figures, id} = props;
	return (
		<React.Fragment>

			<LightboxModal figures={figures} id={id} />

			<div className="row row-cols-2" data-bs-toggle="modal" data-bs-target={"#"+id+"Modal"} style={{"cursor":"pointer"}}>

				<p className="text-end w-100">
					<i className="fas fa-xs fa-expand-arrows-alt"></i>
				</p>

				{
					figures.map((figure,id) => (

						<div className="col" key={id} >

							<figure className="figure">
							  <img 
							  	src={figure.img}
							  	className="figure-img img-fluid rounded" 
							  	alt={figure.caption + " image"}
							  />
							  <figcaption className="figure-caption text-center">
							  	{figure.caption}
							  </figcaption>
							</figure>

						</div>
					))
				}
			</div>
		</React.Fragment>
	);
}

export default LightboxGallery;