import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants/index";

const url = 'products/product-list/';
const url_productDetail = 'products/product-list';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const getListById = (id) => {
  return axiosService.get(`${API_ENDPOINT}/${url_productDetail}/${id}`);
};
