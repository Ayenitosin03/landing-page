import React from 'react';
import { InlineIcon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import githubIcon from "@iconify/icons-mdi/github";
import instagramIcon from "@iconify/icons-mdi/instagram";
import twitterIcon from "@iconify/icons-mdi/twitter";

import { Grid, Cell } from 'react-mdl';
function Landingpage() {
    return (
        <div style={{width: "100%", margin: "auto"}}>
         <Grid className="landing-grid">
           <Cell col={12}>
               <img 
                src="https://res.cloudinary.com/daywr1yan/image/upload/v1626359238/tosin_djrgey.jpg" 
                alt="avatar"
                className="my-picture"
              />
              <div className='banner-text'>
                <h1>Software Engineer</h1>

                <hr /> 

                <p>HTML/CSS | Bootstrap | JavaScript | React</p>

                <div className="social-links">

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/ayenioluwatosin/" rel="noreferrer" target="_blank">
                  <InlineIcon icon={linkedinIcon} className="icon"/>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/Ayenitosin03" rel="noreferrer" target="_blank">
                  <InlineIcon icon={githubIcon} className="icon"/>
                  </a>

                  {/* Instagram */}
                  <a href="http://instagram.com/tosin_esther_" rel="noreferrer" target="_blank">
                  <InlineIcon icon={instagramIcon} className="icon"/>
                  </a>

                  {/* Twitter */}
                  <a href="http://twitter.com/tosin_esther_" rel="noopener noreferrer" target="_blank">
                  <InlineIcon icon={twitterIcon} className="icon"/>
                  </a>
                  
                </div>
              </div>
           </Cell>
         </Grid>  
        </div>
    )
}

export default Landingpage;
