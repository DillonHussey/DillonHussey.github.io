import Meta from '../components/Meta'


const image= require('../images/DillonHusseyHeadshot.jpeg')

const DillonHussey = () => {const pageTitle = ''

return (
  <div className="row">
    
    <div className='col-md-6'>
      <div className='row'>
        <h1 className='text-left display-1 mt-5 text-secondary'>
        Dillon Hussey
        </h1>
      </div>
      <div className='row'>
        <h3 className='text-left text-muted text-secondary pb-5'>
          Ready to Create
        </h3>
      </div>
      <div className='row'>
      <div style={{lineHeight:"2"}} className="text-secondary"><h2 id="what-is-this-site">What is this site?</h2>
      <p> Check out some of my projects from over the years. It includes projects from classes like Machine Learning,
        Data Science, Databases, and more.</p>

        <p>Some of these projects have code used in class projects so not all code is shareable.</p>
      </div>
      </div>
      <h2><a href='Projects'
        >See the Projects!</a></h2>
    
    </div>
    <div className='col-md-6 text-center mt-5'>
      <img 
      src={image.default}
      alt="profile"
      height='500'
      width='auto'
      class='rounded'
     />
    </div>
    
    <Meta title={pageTitle}/>
    
  </div>
)
}

export default DillonHussey