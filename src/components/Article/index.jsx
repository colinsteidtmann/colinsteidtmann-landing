import React from "react";
// Components
import {BackButton, Modal} from "#components";
// Other imports
import {getHash} from "#constants/functions";

export const Article = (props) => {
	const {children} = props;
	return (
		<React.Fragment>
			<div className="row p-4">
				<BackButton/>
				<div className="col-12 col-lg-6 mx-auto text-start mt-4 mt-lg-0">
					{children}
				</div>
			</div>
		</React.Fragment>
	);
}

const Header = (props) => {
	const {title, subtitle, date} = props;
	return (
		<React.Fragment>
			<div className="row">
				<h1 className="fw-strong">
					{title}
				</h1>
				<h3 className="fw-normal text-secondary">
					<em>{subtitle}</em>
				</h3>
				<h5 className="fw-light mt-2">
					{date}
				</h5>
			</div>
		</React.Fragment>
	);
}

const Body = (props) => {
	const {children} = props;
	return (
		<React.Fragment>
			<div className="row mt-4">
				{children}
			</div>
		</React.Fragment>
	);
}

const Subheader = (props) => {
	const {children} = props;
	return (
		<React.Fragment>
			<h5 className="text-muted">
				{children}
			</h5>
		</React.Fragment>
	);
}

const Bodytext = (props) => {
	const {children} = props;
	return (
		<React.Fragment>
			<p className="fw-light">
				{children}
			</p>
		</React.Fragment>
	);
}

const Figure = (props) => {
	const {img, caption} = props;
	const id = Math.abs(getHash(caption + img));
	return (
		<React.Fragment>

			<Modal id={"Modal"+id}>
				<Modal.Header />
				<Modal.Body>
					<figure className="figure">
					  <img src={img} className="figure-img img-fluid rounded" alt={caption + " image"} />
					  <figcaption className="figure-caption text-center">{caption}</figcaption>
					</figure>
				</Modal.Body>
			</Modal>

			<div className="row" data-bs-toggle="modal" data-bs-target={"#Modal"+id} style={{"cursor":"pointer"}}>

				<p className="text-end w-100">
					<i className="fas fa-xs fa-expand-arrows-alt"></i>
				</p>

				<figure className="figure">
				  <img src={img} className="figure-img img-fluid rounded" alt={caption + " image"} />
				  <figcaption className="figure-caption text-center">{caption}</figcaption>
				</figure>


			</div>
		</React.Fragment>
	);
}

const ALink = (props) => {
	const {href, text} = props;

	return (
		<React.Fragment>
			<a 
				style={{"color": "hotpink"}} 
				href={href} 				  			
				target="_blank" 
				rel="noreferrer"
			>
				{text}
			</a>
		</React.Fragment>
	);
}

const StravaSection = (props) => {
	const {distance, elevation, movingTime, facebook, strava, embed, dayNumber} = props;

	return (
		<React.Fragment>
			<div className="row">

				<p className="fw-light">
					<strong>
						Distance: {distance} miles
					</strong>
				</p>

				<p className="fw-light">
					<strong>
						Elevation gain: {elevation} ft
					</strong>
				</p>

				<p className="fw-light">
					<strong>
						Moving time: {movingTime}
					</strong>
				</p>

				<p className="fw-light">
					<strong>
						Facebook: <ALink href={facebook} text={`Day ${dayNumber} Facebook blog in the moment`} />
					</strong>
				</p>

				<p className="fw-light">
					<strong>
						Strava: <ALink href={strava} text={`Day ${dayNumber} Strava Ride`} />
					</strong>
				</p>

				{
					embed &&
					<iframe style={{"maxWidth":"590px"}} height='405' width='100%' frameborder='0' allowtransparency='true' scrolling='no' src={embed}>
						Loading ...
					</iframe>
				}

			</div>
		</React.Fragment>
	);
}



Article.Header = Header;
Article.Body = Body;
Article.Subheader = Subheader;
Article.Bodytext = Bodytext;
Article.Figure = Figure;
Article.Link = ALink;
Article.StravaSection = StravaSection;

export default Article;