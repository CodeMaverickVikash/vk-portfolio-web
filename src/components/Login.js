import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiLockClosed, HiEye, HiEyeOff, HiLogin, HiUserAdd } from 'react-icons/hi';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Logo from './Logo';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log('Form submitted:', formData);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Info */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Logo width="60" height="60" />
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Vikash Maskhare
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">Software Engineer Portfolio</p>
                </div>
              </Link>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Welcome to My <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Portfolio</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Join the community to access exclusive content, connect with me, and stay updated with my latest projects and blog posts.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HiUserAdd className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Create Account</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Get access to exclusive features and content</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HiLogin className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Easy Access</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Sign in with email or social accounts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Login/Signup Form */}
          <div className="w-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-700">
              {/* Mobile Logo */}
              <div className="lg:hidden flex justify-center mb-6">
                <Link to="/" className="flex items-center gap-2">
                  <Logo width="50" height="50" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    VM
                  </span>
                </Link>
              </div>

              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {isLogin ? 'Welcome Back!' : 'Create Account'}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {isLogin ? 'Sign in to continue to your account' : 'Sign up to get started'}
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg transition-all duration-200 font-medium">
                  <FaGoogle className="text-lg text-red-500" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg transition-all duration-200 font-medium">
                  <FaGithub className="text-lg" />
                  GitHub
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required={!isLogin}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 pl-11 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200"
                        placeholder="John Doe"
                      />
                      <HiUserAdd className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 pl-11 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200"
                      placeholder="you@example.com"
                    />
                    <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 pl-11 pr-11 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200"
                      placeholder="••••••••"
                    />
                    <HiLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      {showPassword ? <HiEyeOff className="text-xl" /> : <HiEye className="text-xl" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required={!isLogin}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 pl-11 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200"
                        placeholder="••••••••"
                      />
                      <HiLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => alert('Password reset functionality coming soon!')}
                      className="text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {isLogin ? (
                    <>
                      <HiLogin className="text-xl" />
                      Sign In
                    </>
                  ) : (
                    <>
                      <HiUserAdd className="text-xl" />
                      Create Account
                    </>
                  )}
                </button>
              </form>

              {/* Toggle Login/Signup */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={toggleMode}
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>

              {/* Back to Home */}
              <div className="mt-6 text-center">
                <Link
                  to="/"
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
