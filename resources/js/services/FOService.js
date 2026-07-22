import api from "./api";


export const getFOs = async () => {
    const response = await api.get("/fo");
    return response.data;
};

export const getFO = async (id) => {
    const response = await api.get(`/fo/${id}`);
    return response.data;
};

export const createFO = async (data) => {
    const response = await api.post("/fo", data);
    return response.data;
};

export const updateFO = async (id, data) => {
    const response = await api.put(`/fo/${id}`, data);
    return response.data;
};


export const deleteFO = async (id) => {
    const response = await api.delete(`/fo/${id}`);
    return response.data;
};
