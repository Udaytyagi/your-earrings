import '../../Styles/brands.css'

const Brands = () => {
    return (
        <>
            <section className="brands">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="brands-heading">
                                <h2>Popular Brands</h2>
                                <p>Choose Best With Our Favorite Brands</p>
                            </div>
                        </div>
                        <div className='col-sm-3 col-6 d-flex align-items-center justify-content-center mt-2 mt-sm-0'>
                            <img className='img-fluid' src="/images/logo.png" alt="" />
                        </div>
                        <div className='col-sm-3  col-6 d-flex align-items-center justify-content-center mt-2 mt-sm-0'>
                            <img className='img-fluid' src="/images/logo.png" alt="" />
                        </div>
                        <div className='col-sm-3  col-6 d-flex align-items-center justify-content-center mt-2 mt-sm-0'>
                            <img className='img-fluid' src="/images/logo.png" alt="" />
                        </div>
                        <div className='col-sm-3  col-6 d-flex align-items-center justify-content-center mt-2 mt-sm-0'>
                            <img className='img-fluid' src="/images/logo.png" alt="" />
                        </div>
                        {/* <div className='col-sm-3 col-6 d-flex align-items-center justify-content-center mt-2 mt-sm-0'>
                            <img className='img-fluid' src="/images/brands.png" alt="" />
                        </div> */}

                        {/*div className='col-sm-3 col-6 d-flex align-items-center justify-content-center mt-2 mt-sm-0'>
                            <img className='img-fluid' src="/images/brands.png" alt="" />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brands
