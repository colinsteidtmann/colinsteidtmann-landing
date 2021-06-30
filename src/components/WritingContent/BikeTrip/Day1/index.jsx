import React from "react";
// Components
import {Article, LightboxGallery} from "#components";
// Other imports
import {DriveImgLink} from "#constants/functions";

export const Day1 = () => {
	return (
		<React.Fragment>
			<Article>
				<Article.Header 
					title="Day 1"
					subtitle="San Francisco → Davis CA"
					date="July 6, 2020"
				/>
				<Article.Body>

					<Article.Subheader>
						The adventure begins
					</Article.Subheader>

					<Article.Bodytext>
						After weeks of preparations, the time had come. It was Monday, July 6 2020, 5:00 am. I decided last night to set up a tent in my garage, cook dinner with my camp stove, and sleep in my tent as some sort of last minute way to prepare (I hadn’t tested the tent or stove before). This didn’t turn out too great because I didn’t realize my tent required being staked into the ground in order to stand up on its own. However, I slept in it anyways, taping it to the garage floor and setting my alarm clock for 5 am. RING RING, at 5 am I got out of my partially collapsed tent and started packing things up, and getting things ready for my planned 7 am departure. I cooked oatmeal with my camp stove, packed up all my gear, got pictures with my dog, and I was ready to roll by 7 or so.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("10rqjY2bryLHeY4OYgDYW8tR24NQbApWJ")}
						caption="My dog Zoe and I taken on the morning that I left"
					/>

					<Article.Bodytext>
						My bike weighed a lot so I rolled it down the driveway.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1g3QLwC_GgXEXgHJ0vuCCbXGLpHI5Tlkd")}
						caption="Rolling my bike down my driveway"
					/>

					<Article.Bodytext>
						The plan was to bike from my house in Oakland to Marin, then to SF where I would take a ferry to Vallejo, and then from Vallejo to Sacramento. I said goodbye to my mom but knew I would see her at the ferry terminal in SF in a few hours.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1mc8f2VWaX6xGyJluBxvRI1PUkNGfS2Fv")}
						caption="See you later mom!"
					/>

					<Article.Bodytext>
						I then rode along Grizzly Peak over to El Cerrito. The bike rode well but during a bumpy section of Grizzly Peak, my portable battery charger slipped out of my solar panel’s side pouch and flew off my bike. I was pretty bummed, the case was cracked and I could smell smoke from the battery, but I turned it on and it was surprisingly still working. So I continued, putting the portable battery into my handlebar bag, but a couple of miles later I hit another bump and it fell out again! This time, however, I also ran over the battery with my bike! I thought it was toast but lucky me, the case snapped back on and it looked to be in better condition than before. So I continued, riding through Berkeley, El Cerrito, and Richmond, all along the waterside. When I got on the Richmond Bridge that would take me to Marin, it was very wobbly because of all the cars traveling over the elevated bridge. My bike couldn’t handle it. Halfway through the bridge I heard some rattles and then all of a sudden screws and nuts started falling off of my bike. It turned out that my triathlon style water bottle mount which I purposefully bent to make my bike accommodate it, couldn’t hold up. It fell apart on the bridge and I had to put it away in my pannier.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1HLPTQbqU1oJtccDNngBqV07EM9RoimUr")}
						caption="My triathlon style water bottles that didn't end up working"
					/>

					<Article.Bodytext>
						After crossing the Richmond Bridge I arrived in Marin. I rode on some bike trail that took me through Marin and towards the Golden Gate Bridge. It was a nice ride and I especially liked the little towns and beach style shops I saw near the Golden Gate Bridge. When I arrived at the Golden Gate Bridge, I was surprised to find out that they only leave one side open (left or right) of the bridge pedestrian path at a time. Since I arrived on the wrong side, I had to get across the bridge to the other side by taking a little walkway that went underneath. The only problem, was that I had to get my bike down a super steep flight of stairs to get onto the walkway that went under the bridge, and then I had to carry my bike back up another super steep flight of stairs to get out of the walkway. Disappointingly, there was no ramp or handicap accessible option (I looked, trust me).
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1oQ3-90e9CN-7nTgQcmy4lbCMj3piB7jp")}
						caption="Golden Gate Bridge path closed on my side"
					/>

					<Article.Subheader>
						Warning: steep stairs crossing the Golden Gate!
					</Article.Subheader>

					<Article.Bodytext>
						So I slowly maneuvered my extremely heavy bike down the first steep flight of stairs as it was practically falling on me and as I leaned on the handrail and clinched it with all my strength. Once I got to the bike pathway I wheeled my bike across the 50 or so feet underneath the bridge where I then got to the other flight of stairs that would take me up onto the street. Since there was no way I would be able to carry my heavy bike up the stairs, I took off all my bags one at a time and walked them up before returning to carry my bike up the stairs. Anyhow, this whole ordeal took about 30 mins but after it, I was finally able to get onto the Golden Gate Bridge and ride across it.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1IjhN8BkyuHwe7LxyQFGdmh01QpZZe9Io"),
									caption:"Carrying my bike bags up the steep bridge stairs"
								},
								{
									img:DriveImgLink("14iwE7wMtZjGBZkSTqWDmPBrGhDtL7hso"),
									caption:"Made it across the Golden Gate Bridge!"
								},
							]
						}
						id="upStairs"
					/>

					<Article.Subheader>
						Hello SF!
					</Article.Subheader>

					<Article.Bodytext>
						By this time, my mom had called and said the ferry wouldn’t leave SF until 2:45 and it was 11:30 so I was in no rush. Once in SF, I rode by the parks along the waterside, looked at the Fort Mason Historical site, and then met up with my mom at the ferry terminal.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1SkjvKsJ64oO77dM6htlDimjxWaht2pWF"),
									caption:"Riding along the water in SF"
								},
								{
									img:DriveImgLink("1YZ9zElOxMlNTVGMaJafZFCMbd3EXurR5"),
									caption:"Fort Mason memorial"
								},
							]
						}
						id="alongWater"
					/>

					<Article.Bodytext>
						Since we had plenty of time, we thought it would be a good idea to get a classic video of me wheeling my rear wheel into the SF bay (then later I would dip my front wheel into the Atlantic ocean once I finished crossing America). However, the nearest beach was 2 miles away and my mom wasn’t going to walk that far. So I rode over to the beach on my own, set up a tripod, and filmed myself putting my rear wheel into the bay. The only problem was, I forgot to take off my shoes and socks! So my feet ended up getting soaked and once I wheeled my bike out of the water and onto the beach, everything got covered in sand. This was a bummer, so I used all the water I had in my water bottles to rinse the sand off everything and then I changed my shoes and socks.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1TVR3mE1C8Bsl23v7S_Ov0JZmkTMdOkip")}
						caption="Rolling my bike into the Pacific Ocean"
					/>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1xDIEnB7wVTmMk_X2gb_MZd1wsn4MUvR4"),
									caption:"Dipping my rear wheel into the Pacific Ocean"
								},
								{
									img:DriveImgLink("1dljwo0iHnjY6-tss8RXBez6gXvPitUqP"),
									caption:"Rinsing my wet and sandy shoes and socks"
								},
							]
						}
						id="inWater"
					/>

					<Article.Subheader>
						Salut, SF!
					</Article.Subheader>

					<Article.Bodytext>
						About 30 mins later, I had gotten the video I wanted (at an expense) so I rode back to the ferry terminal. My mom and I waited at the ferry terminal for about an hour and we figured I wasn’t going to make it to Sacramento that day so the new target destination was Davis CA. We knew a college student named Issac who was in my brother’s Boy Scout troop and he was willing to let me stay at his apartment/dorm. At 2:45, the ferry arrived so I left SF as I waved goodbye to my mom and motorboated to Vallejo. The ferry was cool, not many people, and surprisingly fast.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1-0FlQGb344inwdO6B5Ab_UQizKBTEVTE")}
						caption="Photo with Mom before getting on the ferry"
					/>

					<Article.Figure
						img={DriveImgLink("1cinkz4X8ksSWZ-w4n04gEpQuR4pwViGV")}
						caption="My touring bike in front of the ferry"
					/>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1i3Dm7fJ3Rwr59V4mr3ZA4yxcnmIUDhG8"),
									caption:"There goes San Francisco"
								},
								{
									img:DriveImgLink("1jZNsfAXHnVyRQcgMO0nUKSsLCf99FC0F"),
									caption:"There goes the Golden Gate Bridge, this ferry goes!"
								},
							]
						}
						id="byeSF"
					/>

					<Article.Subheader>
						Hello inner California!
					</Article.Subheader>

					<Article.Bodytext>
						An hour later, I was in Vallejo and off on my own. I turned on my bike gps and started riding. The ride started out with a bike trail but I was quickly riding on the road with cars. Thankfully however, the route was created by the <Article.Link href="https://www.adventurecycling.org/" text="Adventure Cycling" /> bike touring company so they picked a road with not too many cars. It was mostly flat but there were a few decent uphills. I rode past a fire they were putting out in the beginning and then the rest of the ride was farms and suburbs.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("18KV3lpejyrC9XgG7BFvnQm64NkderKFN")}
						caption="It's always burning in California
"
					/>

					<Article.Bodytext>
						By about 5, I was extremely dehydrated, having not had any water since the morning (and because I used it all to wash the sand off my bike). I rode past some rivers and more farms, but kept on riding. There were some pretty windy sections but it was mostly nice. Lots of orchards. I also found delicious ice cold water in a bar at 6 pm or so.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1_6TBn9F2BHAzHQaLR_f2nrOVhKawzPpe")}
						caption="Riding through California fields and orchards"
					/>

					<Article.Subheader>
						Good evening Davis
					</Article.Subheader>

					<Article.Bodytext>
						It wasn’t until about 8:30 pm when I got to Davis and was dead tired. I called Issac and he gave me his address. I rode to his apartment where he then let me in and allowed me to take a shower and do everything else I needed to do. I took a shower and tried to wash some clothes. I then told Issac that I smelled some rice when I first arrived, he said yes indeed, he had cooked some rice and had a couple of containers of it in the fridge. He said I could have some of it if I wanted to. So I happily said yes, and I reheated about 2 containers of rice and cooked about 6 eggs to put on top. It was delicious and by 10:30, it was time to go to bed.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1zZR5vliK5QtFCiUSMzvcwAqEQktwxMcx"),
									caption:"Issac and his dorm/apartment"
								},
								{
									img:DriveImgLink("1opm9YPhWWcVyN2-NHDrsIyDTnLhdNUER"),
									caption:"Eggs and rice for dinner!"
								},
							]
						}
						id="dormFood"
					/>

					<Article.Subheader>
						The Ride:
					</Article.Subheader>

					<Article.StravaSection
						distance="143.67"
						elevation="4,417"
						movingTime="11h:36m:44s"
						facebook="https://www.facebook.com/colinsteidtmann/posts/134670818290376"
						strava="https://www.strava.com/activities/3727033198"
						dayNumber="1"
						embed="https://www.strava.com/activities/3727033198/embed/e9d02502b05de770ae34f82c2d56b8c054598a5f"
					/>

				</Article.Body>


			</Article>
		</React.Fragment>
	);
}

export default Day1;