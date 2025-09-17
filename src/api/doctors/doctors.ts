import type { IDoctorDetails, IReview } from "@/types";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export const fetchDoctorsData = async (): Promise<IDoctorDetails[]> => {
  const response = await fetch(
    "https://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 7|SWbACSDKrqnrOpdVEiPPpPMvi5BYToGBDb1UW1uC67c0cf5e",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data as IDoctorDetails[];
};

export const doctorReview = async (values: IReview) => {
  try {
    const { id, rating, comment } = values;
    if (!id) throw new Error("Doctor id is required");
    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
    if (!comment?.trim()) {
      throw new Error("Comment is required");
    }
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
    const res = await axios.post(
      `https://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors/${id}/reviews`,
      { comment, rating },
      { headers }
    );

    if (res.status === 200 || res.status === 201) {
      toast.success("Review submitted");
      return true;
    }

    toast.error("Unexpected response from server");
    return false;
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    if (err.response?.status === 401) {
      toast.error("Please log in to submit a review");
    } else {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
    return false;
  }
};
