export const Image = ({ title,  smallImage ,url}) => {

  const redirect = () => {
    window.open(url, '_blank' );

    return null;
  }
  return (
    <div
        onClick={() =>{redirect()}}
        className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
              src={smallImage}
              className='img-responsive'
              alt={title}
          />{' '}
      </div>
    </div>
  )
}