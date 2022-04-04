import Header from '../components/Header'
import Meta from '../components/Meta'
import Project from '../components/Project'




function importAll(dir) {
  let images = {};
  dir.keys().forEach((item) => { images[item.replace('./', '')] = dir(item)})
  return images;
}



/*TODO:
  - Set up file sharing
  - Write about me sections and instructions for use.
*/

const Projects = () => {

  var projectsArr = require('../data/projects.json')
  
  // page content
  const pageTitle = "Projects"
  const pageDescription = 'Here I will show all the projects'


 
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
  projectsArr.forEach(prj => {
    prj.images = prj.imageNames.map(path => { return images[path]})
    })
 
  

  return (
    <div>
      <Meta title={pageTitle}/>
     
      <Header head={pageTitle} description={pageDescription}/>
      
      {  
        projectsArr.map(prj => {
       return  <Project prj={prj}/>
        })

      }
      
    </div>
  )
}

export default Projects