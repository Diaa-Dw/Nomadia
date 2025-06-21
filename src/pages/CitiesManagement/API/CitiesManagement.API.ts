import axios from '@/api';
import { AddCityRequest, City, CityFilters, UpdateCityRequest } from '../types';

export const fetchCities = async (
  pageNumber: number,
  pageSize: number,
  filters: CityFilters
): Promise<City[]> => {
  const { name, searchQuery } = filters;

  const response = await axios.get<City[]>('/cities', {
    params: {
      pageNumber,
      pageSize,
      ...(name ? { name } : {}),
      ...(searchQuery ? { searchQuery } : {}),
    },
  });
  return response.data;
};

export const addCityRequest = async (request: AddCityRequest): Promise<City> => {
  const response = await axios.post<City>('/cities', request);
  return response.data;
};

export const updateCityRequest = async (city: UpdateCityRequest): Promise<City> => {
  const { id, ...rest } = city;
  await axios.put(`/cities/${id}`, rest);

  return city;
};

export const deleteCityRequest = async (cityId: number) => {
  await axios.delete(`/cities/${cityId}`);

  return cityId;
};
