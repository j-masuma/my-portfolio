import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact me</h2>
      <form action="submit_form.php" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required /><br /><br />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
