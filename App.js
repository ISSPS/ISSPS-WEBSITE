import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <header style={{ backgroundColor: "#003366", color: "#fff", padding: "1rem" }}>
        <h1>International Sai Shankar Public School</h1>
        <p>Behind Scheme No. 36 A, Bholiyawas Road, Neemuch, MP – 458441</p>
        <p>Affiliation No: 1030623 | School Code: 50593</p>
        <p>Email: inssps.neemuch@gmail.com</p>
      </header>

      <main style={{ marginTop: "2rem" }}>
        <section>
          <h2>Vision & Mission</h2>
          <p>To create success-oriented, entrepreneur-minded students with a strong base in Hindi and English, governed by Bhartiya Vedic Science and Culture.</p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2>Admissions Open</h2>
          <p>Admission Open for Nursery to Class 12 (CBSE, English Medium). Scientific learning methods, dedicated faculty, and CRPF family concessions available.</p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={form.name} placeholder="Your Name" onChange={handleChange} required style={{ display: "block", marginBottom: "1rem" }} />
            <input type="email" name="email" value={form.email} placeholder="Your Email" onChange={handleChange} required style={{ display: "block", marginBottom: "1rem" }} />
            <textarea name="message" value={form.message} placeholder="Your Message" onChange={handleChange} required style={{ display: "block", marginBottom: "1rem", width: "100%", height: "100px" }} />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer style={{ backgroundColor: "#003366", color: "#fff", textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
        &copy; {new Date().getFullYear()} ISS Public School, Neemuch. All rights reserved.
      </footer>
    </div>
  );
}

export default App;