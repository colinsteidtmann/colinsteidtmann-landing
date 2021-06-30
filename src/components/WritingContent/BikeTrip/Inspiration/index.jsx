import React from "react";
// Components
import {Article, LightboxGallery} from "#components";
// Other imports
import {DriveImgLink} from "#constants/functions";

export const Inspiration = () => {
	return (
		<React.Fragment>
			<Article>
				<Article.Header 
					title="The Inspiration"
					subtitle="Why would I want to do this?"
					date="June, 2020"
				/>
				<Article.Body>

					<Article.Subheader>
						Some history first
					</Article.Subheader>

					<Article.Bodytext>
						<u>A generation ago</u>, a fellow named Greg Siple did an 18,000-mile bike ride with his wife from Alaska to Argentina to promote bicycling and hosteling. On this epic trip, they conceived the idea of a bike ride across America to celebrate America’s 1976 bicentennial birthday. They would call it <i>“bikecentennial.”</i> From 1973-1976, they planned this epic ride, creating a route from Astoria, Oregon to Yorktown, Virginia, and calling it the TransAmerica Bicycle Trail. In 1976, they launched the creation of their route with a big summer-long bike touring promotion. They sold their maps and set up bicycling hostels every 50 miles for riders to stay at. The 1976 bikecentennial summer went down as a legend in history and would go on to inspire thousands of riders each year to take on the challenge and ride the same route across America.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1Cv5ywoXTByt6aZLLL4MMHamX9EtfFrnD")}
						caption="Bikecentennial bicyclists photographed in 1976"
					/>

					<Article.Subheader>
						My Story
					</Article.Subheader>

					<Article.Bodytext>
						The idea for a bike trip across the country for me, however, started in the back of my mind when my family hosted a Spanish cyclist named Raúl two years back in the summer of 2018. We hosted him through the warmshowers.org website, a community of bike touring fans and enthusiasts who host and stay at each other’s homes around the world. Raúl was on a multi-month bike tour riding up from South-America to North-America, and then up the pacific coast to Oregon. I’m not sure how long he was planning on staying with us but he ended up staying at our house for nearly a month! He spent 2 weeks with us at first, then biked down to Southern California, and then biked back and stayed another 2 weeks before heading off to Oregon. He was an awesome guy and the stories he told of his bike touring adventures captured my interest.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("13o9vrKeJwz5IG8lxdajhzjUCguu11Zth")}
						caption="Raúl and his bike at our house"
					/>

					<Article.Bodytext>
						At the time, I wasn’t doing too much bicycling but it was then that I knew that someday I would like to ride across America. The next summer, I gave it some good thought but didn’t pull the trigger. By the middle of the following school year, my junior year in high school, I had decided that if I didn’t get a job or an internship for the summer, then I was going to commit and bike across the country. A couple of things, in addition, had also led me to this decision, one was that I was 17 and I thought doing it before I turned 18 in January would be kind of cool. Another was that I didn’t have all too much to say about myself so I thought accomplishing this would give me something to be proud of and would make me feel that I didn’t let my youth pass me by. Finally, of course, I wanted to see America! I’ve never traveled much outside of my home state of California so I wanted to see what I was missing. See the geography, eat the food, feel the weather, and experience how others were living in America. I had also started getting into road biking pretty heavily at this point, it was my main sport and I was in pretty good shape, getting pretty fast. I would ride after school in the East Bay hills, getting some exercise, and trying to get faster (for Strava of course!).
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1b679GIbJjeb-0o4Bxqi8MKBWsESgU4lj")}
						caption="My bike pictured from the top of Mt. Diablo during a training ride"
					/>


					<Article.Bodytext>
						In January, I had also started volunteering at the “Waterside Workshops” community bike shop in Berkeley. They’re a nonprofit that works with lower-income youths to teach them bike mechanic skills by giving them a job and letting them work and run the bike shop. I was a volunteer and I loved it. I came in every weekend, spent a couple of hours fixing up old bikes, and learned a ton of bike repair skills. By about February or March, Covid-19 hit and things changed big time. Schools got shut down, I couldn’t volunteer at the bike shop anymore, and internships were being canceled. My local sporting goods store, Sports Basement, also had to shut down their physical location, but to keep their business going they ran a huge online sale with 50% off almost everything! It was at this point I realized that 2020 would be the perfect year to bike across the country.
					</Article.Bodytext>

				</Article.Body>


			</Article>
		</React.Fragment>
	);
}

export default Inspiration;