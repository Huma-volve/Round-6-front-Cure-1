import { useEffect, useRef, useState } from "react";
import { Clock, Star, MapPin } from "lucide-react";
import type { IDoctorDetails } from "@/types";
import { fetchDoctorsData } from "@/api/doctors/doctors";
import MapDoctorCard from "@/components/common/MapDoctorCard";
import imageDo from "../../assets/images/doctorPhoto.jpg";
import { formatTime } from "@/components/common/CardDoctor";

const MapSearch = () => {
  const [doctors, setDoctors] = useState<IDoctorDetails[]>([]);
  const mapRef = useRef<L.Map | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctorDetails | null>(
    null
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        const dataDoctor: IDoctorDetails[] = await fetchDoctorsData();
        setDoctors(dataDoctor);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    loadData();
  }, []);

  const fetchCoordinates = async (address: string) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await res.json();
    if (data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      };
    }
    return null;
  };

  useEffect(() => {
    if (typeof window !== "undefined" && !mapRef.current) {
      // CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
      link.crossOrigin = "";
      document.head.appendChild(link);

      // JS
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
      script.crossOrigin = "";
      script.onload = () => {
        initializeMap();
      };
      document.body.appendChild(script);
    }
  }, []);

  const initializeMap = async () => {
    if ((window as any).L && !mapRef.current) {
      const L = (window as any).L;

      const map = L.map("map").setView([30.0444, 31.2357], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      const doctorIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      for (const doctor of doctors) {
        let coords = { lat: doctor.lat ?? 0, lng: doctor.lng ?? 0 };

        if (!doctor.lat || !doctor.lng) {
          const fetched = await fetchCoordinates(doctor.address ?? "");
          if (fetched) coords = fetched;
        }

        if (coords.lat && coords.lng) {
          L.marker([coords.lat, coords.lng], { icon: doctorIcon })
            .addTo(map)
            .on("click", () => {
              setSelectedDoctor({ ...doctor, ...coords });
              map.setView([coords.lat!, coords.lng!], 15);
            });
        }
      }

      mapRef.current = map;
    }
  };

  const handleSelectDoctor = async (doctor: IDoctorDetails) => {
    let coords = { lat: doctor.lat, lng: doctor.lng };
    if (!coords.lat || !coords.lng) {
      const fetched = await fetchCoordinates(
        doctor.address ? doctor.address : "El Nasr Hospital, Cairo"
      );
      if (fetched) coords = fetched;
    }

    if (coords.lat && coords.lng && mapRef.current) {
      mapRef.current.setView([coords.lat, coords.lng], 15);
    }

    setSelectedDoctor({ ...doctor, ...coords });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div
        className="w-full lg:w-80 xl:w-96 bg-white border-r border-gray-200 flex flex-col shadow-sm
                      h-[40vh] lg:h-full"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              {doctors.length} Doctors Found
            </h2>
            <div className="hidden sm:block w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Doctors List */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          <div className="divide-y divide-gray-100">
            {doctors.map((doctor) => (
              <MapDoctorCard
                key={doctor.user_id}
                doctor={doctor}
                isSelected={selectedDoctor?.user_id === doctor.user_id}
                onSelect={handleSelectDoctor}
              />
            ))}
          </div>

          {doctors.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm">No doctors found in this area</p>
            </div>
          )}
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative bg-gray-100 h-[60vh] lg:h-full">
        <div id="map" className="w-full h-full z-0"></div>

        {/* Selected Doctor Popup */}
        {selectedDoctor && (
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 lg:right-auto lg:max-w-md bg-white rounded-xl shadow-2xl border border-gray-200 backdrop-blur-sm">
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={imageDo}
                    alt={selectedDoctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {selectedDoctor.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {selectedDoctor.specialty_name_en}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="w-4 h-4 relative">
                  <div className="absolute inset-0 w-0.5 h-4 bg-gray-400 rotate-45 left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute inset-0 w-0.5 h-4 bg-gray-400 -rotate-45 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </button>
            </div>

            <div className="p-3 sm:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">
                    {Number(selectedDoctor.average_rating).toFixed(1)}
                  </span>
                  <span className="text-gray-500">Rating</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <div className="flex flex-col sm:flex-row sm:space-x-1">
                    <span className="font-medium">
                      {formatTime(selectedDoctor.start_time)}
                    </span>
                    <span className="hidden sm:inline">-</span>
                    <span className="font-medium">
                      {formatTime(selectedDoctor.end_time)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">$</span>
                  </div>
                  <span className="font-medium">
                    ${selectedDoctor.price_per_hour}
                  </span>
                  <span className="text-gray-500 text-xs">/hour</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-lg shadow-lg p-2 sm:p-3 border border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-gray-600 font-medium">
              Doctor Locations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSearch;
