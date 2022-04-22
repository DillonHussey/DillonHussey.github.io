const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize'>
        copyright Dillon Hussey &copy; {year}
        <br></br>
        Contact me on LinkedIn!
        
      </footer>
    </>
  )
}

export default Footer
