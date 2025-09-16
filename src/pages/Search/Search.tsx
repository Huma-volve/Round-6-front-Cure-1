import { useState } from "react";
import { Filter, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

import CardDoctor from "@/components/common/CardDoctor";
import type { IDoctorDetails } from "@/types";

const DoctorBooking = () => {
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedConsultationType, setSelectedConsultationType] = useState("");
  const [sortBy, setSortBy] = useState("Most recommended");
  const [searchTerm, setSearchTerm] = useState("");

  const specialties = [
    "Dentist",
    "Cardiologist",
    "ENT",
    "Neurologist",
    "General Practitioner",
    "Ophthalmologist",
    "Pulmonologist",
  ];

  const doctors: IDoctorDetails[] = [
    {
      doctor_profile_id: 1,
      about: "Experienced orthopedic doctor",
      experience_years: 10,
      price_per_hour: "350",
      user_id: 1,
      name: "Robert Johnson",
      email: "robert.johnson1@example.com",
      phone: "01000000001",
      specialty_id: 1,
      specialty_name_en: "Orthopedic",
      specialty_name_ar: "عظام",
      specialty_description: "Specializes in bones and joints",
      hospital_id: 1,
      hospital_name: "El Nasr Hospital",
      hospital_start_time: "09:30",
      hospital_end_time: "20:00",
      availability_id: 1,
      day: "Sunday",
      start_time: "09:30",
      end_time: "20:00",
    },
    {
      doctor_profile_id: 2,
      about: "Cardiologist with 15 years of experience",
      experience_years: 15,
      price_per_hour: "500",
      user_id: 2,
      name: "Emily Carter",
      email: "emily.carter@example.com",
      phone: "01000000002",
      specialty_id: 2,
      specialty_name_en: "Cardiologist",
      specialty_name_ar: "قلب",
      specialty_description: "Heart and blood vessel specialist",
      hospital_id: 2,
      hospital_name: "City Heart Center",
      hospital_start_time: "10:00",
      hospital_end_time: "18:00",
      availability_id: 2,
      day: "Monday",
      start_time: "10:00",
      end_time: "18:00",
    },
    {
      doctor_profile_id: 3,
      about: "ENT specialist focusing on ear, nose, and throat",
      experience_years: 8,
      price_per_hour: "300",
      user_id: 3,
      name: "Ahmed Hassan",
      email: "ahmed.hassan@example.com",
      phone: "01000000003",
      specialty_id: 3,
      specialty_name_en: "ENT",
      specialty_name_ar: "أنف وأذن وحنجرة",
      specialty_description: "Treats ear, nose, and throat issues",
      hospital_id: 3,
      hospital_name: "Al Salam Hospital",
      hospital_start_time: "08:00",
      hospital_end_time: "16:00",
      availability_id: 3,
      day: "Tuesday",
      start_time: "08:00",
      end_time: "16:00",
    },
    {
      doctor_profile_id: 4,
      about: "Neurologist with focus on brain and nerves",
      experience_years: 12,
      price_per_hour: "600",
      user_id: 4,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      phone: "01000000004",
      specialty_id: 4,
      specialty_name_en: "Neurologist",
      specialty_name_ar: "أعصاب",
      specialty_description: "Specialist in nervous system disorders",
      hospital_id: 4,
      hospital_name: "NeuroCare Clinic",
      hospital_start_time: "11:00",
      hospital_end_time: "19:00",
      availability_id: 4,
      day: "Wednesday",
      start_time: "11:00",
      end_time: "19:00",
    },
    {
      doctor_profile_id: 5,
      about: "General Practitioner with broad experience",
      experience_years: 5,
      price_per_hour: "200",
      user_id: 5,
      name: "Mohamed Ali",
      email: "mohamed.ali@example.com",
      phone: "01000000005",
      specialty_id: 5,
      specialty_name_en: "General Practitioner",
      specialty_name_ar: "ممارس عام",
      specialty_description: "Handles general health checkups",
      hospital_id: 5,
      hospital_name: "Family Health Center",
      hospital_start_time: "09:00",
      hospital_end_time: "17:00",
      availability_id: 5,
      day: "Thursday",
      start_time: "09:00",
      end_time: "17:00",
    },
    {
      doctor_profile_id: 6,
      about: "Ophthalmologist specialized in eye care",
      experience_years: 9,
      price_per_hour: "400",
      user_id: 6,
      name: "Layla Ibrahim",
      email: "layla.ibrahim@example.com",
      phone: "01000000006",
      specialty_id: 6,
      specialty_name_en: "Ophthalmologist",
      specialty_name_ar: "عيون",
      specialty_description: "Treats eye diseases and performs eye surgery",
      hospital_id: 6,
      hospital_name: "Vision Plus Clinic",
      hospital_start_time: "10:00",
      hospital_end_time: "18:00",
      availability_id: 6,
      day: "Friday",
      start_time: "10:00",
      end_time: "18:00",
    },
    {
      doctor_profile_id: 7,
      about: "Pulmonologist specializing in lungs and breathing",
      experience_years: 11,
      price_per_hour: "450",
      user_id: 7,
      name: "Omar Khaled",
      email: "omar.khaled@example.com",
      phone: "01000000007",
      specialty_id: 7,
      specialty_name_en: "Pulmonologist",
      specialty_name_ar: "صدر",
      specialty_description: "Focuses on respiratory system diseases",
      hospital_id: 7,
      hospital_name: "Airways Hospital",
      hospital_start_time: "08:30",
      hospital_end_time: "16:30",
      availability_id: 7,
      day: "Saturday",
      start_time: "08:30",
      end_time: "16:30",
    },
  ];

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties((prev: string[]) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
            <Filter size={16} />
            <span className="text-sm text-gray-600">Filter</span>
          </button>
          <ChevronLeft size={20} className="text-gray-400" />
        </div>

        <div className="flex-1 lg:max-w-md">
          <input
            type="text"
            placeholder="Search doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors lg:ml-4">
          <MapPin size={16} />
          <span className="text-sm text-gray-600">Map</span>
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="xl:w-64 space-y-6">
          {/* Available Date */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Available Date</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Today</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Tomorrow</span>
              </label>
            </div>
          </div>

          {/* Gender */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Gender</h3>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setSelectedGender(selectedGender === "Male" ? "" : "Male")
                }
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  selectedGender === "Male"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
                }`}
              >
                Male
              </button>
              <button
                onClick={() =>
                  setSelectedGender(selectedGender === "Female" ? "" : "Female")
                }
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  selectedGender === "Female"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Consultation Type */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">
              Consultation Type
            </h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedConsultationType === "In clinic"}
                  onChange={() =>
                    setSelectedConsultationType(
                      selectedConsultationType === "In clinic"
                        ? ""
                        : "In clinic"
                    )
                  }
                />
                <span className="ml-2 text-sm text-gray-600">In clinic</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedConsultationType === "Home Visit"}
                  onChange={() =>
                    setSelectedConsultationType(
                      selectedConsultationType === "Home Visit"
                        ? ""
                        : "Home Visit"
                    )
                  }
                />
                <span className="ml-2 text-sm text-gray-600">Home Visit</span>
              </label>
            </div>
          </div>

          {/* Sort */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Sort</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option>Most recommended</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
              <option>Highest rated</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Specialties */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Choose Specialities
            </h2>
            <div className="flex flex-wrap gap-3">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => toggleSpecialty(specialty)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                    selectedSpecialties.includes(specialty)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {specialty === "Dentist" && "🦷"}
                  {specialty === "Cardiologist" && "❤️"}
                  {specialty === "ENT" && "👂"}
                  {specialty === "Neurologist" && "🧠"}
                  {specialty === "General Practitioner" && "👨‍⚕️"}
                  {specialty === "Ophthalmologist" && "👁️"}
                  {specialty === "Pulmonologist" && "🫁"}
                  <span className="text-sm">{specialty}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Doctor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {doctors.map((doctor) => (
              <CardDoctor doctor={doctor} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <span className="text-sm text-gray-600">Next Page</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorBooking;
