
import React from 'react'

export default function GoogleMap() {
  return (
    <>
      <section className="google_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.470891146289!2d-79.28930072346395!3d43.78384104397098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d18d63bea00b%3A0x3a0b533f99d5637c!2s4030%20Sheppard%20Ave%20E%20%23203A%2C%20Scarborough%2C%20ON%20M1S%201S6%2C%20Canada!5e0!3m2!1sen!2slk!4v1733205515706!5m2!1sen!2slk" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}