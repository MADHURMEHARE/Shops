const groceryItems = [
  {
    name: "Apple",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300"
  },
  {
    name: "Banana",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8?w=300"
  },
  {
    name: "Milk",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300"
  },
  {
    name: "Bread",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=300"
  },


  {
    name: "Rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300"
  },
  {
    name: "Wheat (Gahu)",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300"
  },
  {
    name: "Maggie Noodles",
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=300"
  },
  {
    name: "Eggs",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300"
  },
  {
    name: "Onion",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=300"
  },
 
];

export const products = Array.from({ length: 50 }, (_, i) => {
  const item = groceryItems[i % groceryItems.length];

  return {
    id: i + 1,
    name: item.name,
    price: Math.floor(Math.random() * 200) + 20,
    image: item.image
  };
});