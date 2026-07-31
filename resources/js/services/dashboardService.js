import api from "./api";

export const getDashboard = async (id) => {
    const response = await api.get(`/dashboard/${id}`);
    return response.data;
};
