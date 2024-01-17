import React from 'react';

const ContactSection = () => {
  return (
    <div id='contact'>
    <section style={{ backgroundColor: '#6e6b60', padding: '40px 0', textAlign: 'center' }}>
      <h2 className='text-4xl font-bold text-pink-900'>Contact Us</h2>
      <p style={{ color: '#40030c', marginBottom: '30px' }}>
        Have questions or need assistance? Contact us using the form below.
      </p>
      <form style={{color:'#ba182e' ,maxWidth: '400px', margin: '0 auto' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '10px', marginBottom: '20px' }}></textarea>

        <button type="submit" style={{ background: '#2b0000', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </section>
    </div>

  );
};

export default ContactSection;
