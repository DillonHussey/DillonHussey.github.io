import Header from '../components/Header'
import Meta from '../components/Meta'
import Project from '../components/Project'

function importAll(dir) {
  let images = {};
  dir.keys().forEach((item) => { images[item.replace('./', '')] = dir(item)})
  return images;
}


/*TODO:
  - Put projects on a card view to be pretty :)
  - Put Projects in JSON object so they can be loaded in
  - Make project loader
  - Set up file sharing
  - Write about me sections and instructions for use.

*/
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Projects = () => {
  console.log(images)
  // page content
  const pageTitle = "Projects"
  const pageDescription = 'Here I will show all the projects'

 


  const prj = {
    title: "Android App",
    description: "In this project i made an app about dogs that tells the user about employees dogs. It is written in Kotlin and cleanly uses layouts for nice presentation",
    form: "www.google.com updated",
    image : images['react.svg']
  }

  


  return (
    <div>
      <Meta title={pageTitle}/>
     
      <Header head={pageTitle} description={pageDescription}/>
      <Project prj={prj}/>
    </div>
  )
}

export default Projects