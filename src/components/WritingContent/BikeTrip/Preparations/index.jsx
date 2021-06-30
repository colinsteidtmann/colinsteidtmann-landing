import React from "react";
// Components
import {Article, LightboxGallery} from "#components";
// Other imports
import {DriveImgLink} from "#constants/functions";

export const Preparations = () => {
	return (
		<React.Fragment>
			<Article>
				<Article.Header 
					title="The Preparations"
					subtitle="How did I prepare?"
					date="June, 2020"
				/>
				<Article.Body>

					<Article.Subheader>
						Big discounts!
					</Article.Subheader>

					<Article.Bodytext>
						My initial bike across America preparations began when my local sporting goods store (Sports Basement) ran a huge online sale to boost their business when Covid-19 started in late February/early March. I took advantage of it and started buying all my gear. I had to buy a tent, sleeping bag, shirts, rain gloves, sleeping pad, sunglasses, waterproof bags, a cookstove, rain jacket, bike shorts, stuff sacks, micro-towels, bath kits, sun protection sleeves, bike gloves, head coverings, socks, solar panels, portable batteries/chargers … there was a lot.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1zEcd-M-Zb7yDAZpjdOdnWifomm7-goIR")}
						caption="Layout of my gear the day before I left"
					/>

					<Article.Bodytext>
						I originally imagined that I would be riding with a “bikepacking” setup instead of the traditional bike touring setup. Bikepacking setups have less baggage, are supposed to be more aerodynamic, and have a better weight distribution. They use one bag under the seat, one bag in the bicycle frame, and one bag on the handlebars. Traditional bike touring setups, on the other hand, use a rear bike rack and 2-4 bike bags that get mounted onto the rack. If bags are placed only on the back of the bike then the bike will be unevenly weighted and backside heavy. Since bikepacking setups are quite popular right now and pretty cool looking, I started buying gear in that direction.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1-1vg-6QOj9KwQz6Zi5_SAqZy-Vaei-0y")}
						caption="New and hip bikepacking vs. old-school bike touring bikes"
					/>

					<Article.Bodytext>
						Between March and the end of the school year in June, I slowly bought most of my gear. I also started following bike touring youtube channels and was getting inspiration from them. I originally planned to leave June 1st but when June 1st rolled around I wasn’t very ready. Also, at the end of May, I happened to get an internship with my neighbor who builds batteries in his garage. After a couple of days doing the internship, I quickly realized that it wasn’t going to last too long. It was a one-man company — my super-smart chemist neighbor working on new battery technology — and I didn’t see how I could possibly help given that I had practically zero chemistry knowledge. Anyhow, I figured that with the internship and Covid-19 still happening, it would be best to stick through the internship until the end of the month and then leave for my bike trip in July when hopefully the Covid situation would improve. So, throughout June I worked at the battery internship and continued to plan my bike trip. I was still trying to buy things like my bike GPS, a GoPro, and some other accessories. On June 25 or something, I finally got laid off from my internship for not being helpful enough (totally understandable, I didn’t know what I was doing there either).
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1LGnBGzCk66DjvRvcUuHpevot6Cg98YYM")}
						caption="My summer internship making batteries in my neighbor Dave's garage."
					/>

					<Article.Subheader>
						Time to get serious
					</Article.Subheader>

					<Article.Bodytext>
						This is when my bike touring preparations got a lot more intense. I wanted to leave on July 1st and still felt I had so much to do. I hadn’t even bought the maps yet. I didn’t know where I would stay. My bike was too small! From then on I worked all day and stayed up all night (past midnight) working on getting everything together. I was making multiple trips a day, leaving the house to go to places like the bike shop, a hardware store, a sewing store. I needed to replace my bike chain, cables, lengthen the stem, and raise the handlebars (my bike was too small). I went to the hardware store to try to get things to make water bottle cages for my extra-large 1.5L water bottles (it never worked out). I went to the sewing store to get fabric, needles, and thread to make a custom frame bag and handlebar bag. I watched youtube videos on bike repairs, sewing, DIY this, DIY that.
					</Article.Bodytext>

					<LightboxGallery
						figures={
							[
								{
									img:DriveImgLink("1vJycnl_V2H2glt9FGQeh7Un2nDkYjKyI"),
									caption:"Replacing my bike chain using my homemade repair stand."
								},
								{
									img:DriveImgLink("1mvyBYwFMXWj0BObVblgQcQ99KvOmmIEz"),
									caption:"Replacing my bike tires."
								},
								{
									img:DriveImgLink("1KxXV6cxNSFwdwkwrNn3btlZFExDc-SRz"),
									caption:"Sewing my bike bags"
								},
								{
									img:DriveImgLink("12eFA9Oh5sEziKVtX3R4xBlgUb67nkO5C"),
									caption:"Scrapwood used to build my repair stand"
								},
								{
									img:DriveImgLink("1JDNEn1TD_467MCI3zmqgi-VS1kiy-ObZ"),
									caption:"Building my repar stand using an old bicycle car rack"
								},
								{
									img:DriveImgLink("1NiEi2sSKxklEliv1p3nkKc42-Uw9376Q"),
									caption:"Finished building my repair stand"
								}
							]
						}
						id="buildStand"
					/>

					<Article.Bodytext>
						I would call my mom, she was in Nevada on vacation, and I would ask her for sewing help over the phone. I had to ride my bike to all these places because I didn’t have a car and my parents were out of town. I met people on Craigslist to buy a GoPro, Garmin GPS, etc.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("12wukhvjScOLdkHoAWjTs4Xvk3QtIu_Z6")}
						caption="Buying a Garmin bike GPS for navigation"
					/>

					<Article.Bodytext>
						There was so much to do in seemingly so little time. When July 1st came, I still wasn’t ready. At this point, I was up until 2 or 3 am every day, working on putting things together. When my mom finally returned home on July 3 or something she was able to help me with the sewing (thank you mom).
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1cYyI8K9AYEuZ3mKaKzxP_kGtvJvOIb9A")}
						caption="My mom helping me sew a bag because I'm getting time-crunched"
					/>

					<Article.Subheader>
						Uh oh!
					</Article.Subheader>

					<Article.Bodytext>
						Finally, by Saturday, July 4, I finished my bikepacking setup and I was ready to test ride it! My first time test riding the bike if you could believe that, and sadly, it didn’t work. I just rode down my street and things were falling off, the bag on the handlebars was hitting the wheel causing a friction burn through it, and it was an overall pretty sketch setup that would definitely not work on a trip across the country. It was also incredibly heavy! I originally planned and made room to bring my laptop but after one test ride I quickly threw that idea away.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("1c033x83ETRiXod-I6yFtIOXu20eGFIfv")}
						caption="Bikepacking bike (too heavy and sketchy!)"
					/>

					<Article.Bodytext>
						So, it was Saturday, July 4, I had wanted to leave on July 1, and my bikepacking setup was a failure. While most people would have been a bit out of luck, my family thankfully had an old bike touring rack and 2 panniers. So, I took off all my cool bikepacking bags, and I put on the old-school bike touring rack and pannier bags. So easy, so simple, all my stuff fit into those two bags on that one sturdy rack (I still needed my homemade frame bag though). I took the bike for a test ride, and it worked perfectly.
					</Article.Bodytext>

					<Article.Figure
						img={DriveImgLink("17H6JY0L5MSZJ2XWnThci6zFaelRlyLRQ")}
						caption="Tour bike with pannier rack installed (sturdy and light, sort of)"
					/>

					<Article.Bodytext>
						That night on July 4, I decided I would rest the next day, finally buy my bike touring maps, study the route, and then leave on Monday, July 6. I was ready.
					</Article.Bodytext>

				</Article.Body>


			</Article>
		</React.Fragment>
	);
}

export default Preparations;