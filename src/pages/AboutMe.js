import Header from '../components/Header'
import Meta from '../components/Meta'

// Process of converting from md to html is annoying so use CLI to convert and
// html-loader added to webpack.config will convert

const AboutMe = () => {
  // page content
  const pageTitle = 'About Dillon'
  const pageDescription = ''

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <div style={{lineHeight:"2"}}>
<h2 id="why-i-code">Why I code</h2>
<p>I enjoy computer science because I love learning. I know that as a software developer
I will constantly be learning a new skill and improving on what I already know.</p>
<br></br>
<h2 id="my-studies">My Studies</h2>
<p>I will graduate from Principia College in the Spring of 2024 with majors in <b>Computer
Science</b> and <b>Mathematics</b>, as well as minors in Business and Economics. 
My favorite classes so far have been Hardware Architecture and Software Architecture. 
Hardware  Architecture took a modular approach to building a computer, starting 
with combining simple NAND gates to create a useful component like a D-Flip Flop 
to use in the next project to build something more complex. This culminated in 
building an 8-bit computer. I led the software side, coding microinstructions 
into memory and helped guide the hardware team understand how data was passed from
one component to the next. In Software Architecture I learned how the ARM ISA&#39;s
operate, and used this knowledge, along with an understanding of caching and 
stackframes to write better and more efficient code.</p>
<br></br>
<h2 id="my-notable-experiences">My Notable Experiences</h2>
<h3 id="work">Work</h3>
<ul>
   <li>
     <h4 id="summer2021">2021 Summer CSCI Research Assistant for Principia College</h4>
    <ul><li>I helped develop an educational web app which can allow students to 
    participate in Physics labs online.</li>
    <li>Tools used: React, Github, Redux, Webpack, Redux, Postman, CSS, SVGs, Java, 
    mySQL, npm, schemas, RESTful api</li>
    </ul>
    </li>
<li> <h4 id="2022">2022 Computer Science and Math Tutor</h4>

    </li>
<li><h4 id="2019">2019 Summer Camp Counselor at Camp Owatonna</h4></li> 
</ul>
<h3 id="Awards">Awards</h3>
<ul>
  <li> Congressional Award: Bronze Medal</li>
  <li> Princpia College Deans List</li>
  </ul>
<h3 id="athletics">Athletics</h3>
<ul>
  <li> Lifetime runner, (follow me on Strava :)</li>
  <li> Collegiate Soccer Player and Track and Field Athlete.</li>
  <li>2021 NCAA Student-Athlete Advisory Committee Representative</li>
  <li> Ran Cross Country and Track in high schoool</li>
  </ul>
</div>
    </div>
  )
}

export default AboutMe