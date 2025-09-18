import type { IAppointmentValues } from "@/types";
import axios from "axios";

// GET DOCTOR DETAILS
export const getDoctorDetails = async (id: string) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL_DOCTOR}doctors/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${
                        import.meta.env.VITE_TOKEN_DOCTOR
                    }`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// GET DOCTOR REVIEWS
export const getDoctorReviews = async (link: string) => {
    try {
        const response = await axios.get(link, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_TOKEN_DOCTOR}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// GET DOCTOR AVAILABLE SLOTS
export const getAvailableSlots = async (id: string) => {
    try {
        const response = await axios.get(
            `${
                import.meta.env.VITE_BASE_URL_DOCTOR
            }doctors/${id}/available-slots`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${
                        import.meta.env.VITE_TOKEN_DOCTOR
                    }`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// POST DOCTOR APPOINTMENT
export const createDoctorAppointment = async (data: IAppointmentValues) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL_DOCTOR}appointments`,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${
                        import.meta.env.VITE_TOKEN_DOCTOR
                    }`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
