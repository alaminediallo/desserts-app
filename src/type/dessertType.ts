export type dessertType = {
  id: number;
  image: {
    thumbnail: string;
    desktop: string;
    tablet: string;
    mobile: string;
  }
  name: string;
  category: string;
  price: number;
  quantity: number;
}