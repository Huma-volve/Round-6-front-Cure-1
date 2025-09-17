import { useEffect, useState } from "react";
import { Filter, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import CardDoctor from "@/components/common/CardDoctor";
import type { IDoctorDetails, ISpecialist } from "@/types";
import { fetchDoctorsData } from "@/api/doctors/doctors";
import { Loader } from "@/components/common/Loader";
import { fetchSpecialitiesData } from "@/api/specialities/specialities";

const DoctorBooking = () => {
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedConsultationType, setSelectedConsultationType] = useState("");
  const [sortBy, setSortBy] = useState("Most recommended");
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDoctors] = useState<IDoctorDetails[]>([]);
  const [specialties, setSpecialties] = useState<ISpecialist[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const dataDoctor: IDoctorDetails[] = await fetchDoctorsData();
        setDoctors(dataDoctor);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const dataSpecialties: ISpecialist[] = await fetchSpecialitiesData();
        setSpecialties(dataSpecialties);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    loadData();
  }, []);

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties((prev: string[]) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const filteredDoctors = doctors
    .filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((doctor) =>
      selectedSpecialties.length > 0
        ? selectedSpecialties.includes(doctor.specialty_name_en)
        : true
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "Price low to high":
          return +a.price_per_hour - +b.price_per_hour;
        case "Price high to low":
          return +b.price_per_hour - +a.price_per_hour;
        case "Highest rated":
          return b.average_rating - a.average_rating;
        default:
          return 0;
      }
    });

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader size={"xxl"} className="w-10 h-10 animate-spin text-primary" />
      </div>
    );

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleFilter}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
          >
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
        {filterOpen && (
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
                    setSelectedGender(
                      selectedGender === "Female" ? "" : "Female"
                    )
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
        )}

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
                  key={specialty.id}
                  onClick={() => toggleSpecialty(specialty.name_en)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                    selectedSpecialties.includes(specialty.name_en)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {specialty.name_en === "Dentist" && "🦷"}
                  {specialty.name_en === "Cardiologist" && "❤️"}
                  {specialty.name_en === "ENT" && "👂"}
                  {specialty.name_en === "Neurologist" && "🧠"}
                  {specialty.name_en === "General Practitioner" && "👨‍⚕️"}
                  {specialty.name_en === "Ophthalmologist" && "👁️"}
                  {specialty.name_en === "Pulmonologist" && "🫁"}
                  <span className="text-sm">{specialty.name_en}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Doctor Cards Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              !filterOpen ? "xl:grid-cols-3" : ""
            } gap-6 mb-8`}
          >
            {filteredDoctors.map((doctor) => (
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
