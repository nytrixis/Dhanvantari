import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import { BottomLine } from './design/Hero';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    age: '',
    gender: '',
    role: '',
    bloodGroup: '',
    allergies: '',
    contact: '',
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Registration logic
      // const { name, username, age, gender, role, bloodGroup, allergies, contact, email, password } = formData;
      // if (!name || !username || !age || !gender || !role || !bloodGroup || !allergies || !contact || !email || !password) {
      //   setErrorMessage('Please fill out all fields.');
      //   return;
      // }
      setSuccessMessage('Successful registration!');
      setErrorMessage('');
    } else {
      // Login logic
      const { email, password } = formData;
      if (
        (email === 'ajayapandey2404@gmail.com' && password === '1234') ||
        (email === 'qwerty12@gmail.com' && password === 'abcd')
      ) {
        setSuccessMessage('Successful login!');
        setErrorMessage('');
        navigate('/');
      } else {
        setSuccessMessage('');
        setErrorMessage('Incorrect credentials');
      }
    }
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="auth"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">{isSignUp ? 'Sign Up' : 'Login'}</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {isSignUp
              ? 'Create a new account to access our services.'
              : 'Log in to your account to access our services.'}
          </p>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl">
          <div className="relative z-1 bg-n-8 rounded-[1rem] p-8">
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              {/* Render registration fields if isSignUp is true */}
              {isSignUp && (
                <>
                  {/* Registration fields */}
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-n-1 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="age" className="block text-n-1 font-medium mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your age"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="gender" className="block text-n-1 font-medium mb-2">
                      Gender
                    </label>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your gender"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="role" className="block text-n-1 font-medium mb-2">
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="bloodGroup" className="block text-n-1 font-medium mb-2">
                      Blood Group
                    </label>
                    <input
                      type="text"
                      id="bloodGroup"
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none -focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your blood group"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="allergies" className="block text-n-1 font-medium mb-2">
                      Allergies
                    </label>
                    <input
                      type="text"
                      id="allergies"
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your allergies"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact" className="block text-n-1 font-medium mb-2">
                      Contact
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>
                </>
              )}
              <div className="mb-4">
                <label htmlFor="email" className="block text-n-1 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-n-1 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {isSignUp ? 'Sign Up' : 'Login'}
              </button>
            </form>

            {/* Toggle between Sign Up and Login */}
            <div className="mt-4 text-center">
              <span className="text-n-2">
                {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
              </span>
              <button
                type="button"
                className="text-purple-500 hover:text-purple-600 ml-2"
                onClick={toggleAuthMode}
              >
                {isSignUp ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default AuthPage;



