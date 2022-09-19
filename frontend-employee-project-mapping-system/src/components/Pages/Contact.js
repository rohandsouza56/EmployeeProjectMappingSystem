import React from 'react'

const Contact = () => {
    return (
      <div style={{backgroundColor: "#d3ded6"}} >
      <div className="container-fluid w-50 mt-5 contact-page" >
      <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase">Contact Us &nbsp;<i className="fa fa-paper-plane" style={{color: "green"}}></i></h2><br/>
          
			<p>
                We are devoted to serve you in our best way possible.<br/> If you have any query or issue regarding this Project, feel free to contact us!
                <br/><br/>
                <h6 className="fw-bold mb-2 text-uppercase">Email &nbsp;<i className="fa fa-envelope" aria-hidden="true" style={{color: "green"}}></i></h6>
                <a href="mailto:epms@email.com" style={{color: "black"}}>epms@email.com</a>
                <br/><br/>
                <h6 className="fw-bold mb-2 text-uppercase">Phone &nbsp;<i className="fa fa-phone" aria-hidden="true" style={{color: "green"}}></i></h6>
                +123 116-9990, 98-1122-0009
                <br/><br/><br/>
                <h5 className="fw-bold mb-2 text-uppercase"> Kharghar &nbsp;<i className="fas fa-map-marker-alt" style={{color: "green"}}></i></h5>
                <strong>Employee Project Mapping System (EPMS)</strong><br/>
                 Mumbai<br/>
                Kharghar<br/>
                Mumbai - 456, Maharastra, INDIA<br/>
                Phone: +91-00000000<br/>
                Fax: +91-11-11234345<br/><br/><br/>
            </p>
      </div>
      </div>
      </div>
    )
  }
  
  export default Contact