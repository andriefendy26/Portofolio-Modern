import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect } from "react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xrgnzzgy");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowConfetti(true);
      // Auto hide confetti after 3 seconds
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {showConfetti && (
            <>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`,
                  }}
                />
              ))}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i + 20}
                  className="absolute w-1 h-1 bg-gray-600 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </>
          )}
        </div>

        {/* Success Content */}
        <div className="text-center z-10 animate-fadeIn">
          {/* Animated Checkmark */}
          <div className="relative mx-auto mb-8 w-24 h-24">
            <div className="absolute inset-0 bg-gray-100 rounded-full animate-pulse"></div>
            <div className="relative flex items-center justify-center w-full h-full bg-gray-800 rounded-full shadow-lg transform transition-all duration-500 hover:scale-110">
              <svg
                className="w-12 h-12 text-white animate-checkmark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 animate-slideInUp">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Pesan Terkirim! ✨
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 animate-slideInUp animation-delay-200">
            Terima kasih <span className="font-semibold text-gray-800">{form.name}</span> telah menghubungi kami!
          </p>

          {/* Additional Info */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-gray-200 animate-slideInUp animation-delay-400">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-gray-700">Kami akan membalas dalam 24 jam</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Pesan Anda sudah kami terima</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp animation-delay-600">
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-transparent border-2 border-gray-400 text-gray-700 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50 hover:border-gray-600"
            >
              Kirim Pesan Lagi
            </button>
            <button
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-transparent border-2 border-gray-400 text-gray-700 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50 hover:border-gray-600"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-gray-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-gray-500 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-gray-600 rounded-full animate-float animation-delay-2000"></div>
      </div>
    );
  }

  return (
    <section id="contact" className="w-full pt-32 px-4 py-16">
      <h2 className="edu-vic-wa-nt-hand text-5xl font-bold mb-6 text-center text-gray-800">
        Contact Me
      </h2>
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6 roboto-mono">
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
            <ValidationError
              prefix="Name"
              field="full-name"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="email@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Pesan
            </label>
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
              disabled={state.submitting}
              className="cursor-pointer p-2 px-5 transition-all duration-300 hover:shadow-2xl bg-white border-black border-2 rounded-lg hover:px-10 disabled:opacity-50"
            >
              {state.submitting ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}