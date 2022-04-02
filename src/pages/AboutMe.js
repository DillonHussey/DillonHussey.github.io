import Header from '../components/Header'
import Meta from '../components/Meta'

const AboutMe = () => {
  // page content
  const pageTitle = 'About Dillon'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default AboutMe