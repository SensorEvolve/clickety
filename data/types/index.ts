// data/types/index.ts
export interface Brand {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  brand_id: string;
  name: string;
  description: string;
  image_url: string;
  sound_url: string;
}
