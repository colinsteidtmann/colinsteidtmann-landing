import React from "react";
// Components
import {BackButton, Modal} from "#components";
// Other imports
import {getHash} from "#constants/functions";

export const Article = (props) => {
	const {children} = props;
	return (
		<React.Fragment>
			<div class="row p-4">
				<BackButton/>
				<div class="col-12 col-lg-6 mx-auto text-start mt-4 mt-lg-0">
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
			<div class="row">
				<h1 class="fw-strong">
					{title}
				</h1>
				<h3 class="fw-normal text-secondary">
					<em>{subtitle}</em>
				</h3>
				<h5 class="fw-light mt-2">
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
			<div class="row mt-4">
				{children}
			</div>
		</React.Fragment>
	);
}

const Subheader = (props) => {
	const {children} = props;
	return (
		<React.Fragment>
			<h5 class="text-muted">
				{children}
			</h5>
		</React.Fragment>
	);
}

const Bodytext = (props) => {
	const {children} = props;
	return (
		<React.Fragment>
			<p class="fw-light">
				{children}
			</p>
		</React.Fragment>
	);
}

const Figure = (props) => {
	const {img, caption} = props;
	const id = Math.abs(getHash(caption + img));
	console.log("id", id)
	return (
		<React.Fragment>

			<Modal id={"Modal"+id}>
				<Modal.Header />
				<Modal.Body>
					<figure class="figure">
					  <img src={img} class="figure-img img-fluid rounded" alt={caption + " image"} />
					  <figcaption class="figure-caption text-center">{caption}</figcaption>
					</figure>
				</Modal.Body>
			</Modal>

			<div class="row" data-bs-toggle="modal" data-bs-target={"#Modal"+id} style={{"cursor":"pointer"}}>

				<p class="text-end w-100">
					<i class="fas fa-xs fa-expand-arrows-alt"></i>
				</p>

				<figure class="figure">
				  <img src={img} class="figure-img img-fluid rounded" alt={caption + " image"} />
				  <figcaption class="figure-caption text-center">{caption}</figcaption>
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
			<div class="row">

				<p class="fw-light">
					<strong>
						Distance: {distance} miles
					</strong>
				</p>

				<p class="fw-light">
					<strong>
						Elevation gain: {elevation} ft
					</strong>
				</p>

				<p class="fw-light">
					<strong>
						Moving time: {movingTime}
					</strong>
				</p>

				<p class="fw-light">
					<strong>
						Facebook: <ALink href={facebook} text={`Day ${dayNumber} Facebook blog in the moment`} />
					</strong>
				</p>

				<p class="fw-light">
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