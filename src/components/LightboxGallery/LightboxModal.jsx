import React from "react";
// Components
import {Modal, Carousel} from "#components"
// Other imports

export const LightboxModal = (props) => {
	const {figures, id} = props;
	return (
		<React.Fragment>
			<Modal id={id + "Modal"}>
				<Modal.Header />
				<Modal.Body>
					<Carousel figures={figures} id={id+"Carousel"}  />
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
}

export default LightboxModal;