import React from 'react'
import '../../Styles/banner.css'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-text">
                <h2>Exquisite Designer Earrings</h2>
                <h3>New Collection</h3>
                <button onClick={() => navigate("/diamond")}>See Collections</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
