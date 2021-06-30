import React from "react";
// Components
import {Article, LightboxGallery} from "#components";
// Other imports
import {DriveImgLink} from "#constants/functions";

export const Day5 = () => {
	return (
		<React.Fragment>
			<Article>
				<Article.Header 
					title="Day 5"
					subtitle="Fallon → Austin NV"
					date="July 10, 2020"
				/>
				<Article.Body>
					
					<Article.Subheader>
						Rise and shine!
					</Article.Subheader>

					<Article.Bodytext>
						I set my alarm for 5 am and woke up to the dark night in Fallon Nevada at my Warmshowers stay. I got my stuff from the dryer, packed it away, and started cooking breakfast. Breakfast today was sourdough bread, eggs from Stacy’s chickens, and tea (very yummy). Stacy and Brad were still asleep, sadly they never woke up so we could say goodbye (another time Stacy, another time).
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1vZOa3Dwxd8tw4ZyDKhoTgWJOel0y8AY4")}
						caption="Yummy sourdough bread served atop fresh fried eggs"
					/>

					<Article.Bodytext>
						By the time I ate and was ready to go at 5:45 am or so, the sun had risen and I was off on my journey to Austin Nevada. It was going to be a long day, 110 miles or so, with only one place to get water halfway in between.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1Z8sZUCvW76BuH1Mw7WbJm3mj65Jw19Bm"),
									caption:"Leaving Fallon Warmshowers home"
								},
								{
									img:DriveImgLink("11OrzZvcl0RLDk-ECZHKIWCYEhgDY5PZ2"),
									caption:"Morning in Fallon"
								},
							]
						}
						id="fallonMorning"
					/>

					<Article.Bodytext>
						It was a pleasantly cool morning start, not too hot. I even took the time to set up my tripod to get a rolling by bicycle shot.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1gQAkBbIimFrFCO43aa4K4mOb2naGbpJR")}
						caption="Sunrise bike fly-by"
					/>

					<Article.Bodytext>
						Shortly after leaving the city of Fallon, reality struck. My Garmin GPS said to stay on the road for the next 151 miles. I was going to be riding Highway 50 (aka “The Loneliest Road in America”) all the way through Nevada. So I turned off my GPS and tried to just settle in.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1hvVibZaatyjlSO1kKMxdWJQKxFZ7u3IQ"),
									caption:"'Continue straight for' ... 151 mi"
								},
								{
									img:DriveImgLink("19x8Ut5aXhRwAPbo9W3vkb0F9yGeJM6XK"),
									caption:"Sunrise selfie"
								},
							]
						}
						id="sunriseSelfie"
					/>

					<Article.Subheader>
						Uh oh!
					</Article.Subheader>

					<Article.Bodytext>
						I listened to some podcasts, tried to listen to an audible, but I got sick with them all and turned them all off after a few hours. At about 11 am, my pannier (bike bag) fell off my rack again! This time however, the problem was a little more serious. A bolt holding my rack to my bike frame fell out and went missing.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("15BxBStQBdjSH5o3omKkj6nC-WkEO0r6-"),
									caption:"Bolt holding the bag to the frame fell out"
								},
								{
									img:DriveImgLink("18sdSKxXc6HxrH8w50FKiHRhEs6EPqr-I"),
									caption:"Bike on ground after panniers fell off"
								},
							]
						}
						id="boltBike"
					/>

					<Article.Bodytext>
						Thankfully, I had some sense and was prepared for something like this. I had brought a couple of spare bolts and was able to use one of them to re-attach the rack to the frame. So I continued rolling, and shortly after I came across some awesome rock art that cyclists and people passing by created in the desert sand with nearby stones.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1lWtt4Iyep2CpNPwfr2YcqE2NUdVEz4cn")}
						caption="Bike image drawn in sand using rocks"
					/>

					<Article.Figure
						img={DriveImgLink("1CQ1sv9yOPRtnP76rTY6nkecB4toJMOeZ")}
						caption="More sand art"
					/>

					<Article.Bodytext>
						It went on for a good couple of miles. People writing their names, drawing pictures and symbols. Some religious words and hearts were drawn. It gave me encouragement and reassurance that I wasn’t doing anything too crazy, people have been on this road before and got through just like I was going to do. So, the wheels kept rolling, and I got the wonderful reassurance from a sign that Austin was only 64 miles away (slight sigh).
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1ePU9Sp5mFc5rYGZAt6xiheXje25FVUfK")}
						caption="Sign says Austin is 64 mi away"
					/>

					<Article.Subheader>
						Mmmm, water
					</Article.Subheader>

					<Article.Bodytext>
						A little while later, just as I was running out of water and getting pretty tired. I thankfully made it to the halfway point at Cold Springs. Cold Springs was an RV park and diner, the only shelter and living area that I would see for the whole day riding through the Nevada Desert.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1waPnKd2CIyD7RWOjDBsmBF9ZHT4STUwM"),
									caption:"Entrance to Cold Springs"
								},
								{
									img:DriveImgLink("1ZaoInnLJlRFwrQB5_iuVYVy7NJYajem-"),
									caption:"Selfie in front of Cold Springs store"
								},
							]
						}
						id="entranceColdSprings"
					/>

					<Article.Bodytext>
						The people in the restaurant were kind enough to let me refill my water bottles. After that, I had 50 or so miles until Austin. It was a long flat highway that disappeared into the horizon. Nothing but cracked grounds, rocks, and shrubs on the side of the road. I saw mountains in the far distance but no houses or structures anywhere in sight. One slight annoyance were the rumble strips that made it slightly difficult to ride on the side of the road because I had to watch out to not ride over the them (which happened occasionally and was always uncomfortable). I took a snack break somewhere along the way.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1BE38gKUF9FwJkTnbQJ2Z3_kNp4OyoLRL")}
						caption="Energy bar snack break"
					/>

					<Article.Bodytext>
						After passing by the 31 miles to Austin sign, things got really tough.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1saZgnMw9HJyPFJ95kmdbwIOteaD-mKyz")}
						caption="31 miles to Austin sign"
					/>

					<Article.Subheader>
						Why am I going so slow?!
					</Article.Subheader>

					<Article.Bodytext>
						I didn’t realize it at the time but I was riding a slight uphill that deceivingly looked very flat. I was going about 9 mph and of course I was pretty exhausted by then. It was very mentally frustrating, going so slow but trying so hard. Eventually, I passed through some mountains and was very, very surprised to see trees. The trees aren’t too big in Nevada, but they’re there.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("11SEr8KV4pYjdxTX6i9kChATorN_f19OU")}
						caption="Trees in Nevada?!"
					/>

					<Article.Bodytext>
						I also came across a historic landmark, New Pass Station, the old Pony Express mail stop from the 1860s. Wells Fargo purchased the station and used it for a few years, but eventually they stopped using it and let the station crumble away.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1Es2McjbfZy_CWyDTj0jQwQX0WIDxI6MO")}
						caption="Historic Pony Express mail station"
					/>

					<Article.Subheader>
						Finally
					</Article.Subheader>

					<Article.Bodytext>
						The next 10 or so miles was another slow grind, but finally, things took a change and I started going downhill. I looked ahead and I saw the bottom of the mountain that I had spent the past 2.5 hours and 20 miles or so climbing. I was very, very thankful, grateful for every mile of downhill I got. On the way down, I think I think I even saw some wild horses! There were horses in an unfenced area with no possible owner nearby. It was pretty amazing. After 10 gleeful miles of downhill, I was back on flat ground with Austin only a couple miles ahead. The final 3 miles into Austin were painfully steep (after a long day of riding). Yet I eventually arrived.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1uq_QaUci6SVekvgscoh78ed2R3JYiS82"),
									caption:"Steep climb entering Austin"
								},
								{
									img:DriveImgLink("1j_fKruwXOORDKGCZOI29WKLuSgxKFIcT"),
									caption:"Road blocked because of construction"
								},
							]
						}
						id="roadBlocked"
					/>

					<Article.Figure
						img={DriveImgLink("1NcbbpVLwalAtUV9lJsEU6Hr86QlRX9Gd")}
						caption="Austin gas station"
					/>

					<Article.Subheader>
						Why is there a castle?
					</Article.Subheader>

					<Article.Bodytext>
						I got to my motel for the night, Cozy Mountain Motel, at about 2 or 3 pm. The hotel owner was a super nice, young lady, who was playing some computer video games when I arrived. My mom had called her before to get my reservation and make sure I could stay, but she said I really needed some ID as I looked very young. Anyways, after a nap and some lunch (almond butter sandwich), I got up and wanted to do some exploration. I saw an interesting castle rolling in so I searched it up on Google and saw it was only a 13 minute walk away. So I walked to the castle on a very nice trail during the cooler part of the Nevada day at around 5:30 pm. The dirt trail winded for a little bit and then there it was, a crazy medieval-looking castle in the middle of the desert. It was the most unexpected thing.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1-bIgxyzJjX70Z3jbGnCXWxpBWtcTateY")}
						caption="Selfie in front of Stoke's castle"
					/>

					<Article.Bodytext>
						Apparently, it was Stoke’s Castle. Built in 1896 by the rich mining developer Anson Phelps Stokes. Stokes made a fortune from silver mining operations that happened in Austin Nevada. He had the castle built as a summer vacation house for his family. He modeled it after a tower he saw in Italy. It was made of hand-hewn granite and stones. The family stayed there for one June month, but then Stoke’s sold his mining operations in Austin and the family never returned. The castle fell into disrepair and is now a historic landmark and tourist attraction.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1QYbO6gabpZMtbFyGtv_oh9UlLdFtPlvD")}
						caption="Inside Stoke's castle"
					/>

					<Article.Bodytext>
						In addition to Stoke’s castle, there was also a piece of old mining equipment. At first I didn't know what it was, but shortly after, a guy and his girlfriend drove up and when I asked him, he said it was used to load up the trains with mined silver ore. Apparently he and his girlfriend were driving all over Nevada in their Jeep to tour old mining sites and go into mining caves (sounded pretty cool). They also gave me some water bottles which was nice.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1P_yY3HoxgXu2J4wDEHzB_79Z07e1-00C"),
									caption:"Mining tool"
								},
								{
									img:DriveImgLink("1AqTtmeFbo7Iv185yu6xququdHt_y3RcI"),
									caption:"Used to load up trains"
								},
							]
						}
						id="mining"
					/>

					<Article.Bodytext>
						Finally, Stoke’s Castle also had a beautiful view of the Nevada landscape.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1SxwiaTIGyjwX51nXoTFEUvEX9caehhqn"),
									caption:"View of Nevada from Stoke's castle"
								},
								{
									img:DriveImgLink("1_9t7ngJ31xkUjr9rvr0Nx2_MLRJw4iu0"),
									caption:"View of Austin from Stoke's castle"
								},
							]
						}
						id="views"
					/>

					<Article.Subheader>
						BBQ's can cook eggs and rice, who woulda thought
					</Article.Subheader>

					<Article.Bodytext>
						I left the castle, walked the relaxing 15 mins back to the hotel, and then I got dinner started because it was 7 pm or so. The motel had microwaves, but they also had a BBQ, pots and pans, and fresh eggs from their chickens! The BBQ had a little side burner so I boiled up some rice and pan fried the eggs. They had some garlic seasoning that I sprinkled on top and a Keurig that made black tea. It was a lovely, relaxing dinner.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1aLp_BHSbSxd-6Kd_X7JTuuGbpbrrk1T0"),
									caption:"BBQ cooking my rice and eggs"
								},
								{
									img:DriveImgLink("1uUjrWloWijBca1pZ5XDJl1GEvszKRHAw"),
									caption:"Eggs atop rice for dinner"
								},
							]
						}
						id="bbqDinner"
					/>

					<Article.Bodytext>
						While I was eating, I got to talk to the hotel owner. She said one thing that blew my mind, it apparently snows in Austin Nevada during the winter. Hard to imagine on a 100 degree day like it was. Her husband was also building a chicken coop as I was eating, and while he was still building it, one of their chickens was actually hatching some fertile eggs. The husband and wife hotel owners were getting all excited, the construction workers who were also staying at the motel came out to see, I think some neighbors or other town residents came too. The husband had to rush to finish the chicken coop and eventually he did. Everyone was out and enjoying the nice evening, watching some baby chickens.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1iwyzUUkdFZ87D4Dtj-M_26NehTcU_IF2")}
						caption="The chicken who made my eggs, which came first?"
					/>

					<Article.Bodytext>
						I went to bed shortly later, the plan was to wake up super early again and ride only 60 miles or so to Eureka Nevada. I really liked my stay at the Cozy Mountain Motel, but I was getting lonely on the loneliest road in America, and I was now calling my Mom multiple times a day for comfort and someone to talk to. Anyhow, early wake-up tomorrow, so off to bed.
					</Article.Bodytext>

					<Article.Subheader>
						The Ride:
					</Article.Subheader>

					<Article.StravaSection
						distance="113.92"
						elevation="5,498"
						movingTime="8h:20m:13s"
						facebook="https://www.facebook.com/colinsteidtmann/posts/134671238290334"
						strava="https://www.strava.com/activities/3743026039"
						dayNumber="5"
						embed="https://www.strava.com/activities/3743026039/embed/11c177d0d627026a2d7fa3327a51a2859b09970c"
					/>


				</Article.Body>


			</Article>
		</React.Fragment>
	);
}

export default Day5;