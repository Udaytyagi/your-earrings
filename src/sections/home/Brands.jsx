import '../../Styles/brands.css'

const Brands = () => {
  return (
    <>
        <section className="brands">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="brands-heading">
                        <h2>Popular Brands</h2>
                        <p>Choose Best With Our Favorite Brands</p>
                        </div>
                        <div className="brands-logo d-flex">
                            <img className='img-fluid' src="/images/logo.png" alt="" />
                            <img className='img-fluid' src="/images/brands.png" alt="" />
                            <img className='img-fluid' src="/images/logo.png" alt="" />
                            <img className='img-fluid' src="/images/brands.png" alt="" />
                            <img className='img-fluid' src="/images/logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Brands
