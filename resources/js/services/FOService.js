// resources/js/services/foService.js

import api from "./api";

/**
 * Ambil semua data FO
 */
export const getFOs = async () => {
    const response = await api.get("/fo");
    return response.data;
};

/**
 * Ambil satu data FO berdasarkan ID
 */
export const getFO = async (id) => {
    const response = await api.get(`/fo/${id}`);
    return response.data;
};

/**
 * Tambah data FO
 * @param {Object} data
 */
export const createFO = async (data) => {
    const response = await api.post("/fo", data);
    return response.data;
};

/**
 * Update data FO
 * @param {Number} id
 * @param {Object} data
 */
export const updateFO = async (id, data) => {
    const response = await api.put(`/fo/${id}`, data);
    return response.data;
};

/**
 * Hapus data FO
 * @param {Number} id
 */
export const deleteFO = async (id) => {
    const response = await api.delete(`/fo/${id}`);
    return response.data;
};
