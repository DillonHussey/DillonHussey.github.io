import Header from '../components/Header'
import Meta from '../components/Meta'
import Project from '../components/Project'




function importAll(dir) {
  let images = {};
  dir.keys().forEach((item) => { images[item.replace('./', '')] = dir(item)})
  return images;
}

const Projects = () => {

  var projectsArr = require('../data/projects.json')
  
  // page content
  const pageTitle = "Projects"
  const pageDescription = ''
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|gif)$/));
  
  projectsArr.forEach(prj => {
    prj.images = prj.imageNames.map(path => { return images[path]})
    })

  return (
    <div>
      <Meta title={pageTitle}/>
     
      <Header head={pageTitle} description={pageDescription} className="text-secondary"/>
      
      {  
        projectsArr.map(prj => {
       return  <Project prj={prj}/>
        })
      }    
    </div>
  )
}

export default Projects