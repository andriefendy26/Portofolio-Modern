import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!form.name || !form.email || !form.message) {
      alert("Mohon isi semua kolom.");
      return;
    }

    // Simulasi submit (bisa diganti dengan fetch/axios)
    console.log("Form submitted:", form);
    alert("Pesan berhasil dikirim!");

    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full pt-32 px-4 py-16 bg-gray-100">
        <h2 className=" edu-vic-wa-nt-hand text-6xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Nama</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Pesan</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Tulis pesan Anda di sini..."
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
