import './styles.css';

const Contact = () => {

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <div className="contact__content">

        <div className="get_in_touch">
          <h3>Thanks for stopping by! You can contact me using this form or by sending me an email.</h3>
        </div>

        <form name="contact v1" method="post" data-netlify="true" onSubmit="submit">

          <input type="hidden" name="form-name" value="contact v1" />

          <label className="contact-label" >Name:
            <input type="text" name="name" size="50" placeholder="Your name..." />
          </label>

          <label className="contact-label" >Email:
            <input type="email" name="email" size="50" placeholder="Your email..." />
          </label>

          <label className="contact-label" >Message:
            <textarea name="message" rows="5" cols="50" placeholder="Your message..." ></textarea>
          </label>

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
