import "../../Styles/breadcrumb.css";

const Breadcrumb = ({ heading, image, para }) => {
  var sectionStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <>
      <section className="breadcrumb text-center" style={sectionStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-title">
                <h2>{heading}</h2>
                <p>{para}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
