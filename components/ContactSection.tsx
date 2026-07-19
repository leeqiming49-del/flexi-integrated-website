export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-intro"><h2>Let’s Talk</h2><p>Ready to build your next space?<br />We’d love to hear from you.</p><a className="arrow-link contact-action" href="mailto:myflexi@gmail.com">Contact Us</a></div>
      <div className="contact-item"><small>Phone</small><a href="tel:+60123721501">012-372 1501</a></div>
      <div className="contact-item"><small>Email</small><a href="mailto:myflexi@gmail.com">myflexi@gmail.com</a></div>
      <div className="contact-item"><small>Head Office</small><address>6, Jalan TPP 16,<br />Taman Perindustrian Putra,<br />47130 Puchong,<br />Selangor</address></div>
    </section>
  );
}
