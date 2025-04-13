export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  weight?: string;
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  data: Product[];
}

export const mockCategories: Category[] = [
  {
    id: "exclusive-offers",
    name: "Exclusive Offers",
    data: [
      {
        id: "eo1",
        name: "Organic Bananas",
        description:
          "Ripe, sweet, and packed with potassium. Perfect for smoothies or snacks.",
        price: 4.99,
        weight: "7pcs",
        image: "bananas",
        rating: 4.5,
      },
      {
        id: "eo2",
        name: "Red Apples",
        description: "Crisp and juicy, ideal for a healthy snack or baking.",
        price: 4.99,
        weight: "1kg",
        image: "apple",
        rating: 4.7,
      },
      {
        id: "eo3",
        name: "Cherry Tomatoes",
        description: "Creamy and nutrient-dense, great for salads or toast.",
        price: 3.99,
        weight: "3pcs",
        image: "tomatoes",
        rating: 4.8,
      },
      {
        id: "eo4",
        name: "Organic Spinach",
        description: "Fresh and tender, rich in iron and vitamins.",
        price: 2.49,
        weight: "200g",
        image: "apple",
        rating: 4.3,
      },
      {
        id: "eo5",
        name: "Free-Range Eggs",
        description: "Farm-fresh eggs with rich, golden yolks.",
        price: 3.49,
        weight: "12pcs",
        image: "eggs",
        rating: 4.6,
      },
      {
        id: "eo6",
        name: "Greek Yogurt",
        description: "High-protein, creamy yogurt with live cultures.",
        price: 2.99,
        weight: "500g",
        image: "sprite",
        rating: 4.4,
      },
    ],
  },

  {
    id: "best-selling",
    name: "Best Selling",
    data: [
      {
        id: "bs1",
        name: "Red Apples",
        description: "Nutritious and heart-healthy. Perfect for a varied diet.",
        price: 4.99,
        weight: "1kg",
        image: "apple",
        rating: 4.9,
      },
      {
        id: "bs2",
        name: "Sprite Can",
        description: "Refreshing lemon-lime soda, perfect chilled.",
        price: 1.99,
        weight: "325ml",
        image: "sprite",
        rating: 4.2,
      },
      {
        id: "bs3",
        name: "Orange Juice",
        description: "100% pure squeezed oranges, no added sugar.",
        price: 15.99,
        weight: "2L",
        image: "sprite",
        rating: 4.7,
      },
      {
        id: "bs4",
        name: "Chicken Breast",
        description: "Lean, tender, and high in protein. Grass-fed.",
        price: 8.99,
        weight: "1kg",
        image: "chicken",
        rating: 4.5,
      },
      {
        id: "bs5",
        name: "Whole Wheat Bread",
        description: "High-fiber, soft, and delicious for sandwiches.",
        price: 2.49,
        weight: "500g",
        image: "apple",
        rating: 4.3,
      },
      {
        id: "bs6",
        name: "Coca-Cola Can",
        description: "Classic cola taste, best served cold.",
        price: 4.99,
        weight: "325ml",
        image: "sprite",
        rating: 4.1,
      },
    ],
  },

  {
    id: "fruits-vegetables",
    name: "Fresh Fruits & Vegetables",
    data: [
      {
        id: "fv2",
        name: "Tomatoes",
        description: "Juicy and versatile, perfect for salads or sauces.",
        price: 2.49,
        weight: "1kg",
        image: "tomatoes",
        rating: 4.2,
      },
      {
        id: "fv3",
        name: "Broccoli",
        description: "Nutrient-packed florets, great steamed or roasted.",
        price: 1.79,
        weight: "300g",
        image: "ginger",
        rating: 4.1,
      },
      {
        id: "fv4",
        name: "Strawberries",
        description: "Sweet and antioxidant-rich, perfect for desserts.",
        price: 3.99,
        weight: "250g",
        image: "apple",
        rating: 4.6,
      },
      {
        id: "fv5",
        name: "Potatoes",
        description: "Versatile and filling, ideal for mashing or frying.",
        price: 2.29,
        weight: "1kg",
        image: "tomatoes",
        rating: 4.0,
      },
      {
        id: "fv6",
        name: "Grapes",
        description: "Sweet seedless grapes, a refreshing snack.",
        price: 3.49,
        weight: "500g",
        image: "ginger",
        rating: 4.3,
      },
    ],
  },

  // 4. Beverages (6 data)
  {
    id: "beverages",
    name: "Beverages",
    data: [
      {
        id: "bev1",
        name: "Pepsi Can",
        description: "Bold cola flavor with a fizzy kick.",
        price: 4.99,
        weight: "330ml",
        image: "sprite",
        rating: 4.0,
      },
      {
        id: "bev2",
        name: "Apple & Grape Juice",
        description: "Sweet and tangy blend, no preservatives.",
        price: 15.99,
        weight: "2L",
        image: "apple",
        rating: 4.5,
      },
      {
        id: "bev3",
        name: "Mineral Water",
        description: "Pure and refreshing, sourced from natural springs.",
        price: 0.99,
        weight: "500ml",
        image: "sprite",
        rating: 4.7,
      },
      {
        id: "bev5",
        name: "Coffee Beans",
        description: "Arabica blend, medium roast for rich flavor.",
        price: 7.99,
        weight: "250g",
        image: "eggs",
        rating: 4.8,
      },
      {
        id: "bev6",
        name: "Energy Drink",
        description: "Boosts focus with B-vitamins and natural caffeine.",
        price: 2.99,
        weight: "250ml",
        image: "beef",
        rating: 3.9,
      },
    ],
  },
];
