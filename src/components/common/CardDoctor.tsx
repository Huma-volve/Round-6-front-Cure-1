import { Star, Clock } from "lucide-react";
import type { IDoctorDetails } from "../../types";
import doctorPhoto from "../../assets/images/doctorPhoto.jpg";

type DoctorCardProps = {
  doctor: IDoctorDetails;
  onBook?: (id: number) => void;
};

function CardDoctor({ doctor }: DoctorCardProps) {
  return (
    <div
      key={doctor.doctor_profile_id}
      className="bg-white m-w-[84%] rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4 mb-4">
        <img
          src={doctorPhoto}
          alt={doctor.name}
          className="w-[97px] h-[88px] rounded-[10px] bg-gray-200 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">{doctor.name}</h3>
          <p className="text-sm text-gray-600">
            {doctor.specialty_name_en} | {doctor.hospital_name}
          </p>
          <div className="flex gap-14 items-center mt-2">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">
                {doctor.experience_years} yrs
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-gray-400" />
              <span className="text-sm text-black">
                {doctor.start_time} - {doctor.end_time}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-base text-black">
          Price<span className="text-sm text-gray-400">/hour</span>
        </span>
        <span className="text-lg font-semibold text-orange-500">
          ${doctor.price_per_hour}
        </span>
      </div>

      <button
        type="button"
        className="w-full text-white cursor-pointer bg-primary py-2 px-4 rounded-lg hover:bg-primary-100 transition-colors font-medium"
      >
        Book appointment
      </button>
    </div>
  );
}

export default CardDoctor;
