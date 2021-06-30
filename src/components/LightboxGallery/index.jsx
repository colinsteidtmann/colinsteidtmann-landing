import React from "react";
// Components
import LightboxModal from "./LightboxModal";
// Other imports

export const LightboxGallery = (props) => {
	const {figures, id} = props;
	return (
		<React.Fragment>

			<LightboxModal figures={figures} id={id} />

			<div class="row row-cols-2" data-bs-toggle="modal" data-bs-target={"#"+id+"Modal"} style={{"cursor":"pointer"}}>

				<p class="text-end w-100">
					<i class="fas fa-xs fa-expand-arrows-alt"></i>
				</p>

				{
					figures.map((figure,id) => (

						<div class="col" key={id} >

							<figure class="figure">
							  <img 
							  	src={figure.img}
							  	class="figure-img img-fluid rounded" 
							  	alt={figure.caption + " image"}
							  />
							  <figcaption class="figure-caption text-center">
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