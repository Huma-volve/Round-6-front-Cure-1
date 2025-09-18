import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import CardDoctor from "@/components/common/CardDoctor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Loader } from "@/components/common/Loader";

export default function TopRated() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleGetDoctors = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}doctors`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setDoctors(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetDoctors();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
  };

  return (
    <>
      <div className="flex md:flex-row items-center justify-center relative py-10">
        <div>
          <h2 className="text-2xl font-semibold">
            Top-Rated Doctors Chosen by Patients
          </h2>
          <p className="w-full md:w-1/2 my-4 text-secondary-300">
            Explore our highest-rated doctors, trusted by real patients for
            their expertise, care, and service. Book with confidence today.
          </p>
        </div>
        <div>
          <Button
            onClick={() => navigate("/search")}
            className="hidden md:block bg-white text-primary border border-primary hover:bg-primary hover:text-white"
          >
            View all
          </Button>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader size="xxl" />
        </div>
      ) : (
        <Slider {...settings}>
          {doctors.map((doctor, index) => (
            <div key={index} className="px-4">
              <CardDoctor doctor={doctor} isFavourite={false} />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
}
