import axios from "axios";

// const TOKEN = import.meta.env.VITE_TOKEN_DOCTOR;
const TOKEN = JSON.stringify(localStorage.getItem("token"));

// GET USER APPOINTMENTS
export const getUserAppointments = async (filterBy: null | string) => {
    try {
        const response = await axios.get(
            `${
                import.meta.env.VITE_BASE_URL_DOCTOR
            }my-bookings?filter=${filterBy}`,
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
