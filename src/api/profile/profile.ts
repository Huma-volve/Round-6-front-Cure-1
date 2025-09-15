// profile.ts
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = localStorage.getItem("token") || import.meta.env.VITE_TOKEN;

export const getProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status === 200) {
      toast.success("Profile fetched successfully");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch profile");
  }
};
