import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Clock functionality (same as SignIn.js)
  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Create watch ticks
    const watchTick = document.getElementById("watch-tick");
    if (watchTick && !watchTick.hasChildNodes()) {
      for (let i = 0; i < 60; i++) {
        const tick = document.createElement("div");
        tick.className = i % 5 === 0 ? "tick tick-hour" : "tick";
        tick.style.transform = `rotate(${i * 6}deg)`;
        watchTick.appendChild(tick);
      }
    }

    return () => clearInterval(interval);
  }, []);

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const timeElement = document.getElementById("watch-time");
    const secondsElement = document.getElementById("watch-seconds");
    const dateElement = document.getElementById("watch-date");
    const secondHand = document.getElementById("second-hand");

    if (timeElement && secondsElement && dateElement && secondHand) {
      timeElement.textContent = `${hours}:${minutes}`;
      secondsElement.textContent = seconds;

      const options = { weekday: "long", month: "short", day: "numeric" };
      const dateStr = now.toLocaleDateString("en-US", options);
      dateElement.textContent = dateStr;

      const secondsDegrees = (seconds / 60) * 360;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      valid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // Add your sign-up logic here (API call, etc.)
      setTimeout(() => {
        setIsLoading(false);
        alert('Registration successful!');
      }, 2000);
    } else {
      setIsLoading(false);
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gradient"></div>
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
      
      <div className="goback">
        <a href="/landing_page/SignIn"><button>Go Back</button></a>
      </div>
        
      <div className="login-container d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row g-0 align-items-center">
            
            <div className="col-lg-6 d-none d-lg-block">
              <div className="left-content fade-in-left">
                <div className="text-center mb-4">
                  <h1 className="brand-title fade-in">InfraVision AI</h1>
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                    <div style={{ height: "1px", width: "40px", backgroundColor: "rgba(212, 175, 55, 0.5)" }}></div>
                    <p className="brand-tagline m-0 fade-in delay-1">Safe. Detect. Prevent</p>
                    <div style={{ height: "1px", width: "40px", backgroundColor: "rgba(212, 175, 55, 0.5)" }}></div>
                  </div>
                  <p className="text-white mb-4 fade-in delay-2" style={{ maxWidth: "400px", margin: "0 auto" }}>
                  InfraVision AI harnesses the power of cutting-edge technology to revolutionize infrastructure
                  </p>
                </div>

                <div className="watch-display fade-in delay-3">
                  <div className="watch-circle">
                    <div className="watch-tick" id="watch-tick"></div>
                    <div className="watch-inner-circle"></div>
                    <div className="watch-center-circle">
                      <div className="watch-time" id="watch-time">12:00</div>
                      <div className="watch-seconds" id="watch-seconds">00</div>
                      <div className="watch-date" id="watch-date">Monday, Jan 1</div>
                    </div>
                    <div className="watch-hand hand-second" id="second-hand"></div>
                  </div>
                </div>

                <div className="brand-values fade-in delay-4">
                  <div className="brand-value">
                    <div className="value-circle">01</div>
                    <div className="value-text">Safee</div>
                  </div>
                  <div className="brand-value">
                    <div className="value-circle">02</div>
                    <div className="value-text">ManMade</div>
                  </div>
                  <div className="brand-value">
                    <div className="value-circle">03</div>
                    <div className="value-text">Disaster</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Sign Up form */}
            <div className="col-lg-6">
              <div className="login-card p-4 p-lg-5 fade-in-right">
                <div className="login-header">
                  <h2 className="mb-2">Create Account</h2>
                  <p className="text-white mb-0">
                    Join the InfraVision community
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="fade-in-up delay-1" noValidate>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">
                      <FaUser className="me-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name && 'is-invalid'}`}
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      <FaEnvelope className="me-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email && 'is-invalid'}`}
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      <FaLock className="me-2" />
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${errors.password && 'is-invalid'}`}
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        required
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="btn position-absolute end-0 top-50 translate-middle-y text-muted border-0 bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label">
                      <FaLock className="me-2" />
                      Confirm Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className={`form-control ${errors.confirmPassword && 'is-invalid'}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="••••••••"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="btn position-absolute end-0 top-50 translate-middle-y text-muted border-0 bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">{errors.confirmPassword}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold w-100 mb-3"
                    disabled={isLoading}
                    onClick={() => navigate('/landing_page/Solution/ManMade/ManPage')}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                          
                        ></span>
                        Creating Account...
                        
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </form>

                

                
                <div className="signuplink fade-in-up delay-4">
                  Already have an account? <a href="/landing_page/SignIn">Sign In</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Include the same CSS styles as in SignIn.js */}
      <style jsx global>{`
        :root {
          --gold: #d4af37;
          --gold-light: rgba(231, 181, 18, 0.2);
          --dark: #121212;
          --dark-light: #fff;
          --gray-dark: #fff;
          --gray: #fff;
          --white: #fff;
        }

        body {
          font-family: "Poppins", sans-serif;
          background-color: var(--dark);
          color: var(--white);
          height: 100vh;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .goback {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 100;
        }

        .goback a {
          text-decoration: none;
          color: #ffc107;
        }

        .goback button {
          font-size: 17px;
          padding: 10px 20px;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 5px;
          color: #ffc107;
          border: 1px solid rgba(255, 193, 7, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .goback button:hover {
          background-color: #ffc107;
          color: #000;
        }
        
        .bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(20, 20, 20, 0.9) 100%
          );
          z-index: -1;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          z-index: -1;
        }

        .bg-circle-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.1) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          top: -200px;
          right: -200px;
        }

        .bg-circle-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.05) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          bottom: -150px;
          left: -150px;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Playfair Display", serif;
        }

        .brand-title {
          font-size: 2.5rem;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .brand-tagline {
          font-size: 0.9rem;
          color: var(--gray);
          font-style: italic;
          letter-spacing: 1px;
        }

        .login-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          height: 100vh;
        }

        .login-card {
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .login-header {
          text-align: center;
          padding: 2rem 1rem;
        }

        .login-logo {
          width: 80px;
          height: 80px;
          background-color: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .login-logo img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .form-control {
          background-color: rgba(30, 30, 30, 0.7);
          border: 1px solid var(--gray-dark);
          color: var(--white);
          padding: 0.8rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          background-color: rgba(40, 40, 40, 0.7);
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
          color: var(--white);
        }

        .form-label {
          color: #ccc;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }

        .form-label i {
          color: var(--gold);
          margin-right: 0.5rem;
          font-size: 0.8rem;
        }

        .btn-gold {
          background-color: var(--gold);
          color: var(--dark);
          border: none;
          font-weight: 500;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-gold:hover {
          background-color: #c9a633;
          color: var(--dark);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        .btn-gold:active {
          transform: translateY(0);
        }

        .btn-outline {
          background-color: transparent;
          border: 1px solid var(--gray-dark);
          color: var(--gray);
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          border-color: var(--gray);
          color: var(--white);
        }

        .social-login {
          display: flex;
          gap: 1rem;
        }

        .social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-facebook {
          background-color: rgba(59, 89, 152, 0.2);
          color: #4267b2;
          border: 1px solid rgba(59, 89, 152, 0.3);
        }

        .btn-facebook:hover {
          background-color: rgba(59, 89, 152, 0.3);
        }

        .btn-google {
          background-color: rgba(219, 68, 55, 0.2);
          color: #db4437;
          border: 1px solid rgba(219, 68, 55, 0.3);
        }

        .btn-google:hover {
          background-color: rgba(219, 68, 55, 0.3);
        }

        .divider {
          display: flex;
          align-items: center;
          color: var(--gray);
          font-size: 0.8rem;
          margin: 1.5rem 0;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background-color: var(--gray-dark);
        }

        .divider span {
          padding: 0 1rem;
        }

        .form-check-input {
          background-color: var(--gray-dark);
          border-color: var(--gray);
        }

        .form-control::placeholder {
          color: gray;
          opacity: 1;
        }

        .form-check-input:checked {
          background-color: var(--gold);
          border-color: var(--gold);
        }

        .form-check-label {
          color: var(--gray);
          font-size: 0.9rem;
        }

        .forgot-password {
          color: var(--gray);
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .forgot-password:hover {
          color: var(--gold);
        }

        .signup-link {
          color: var(--gold);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .signup-link:hover {
          text-decoration: underline;
        }

        .watch-display {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .watch-circle {
          position: relative;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.8);
          border: 2px solid rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .watch-inner-circle {
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .watch-center-circle {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .watch-time {
          font-family: "Playfair Display", serif;
          font-size: 2.5rem;
          color: var(--gold);
          margin-bottom: 0.5rem;
        }

        .watch-seconds {
          font-family: "Playfair Display", serif;
          font-size: 1.2rem;
          color: rgba(212, 175, 55, 0.7);
          margin-bottom: 0.5rem;
        }

        .watch-date {
          font-size: 0.8rem;
          color: rgba(212, 175, 55, 0.7);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .watch-tick {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
        }

        .tick {
          position: absolute;
          width: 2px;
          height: 10px;
          background-color: rgba(212, 175, 55, 0.3);
          left: 50%;
          margin-left: -1px;
          transform-origin: 1px 140px;
        }

        .tick-hour {
          height: 15px;
          width: 3px;
          background-color: rgba(212, 175, 55, 0.5);
        }

        .watch-hand {
          position: absolute;
          left: 50%;
          bottom: 50%;
          transform-origin: 50% 100%;
          z-index: 10;
        }

        .hand-second {
          width: 1px;
          height: 120px;
          background-color: var(--gold);
          margin-left: -0.5px;
        }

        .brand-values {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .brand-value {
          text-align: center;
        }

        .value-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.5rem;
          color: var(--gold);
          font-family: "Playfair Display", serif;
          transition: all 0.3s ease;
        }

        .brand-value:hover .value-circle {
          transform: translateY(-5px);
          border-color: rgba(212, 175, 55, 0.5);
        }

        .value-text {
          font-size: 0.8rem;
          color: var(--gray);
        }

        .left-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Animation classes */
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-20px);
          animation: fadeInLeft 0.8s forwards;
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(20px);
          animation: fadeInRight 0.8s forwards;
        }

        .signuplink {
            text-align: center;
            margin-top: 15px;
            color: #ffffff;
            font-size: 1rem; 
          }

          .signuplink a {
            color: #ffcc00;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
          }

          .signuplink a:hover {
            color: #ffd966;
          }

        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        .delay-3 {
          animation-delay: 0.6s;
        }

        .delay-4 {
          animation-delay: 0.8s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        @keyframes rotateSecond {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 991.98px) {
          .login-container {
            padding: 1rem;
          }

          .brand-values {
            gap: 1rem;
          }

          .value-circle {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 767.98px) {
          .login-card {
            margin-bottom: 2rem;
          }

          .watch-circle {
            width: 220px;
            height: 220px;
          }

          .watch-inner-circle {
            width: 190px;
            height: 190px;
          }

          .watch-center-circle {
            width: 160px;
            height: 160px;
          }

          .watch-time {
            font-size: 2rem;
          }

          .tick {
            transform-origin: 1px 110px;
          }

          .hand-second {
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default SignUp;