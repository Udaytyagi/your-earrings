import '../../Styles/calltoaction.css'

const CallToAction = ({ products }) => {
  return (
    <>
      <section className="calltoaction">
        <div className="container">
          <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-5">
              <div className="calltoaction-text text-center">
                <h2>{products?.heading_text}</h2>
                <p>{products?.body_text}</p>
                <button><a href={products?.href_url}>{products?.button_text}</a></button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default CallToAction
