import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = localStorage.getItem("token");

export const handleGetFavorites = async () => {
  try {
    const res = await axios.get(`${BASE_URL}favourites/doctors`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    if (res.status === 200) {
      toast.success("Favourites fetched successfully");
      return res.data;
    }
  } catch (error) {
    console.error("Get favourites error:", error);
    toast.error("Failed to fetch favourites");
  }
};

export const handleAddFavorite = async (doctorId: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}favourites/doctors/${doctorId}`,
      {},
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    if (res.status === 201) {
      toast.success("Doctor added to favourites");
      return true;
    }
  } catch (error) {
    console.error("Add favorite error:", error);
    toast.error("Failed to add doctor to favourites");
  }
};

export const handleRemoveFavorite = async (doctorId: string) => {
  try {
    const res = await axios.delete(
      `${BASE_URL}favourites/doctors/${doctorId}`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    if (res.status === 200) {
      toast.success("Doctor removed from favourites");
      return true;
    }
  } catch (error) {
    console.error("Remove favorite error:", error);
    toast.error("Failed to remove doctor from favourites");
  }
};
