import type { IDoctorDetails } from "@/types";

export const fetchDoctorsData = async (): Promise<IDoctorDetails[]> => {
  const response = await fetch(
    "https://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 7|SWbACSDKrqnrOpdVEiPPpPMvi5BYToGBDb1UW1uC67c0cf5e",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  return data.data as IDoctorDetails[];
};