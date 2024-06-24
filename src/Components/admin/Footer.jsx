import React from 'react';

function Footer() {
  return (
    <footer className="footer p-3 mt-5 mt-5 ">
      <div className="container text-center">
        <div className="row justify-content-center text-left">
        <div className="col-lg-4 d-flex flex-column justify-content-end">
  <h3 className=" mb-3">Contact Us</h3> {/* Added text-center class */}
  <div style={{ textAlign: 'left' }}> {/* Added inline style */}
    <p>123 Clinic Street, City, Country</p>
    <p>Phone: +123 456 7890</p>
    <p>Email: info@soundcareclinic.com</p>
  </div>
</div>

<div className="col-lg-4 d-flex flex-column justify-content-end">
  <h3 className=" mb-3">Opening Hours</h3> {/* Added text-center class */}
  <div style={{ textAlign: 'left' }}> {/* Added inline style */}
    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
    <p>Saturday: 9:00 AM - 2:00 PM</p>
    <p>Sunday: Closed</p>
  </div>
</div>

          <div className="col-lg-4 text-left d-flex  flex-column justify-content-end"> {/* Added text-left class */}
            <h3 className="mb-3">Follow Us</h3>
            <ul className="social-icons list-unstyled" style={{ color: '#20B6A3' }}>
              <li><a href="#" className="text-decoration-none"><i className="fab fa-facebook-f fs-5"></i></a></li>
              <li><a href="#" className="text-decoration-none"><i className="fab fa-twitter fs-5"></i></a></li>
              <li><a href="#" className="text-decoration-none"><i className="fab fa-instagram fs-5"></i></a></li>
              <li><a href="#" className="text-decoration-none"><i className="fab fa-linkedin fs-5"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-left"> {/* Added text-left class */}
            <p>&copy; 2024 Sound Care Clinic. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
