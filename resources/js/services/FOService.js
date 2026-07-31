import api from "./api";


export const getFOs = async (search="") => {
    const response = await api.get("/fo", {
        params: {
            search,
        },
    });
    return response.data;
};

export const getFO = async (id) => {
    const response = await api.get(`/fo/${id}`);
    return response.data;
};

export const getAnggotaFO = async (search="",id) => {
    const response = await api.get(`/fo/anggota/${id}`, {
        params: {
            search,
        },
    });
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
