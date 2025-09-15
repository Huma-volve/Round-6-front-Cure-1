import { Phone, Mail, MapPin } from "lucide-react";
import FacebookImage from "../../assets/images/facebook.png";
import WhatsappImage from "../../assets/images/whatsapp.png";
import YoutubeImage from "../../assets/images/youtube.png";
import LinkedInimage from "../../assets/images/linkedin.png";
import Logo from "../../assets/images/BsHeartPulse.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 text-slate-900">
                  <img src={Logo} alt="logo" />
                </div>
              </div>
              <span className="text-xl font-semibold">Cure</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Cure helps you find trusted doctors, book appointments, and manage
              your health—quickly and easily.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition-colors cursor-pointer">
                <img src={FacebookImage} alt="faceBook" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-110  transition-colors cursor-pointer">
                <img src={WhatsappImage} alt="whatsapp" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition-colors cursor-pointer">
                <img src={YoutubeImage} alt="youtube" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition-colors cursor-pointer">
                <img src={LinkedInimage} alt="linkedIn" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a
                    href="tel:080707555321"
                    className="text-white text-sm hover:underline"
                  >
                    080 707 555-321
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a
                    href="mailto:demo@example.com"
                    className="text-white text-sm hover:underline"
                  >
                    demo@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <a
                    href="https://www.google.com/maps?q=526+Melrose+Street,+Water+Mill,+11976+New+York"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:underline"
                  >
                    526 Melrose Street, Water Mill, 11976 New York
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            ©2024 Techvio - All Right Reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white  transition-colors text-sm">
              Terms & Condition
            </a>
            <span className="text-white">|</span>
            <a href="#" className="text-white  transition-colors text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
