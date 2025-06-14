export interface Amenity {
  id: number;
  name: string;
  description: string;
}

export interface FilterFormValues {
  amenities: number[];
  stars: number[];
}
