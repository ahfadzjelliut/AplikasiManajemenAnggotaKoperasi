import api from "./api";

export const getMembers = async () => {
    const response = await api.get("/anggota");
    return response.data;
};

export const getMember = async (id) => {
    const response = await api.get(`/anggota/${id}`);
    return response.data;
};

export const createMember = async (data) => {
    const response = await api.post("/anggota", data);
    return response.data;
};

export const updateMember = async (id, data) => {
    const response = await api.put(`/anggota/${id}`, data);
    return response.data;
};

export const deleteMember = async (id) => {
    const response = await api.delete(`/anggota/${id}`);
    return response.data;
};
