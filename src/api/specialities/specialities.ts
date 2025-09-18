import axios from "axios";

const TOKEN = import.meta.env.VITE_TOKEN_DOCTOR;
// const TOKEN = localStorage.getItem("token");

// GET SPECIALITY
export const getSpeciality = async (id: number) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL_DOCTOR}specialities/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${TOKEN}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
