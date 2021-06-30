import React from "react";
// Components
import {Article, LightboxGallery} from "#components";
// Other imports
import {DriveImgLink} from "#constants/functions";

export const Day2 = () => {
	return (
		<React.Fragment>
			<Article>
				<Article.Header 
					title="Day 2"
					subtitle="Davis → Pioneer CA"
					date="July 7, 2020"
				/>
				<Article.Body>

					<Article.Subheader>
						Sore legs, sunny morning
					</Article.Subheader>

					<Article.Bodytext>
						After a good night’s sleep on Issac’s couch, I woke up at 7 am and prepared to leave. I made oatmeal and eggs for breakfast. Issac wished me farewell and then I was off. It was a sunny day in Davis, things started out pretty nice. The Davis college campus had a nice bike trail which led me out of town. I then rode along the train tracks for a bit and passed some university sunflower farm experiments. My only annoyance was that my cycling shorts were starting to give me a rash so I had to be careful about not moving around on the saddle too much or else it would hurt. To get from Davis to Sacramento, I needed to cross a long highway span that went over some wetlands. There was a little bike path to do so but it wasn’t well maintained (a bit of gravel, cracks, and glass). After an hour or so, I reached Sacramento. I crossed over the Sacramento river using a big yellow bridge and then I got onto the Sacramento river trail bike path.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1Pa0euEbeQB6vYz6E9Ujr5ypbag4Dbxf2")}
						caption="Entering Sacramento by crossing a big yellow bridge!"
					/>

					<Article.Bodytext>
						The bike path took me through a historic train stop and tourist attraction from the time of the Gold Rush in 1848 (Sacramento and California boomed in the 1800s because of gold, if you didn’t know).
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("11dm919oqOOTtNY_CJbbgAjrgQ82TzfNE"),
									caption:"Historic cafe"
								},
								{
									img:DriveImgLink("1sA-HFdbt7TtOCmlYAWfS4u_3NEPRa_wG"),
									caption:"Historic gold mining train station"
								},
							]
						}
						id="trains"
					/>

					<Article.Bodytext>
						The bike trail then continued for 30 more miles! I rode along the river on the smooth and flat bike trail all the way through Sacramento. It was great. I passed parks, went over bridges, easy riding except when my panniers flew off once for no good reason.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1T4DUuEkJ6b6Lf1xXIv3uKrWu7zusovRR")}
						caption="Sacramento River Trail bike path"
					/>

					<Article.Subheader>
						Scenery change!
					</Article.Subheader>

					<Article.Bodytext>
						After a few hours, I reached the end of the bike trail and was out of Sacramento on my way to Plymouth. The next couple of hours and 30 or so miles weren’t too fun. I entered into dry grass fields, and rode in the hot weather on a road with lots of cars but no shoulder. Things also started getting pretty hilly since I was begenning to enter the Sierra Nevadas.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1liyW0ox6mcVVvv4JKEF8KQByRkVbvQpj")}
						caption="Hot road and no shoulder"
					/>

					<Article.Bodytext>
						My original plan for the day was to bike to Plymouth where there was a motel that my mom wanted me to stay at. However, when I got to Plymouth at 2 pm and saw it was an old tiny town with no grocery store, I called my mom and told her I wanted to keep riding. I had gone 75 miles at that point and my goal was to do around 100 miles a day. So, after some lunch and a phone call to mom, we picked a town 22 miles away called Pioneer as a place to ride to. For lunch, I had a delicious almond butter sandwich and I took a 30 minute nap in a park.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1EYuWXuBqDfM3rQIpv-GeYylx4-HmShgr")}
						caption="Yummy almond butter sandwich in park"
					/>

					<Article.Subheader>
						Now entering: forests!
					</Article.Subheader>

					<Article.Bodytext>
						At around 3, I left for Pioneer. Instantly after leaving Plymouth, I started climbing hills. It was hot and the road I was on didn’t have a shoulder, but it also didn’t have many cars, thankfully. I started out riding through dry grass fields but then trees started popping up and pretty soon I was in a forest! It was very hilly, I would go up one hill, down another, and it would repeat. I got pretty dehydrated, had to stop at a fire station to get water from their hose. One interesting little town I passed through was “Volcano.” Volcano CA is an old mining town, very small. It was created during the Civil War as a town to get gold in and fund the Union army with it. Union soldiers were the gold miners and they named the town Volcano because the town is in a bowl valley and the soldiers thought it was a volcano (it looked nothing like a volcano though).
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("19XgAvEZxjA-Ocnu47pc9-ZvawRbhg_hJ")}
						caption="Plaque describing the town of Volcano"
					/>

					<Article.Subheader>
						Pioneer, I'm almost here!
					</Article.Subheader>

					<Article.Bodytext>
						After riding through Volcano, and many podcasts and hours later, I got to Pioneer by about 7 pm. Sadly, Pioneer turned out to be a dud. It was nothing more than a single motel and bar on the side of a highway that went to Tahoe. I was out of luck, however, because there were no nearby towns in those Sierra Nevada mountains. There was also no cell service. I went to the bar and asked if I could borrow someone's phone. There were only a few people in the bar, all nice locals, and they kindly gave me a phone to use and an ice cold bottle of water! I called my mom to see about the motel. The motel lobby was closed so we had to call them and ask them what was up. Sadly, due to Covid-19, they were doing long term stays only, no overnights. Wondering what to do, with no campsites nearby, the sun going down quick, and nowhere to stay, I asked the people in the bar if I could pitch a tent in one of their yards. None of them said yes, but one of them did suggest that I could pitch a tent behind the motel and I shouldn’t be kicked out. So, that’s what I did.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("16vN8_nO-r0mvvPkDFYDWJ2PAx-wY0Cgz"),
									caption:"Pioneer is a highway stop"
								},
								{
									img:DriveImgLink("1_v3Yi6lFWWH5-ayPXbKIKSnaP1iVwuLf"),
									caption:"Thinking about my decisions in life"
								},
							]
						}
						id="camping"
					/>

					<Article.Bodytext>
					It was “stealth camping” — camping without permission. There was no water besides what I had in my water bottles, and there was no electricity or cell service. I crammed my tent and bike under some bushes and I tried to cook dinner and go to bed. I managed to cook some quinoa and I had almonds and energy bars to go with it. It definitely wasn’t ideal, but this is the adventure I wanted, right?
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1XG4bZnS_76FQRMMOjBCqldfxXVmYu8mk"),
									caption:"Back of the motel viewed from inside my tent"
								},
								{
									img:DriveImgLink("1rkDB8pyO1O_04z3I5CCtEWOdmcnVLD2q"),
									caption:"Cooking quinoa for dinner"
								},
							]
						}
						id="dinner"
					/>

					<Article.Subheader>
						The Ride:
					</Article.Subheader>

					<Article.StravaSection
						distance="97.47"
						elevation="5,232"
						movingTime="7h:10m:52s"
						facebook="https://www.facebook.com/colinsteidtmann/posts/134670904957034"
						strava="https://www.strava.com/activities/3734529501"
						dayNumber="2"
						embed="https://www.strava.com/activities/3734529501/embed/612311ae2e0f127806928ca7064298d042d293cd"
					/>

				</Article.Body>


			</Article>
		</React.Fragment>
	);
}

export default Day2;