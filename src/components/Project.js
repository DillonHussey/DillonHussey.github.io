
//This is the model for each project display
// I need an adapter in this file that will take a

/*

prj object model:
prj {
    title: "this is the title"
    images : [1, 3, 4] list of which pictures are associated
    description: "Description String (maybe this is markdown"
    Form application: "link address"
}

*/
/*
const prj = {
    title: "Android App",
    description: "In this project i made an app about dogs that tells the user about employees dogs. It is written in Kotlin and cleanly uses layouts for nice presentation",
    form: "www.google.com"
  }
*/



const Project = ({prj}) => {

  

  return (
      <div className='starter-template text-center mt-5'>
        <h1>{prj.title}</h1>
        <p className='lead text-capitalize'>{prj.description}</p>
        <p className='lead text-capitalize'>{prj.form}</p>
        <img
        alt="" 
        src={prj.image.default}
        width="300"
        height="300"
        className="d-flex align-items-center"
        />
        
      </div>
  )
}



export default Project
