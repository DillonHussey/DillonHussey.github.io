import Header from '../components/Header'
import Meta from '../components/Meta'

//Write up this page
// Write up about me
// Write code sharing policy page
// Get images for Android projects.
// Upload to github




const About = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default About