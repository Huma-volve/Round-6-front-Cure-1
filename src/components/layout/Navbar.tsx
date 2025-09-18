import { useState } from "react";
import {
  Search,
  Menu,
  Heart,
  Bell,
  Home,
  Calendar,
  User,
  CreditCard,
  Settings,
  Shield,
  LogOut,
  ChevronRight,
} from "lucide-react";
import CureIcon from "../common/CureIcon";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white hidden md:flex shadow-sm px-4 py-3  items-center justify-between relative z-20 ">
        {/* Logo/Menu */}
        <div className="flex items-center ml-10">
          <div className="w-8 h-8  rounded-lg flex items-center justify-center">
            <CureIcon color="primary" />
          </div>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search doctors, speciality, clinics"
              className="w-full pl-10 pr-4 py-2 bg-[#F5F6F7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 mr-10">
          {/* Mobile Menu */}
          <button className="md:hidden p-2">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          {/* Desktop Icons */}
          <button
            type="button"
            className="hidden md:block p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => navigate("/favourite")}
          >
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
          <button
            type="button"
            className="hidden md:block p-2 hover:bg-gray-100 rounded-lg relative cursor-pointer"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          {/* Profile Photo */}
          <button onClick={toggleProfile} className="relative">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        </div>
      </header>

      {/* Welcome Section - Mobile */}
      <div className="md:hidden bg-white px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm md:text-xl font-semibold text-gray-900">
                Welcome back, Seif
              </h2>
              <p className="text-sm text-gray-500 flex items-center">
                <span>📍 129 El-Nasr Street, Cairo</span>
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
          </div>
        </div>
        <div className="flex flex-1 max-w-2xl mx-8 mt-7">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search doctors, speciality, clinics"
              className="w-full pl-10 pr-4 py-2 bg-[#F5F6F7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {isProfileOpen && (
        <>
          <div
            className="fixed inset-0  bg-opacity-50 z-30"
            onClick={closeProfile}
          ></div>
          <div className="fixed top-16 right-4 w-80 bg-[#F5F6F7] rounded-lg shadow-xl z-40 border">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Seif Mohamed</h3>
                  <p className="text-sm text-gray-500">
                    📍 129 El-Nasr Street, Cairo
                  </p>
                </div>
                <button className="p-1 cursor-pointer hover:bg-gray-100 rounded">
                  <Settings className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-1">
                <button className="w-full cursor-pointer flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  <span className="flex-1 text-gray-700">Payment Method</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>

                <button className="w-full flex cursor-pointer items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="flex-1 text-gray-700">Settings</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>

                <button className="w-full cursor-pointer flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span className="flex-1 text-gray-700">Privacy Policy</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>

                <button className="w-full flex cursor-pointer items-center space-x-3 p-3 text-left hover:bg-red-50 rounded-lg">
                  <LogOut className="w-5 h-5 text-red-600" />
                  <span className="flex-1 text-red-600">Log out</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-4 py-2 md:hidden z-50">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "home" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs">Home</span>
          </button>

          <button
            onClick={() => setActiveTab("booking")}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "booking" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <Calendar className="w-5 h-5 mb-1" />
            <span className="text-xs">Booking</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "profile" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <User className="w-5 h-5 mb-1" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
