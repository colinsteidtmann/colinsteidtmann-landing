import React from "react";
import {Link} from "react-router-dom";
// Components
import {Accordian} from "#components";
// Other imports

export const BusinessesAccordian = () => {
	return (
		<React.Fragment>
			<Accordian id="BusinessesAcc" flush={true}>
				<Accordian.Item id="PolyCycles">
					<Accordian.Header>
						<p className="fw-light">
							PolyCycles
						</p>
					</Accordian.Header>
					<Accordian.Body>
						<p className="fw-light">
							<a 
								href="https://polycycles.com/"
								className="text-dark"
								target="_blank" 
								rel="noreferrer"
							>
								PolyCycles
							</a> is a bike share service. We let individuals, retailers, and bike brands list their bikes for monthly rentals. We manage the listing, marketing, bike maintenance, and payment collection. 
						</p>
					</Accordian.Body>
				</Accordian.Item>
				<Accordian.Item id="Dapplu">
					<Accordian.Header>
						<p className="fw-light">
							Dapplu
						</p>
					</Accordian.Header>
					<Accordian.Body>
						<p className="fw-light">
							<a 
								href="https://dapplu.com/"
								className="text-dark"
								target="_blank" 
								rel="noreferrer"
							>
								Dapplu
							</a> is a web3 blockchain application that lets brands pay influencers for sponsored content. 
						</p>
					</Accordian.Body>
				</Accordian.Item>
			</Accordian>
		</React.Fragment>
	);
}

export default BusinessesAccordian;