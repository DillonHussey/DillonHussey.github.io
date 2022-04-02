import Header from '../components/Header'
import Meta from '../components/Meta'
import Project from '../components/Project'
const Projects = () => {
  // page content
  const pageTitle = "Projects"
  const pageDescription = 'Here I will show all the projects'

  //test project to demo
  
  return (
    <div>
      <Meta title={pageTitle}/>
      <Project/>
      <Header head={pageTitle} description={pageDescription}/>
      
    </div>
  )
}

export default Projects