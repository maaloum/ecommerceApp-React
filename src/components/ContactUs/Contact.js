import React from 'react'

export default function Contact() {
  return (
    <>
<section className="mb-5">

<h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>

<p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. </p>

<div className="row ms-5 pe-5">
    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="row">

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" className="form-control"/>
                        <label for="name" className="">Your name</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="email" name="email" className="form-control"/>
                        <label for="email" className="">Your email</label>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control"/>
                        <label for="subject" className="">Subject</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>

        </form>

        <div className="text-center text-md-left">
            <a href = "/" className="btn btn-outline-info">Send</a>
        </div>
        <div className="status"></div>
    </div>
    <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
            <li><i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>Ain Talih, Nouakchoutt, Mauritania</p>
            </li>

            <li><i className="fa fa-phone" aria-hidden="true"></i>
                <p>+ 222 36 30 33 37</p>
            </li>

            <li><i className="fa fa-envelope-o" aria-hidden="true"></i>
                <p>maaloumali1@gmail.com.com</p>
            </li>
        </ul>
    </div>

</div>

</section>
    
    </>
  )
}
