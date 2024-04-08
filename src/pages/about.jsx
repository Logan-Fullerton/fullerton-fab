function About() {
  return (
    <div className="container">
      <div className="mt-4 mb-4 text-center">
        <h3>Proffesional Welding and CNC services</h3>
        <p>
          Fullerton Fabrication is a father and son team that specializes in
          custom metal fabrication and CNC cutting services for a variety of
          applications. From one off custom signs to full scale fabrication
          projects and everything in between; Fullerton Fab has you covered.
        </p>
      </div>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src\assets\metal pics\image0.jpeg"
              className="d-block w-100 h-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="src\assets\metal pics\image1.jpeg"
              className="d-block w-100 h-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="src\assets\metal pics\image2.jpeg"
              className="d-block w-100 h-75"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container text-center">
        <h1>Contact Us!</h1>
        <ul>
          <li>Phone: 530-867-6581</li>
          <li>Email: fullertonlogan@gmail.com </li>
        </ul>
      </div>
    </div>
  );
}
export default About;
