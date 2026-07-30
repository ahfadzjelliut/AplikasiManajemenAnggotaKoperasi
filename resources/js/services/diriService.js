import api from "./api";

export const getDiri = async (id) => {
    const response = await api.get(`/diri/${id}`);
    return response.data;
};

export const getTim = async (id) => {
    const response = await api.get(`/diri/tim/${id}`);
    return response.data;
};

export const updateDiri = async (id,data) => {
    const response = await api.put(`/diri/${id}`, data);
    return response.data;

};
