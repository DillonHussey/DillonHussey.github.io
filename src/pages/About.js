import Header from '../components/Header'
import Meta from '../components/Meta'

//import style from '../index.css'

const About = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = ''

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <div style={{lineHeight:"2"}} className="text-secondary"><h2 id="what-is-this-site">What is this site?</h2>
<p>This site is a portfolio of some of my computer science projects
from the last few years.</p>
<h2 id="code-sharing">Code Sharing Policy</h2>
<p>Part of the reason I did this instead of just making my projects on
Github public is that some of the projects I&#39;ve worked on are still 
active assignments for classes. Making them public would harm the 
academic process. Other projects I have worked on may be private because
I do not own the code.</p></div>
    </div>
  )
}

export default About