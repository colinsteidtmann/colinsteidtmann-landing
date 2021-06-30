import React from "react";
import {Link} from "react-router-dom";
// Components
// Other imports

export const AboutSocials = () => {
    return (
        <React.Fragment>


			<h4 class="fw-light" id="about">
				About
			</h4>

			<p class="fw-light">

				I'm Colin Steidtmann. I'm from Berkeley, CA. I currently work as a freelance software developer. I like riding bikes, being outdoors, and learning new things.
			</p>

			<h4 class="fw-light" id="socials">
				Socials
			</h4>

			<p class="fw-light">
				<ul class="list-group list-group-flush socials">
				  <li class="list-group-item bg-light ">
				  	<p class="fw-light">
				  		<a 
				  			class="text-dark"
				  			href="https://www.facebook.com/colinsteidtmann"
				  			target="_blank" 
				  			rel="noreferrer"
				  		>
				  		<i class="fab fa-facebook-square me-2"></i>
				  		Facebook &#8212; @colinsteidtmann
				  		</a>
				  	</p>
				  </li>
				  <li class="list-group-item bg-light ">
				  	<p class="fw-light">
				  		<a 
				  			class="text-dark"
				  			href="https://www.twitter.com/steidtmanncolin"
				  			target="_blank" 
				  			rel="noreferrer"
				  		>
				  		<i class="fab fa-twitter-square me-2"></i>
				  		Twitter &#8212; @steidtmanncolin
				  		</a>
				  	</p>
				  </li>
				  <li class="list-group-item bg-light ">
				  	<p class="fw-light">
				  		<a 
				  			class="text-dark"
				  			href="https://www.strava.com/athletes/24708059"
				  			target="_blank" 
				  			rel="noreferrer"
				  		>
				  		<i class="fab fa-strava me-2"></i>
				  		Strava &#8212; @colinsteidtmann
				  		</a>
				  	</p>
				  </li>
				  <li class="list-group-item bg-light ">
				  	<p class="fw-light">
				  		<a 
				  			class="text-dark"
				  			href="https://github.com/colinsteidtmann"
				  			target="_blank" 
				  			rel="noreferrer"
				  		>
				  		<i class="fab fa-github-square me-2"></i>
				  		Github &#8212; @colinsteidtmann
				  		</a>
				  	</p>
				  </li>
				  <li class="list-group-item bg-light ">
				  	<p class="fw-light">
				  		<a 
				  			class="text-dark"
				  			href="https://www.linkedin.com/in/colinsteidtmann/"
				  			target="_blank" 
				  			rel="noreferrer"
				  		>
				  		<i class="fab fa-linkedin me-2"></i>
				  		LinkedIn &#8212; @colinsteidtmann
				  		</a>
				  	</p>
				  </li>
				  <li class="list-group-item bg-light ">
				  	<p class="fw-light">
				  		<a 
				  			class="text-dark"
				  			href="https://colinsteidtmann.medium.com/"
				  			target="_blank" 
				  			rel="noreferrer"
				  		>
				  		<i class="fab fa-medium me-2"></i>
				  		Medium &#8212; @colinsteidtmann
				  		</a>
				  	</p>
				  </li>
				</ul>
			</p>

		</React.Fragment>
    );
}

export default AboutSocials;