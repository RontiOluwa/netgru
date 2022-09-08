import axios from "axios";
import Hero from "@/types/Hero";
import Type from "@/types/Type";

const DOMAIN_NAME = process.env.VUE_APP_API_BASE_URL;
axios.defaults.baseURL = DOMAIN_NAME;
axios.defaults.timeout = 5000;

const API_SERVICES = {
  FETCH: async (): Promise<Hero[]> => {
    let response = null;
    try {
      response = (await axios.get("heroes")).data;
    } catch (error) {
      response = error;
    }
    return response;
  },
  FETCH_DETAILS: async (id: string): Promise<Hero[]> => {
    let response = null;
    try {
      response = (await axios.get(`heroes/${id}`)).data;
    } catch (error) {
      response = error;
    }
    return response;
  },
  ADD_HERO: async (params: Hero): Promise<Hero[]> => {
    let response = null;
    try {
      response = (await axios.post("heroes", params)).data;
    } catch (error) {
      response = error;
    }
    return response;
  },
  GET_TYPE: async (): Promise<Type[]> => {
    let response = null;
    try {
      response = (await axios.get("types")).data;
    } catch (error) {
      response = error;
    }
    return response;
  },
  DELETE_HERO: async (id: string): Promise<Type[]> => {
    let response = null;
    try {
      response = (await axios.delete(`heroes/${id}`)).data;
    } catch (error) {
      response = error;
    }
    return response;
  },
};

export default API_SERVICES;
