import './styles.css';

const Contact = () => {

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <div className="contact__content">

        <div className="get_in_touch">
          <h3>Thanks for stopping by! You can contact me using this form or by sending me an email.</h3>
        </div>

        <form id="contactform" action="post" data-netlify="true">

          <label className="contact-label" >Name:</label>
          <input type="text" size="50" placeholder="Your name..." />

          <label className="contact-label" >Email:</label>
          <input type="text" size="50" placeholder="Your email..." />

          <label className="contact-label" >Message:</label>
          <textarea rows="5" cols="50" placeholder="Your message..." ></textarea>

          <div>
            <div data-netlify-recaptcha=""></div>
          </div>

          <input className="form-submit" type="submit" value="SEND" />

        </form>

      </div>
    </div>
  )
}

export default Contact;
