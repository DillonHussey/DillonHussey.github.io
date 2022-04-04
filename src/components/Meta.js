import { Helmet } from 'react-helmet'

const Meta = ({ title }) => {
  return (
   
    <Helmet className="text-left">
      <title>{title}</title>
    </Helmet>
    
  )
}

export default Meta
