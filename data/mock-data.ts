export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  weight?: string; // e.g., "1kg", "7pcs"
  rating?: number; // 1-5
  isBestSelling?: boolean;
  isExclusiveOffer?: boolean;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  data: Product[];
}

export const mockCategories: Category[] = [
  {
    id: "exclusive-offers",
    name: "Exclusive Offers",
    imageUrl: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a", // Discount tag image
    data: [
      {
        id: "eo1",
        name: "Organic Bananas",
        description:
          "Ripe, sweet, and packed with potassium. Perfect for smoothies or snacks.",
        price: 4.99,
        weight: "7pcs",
        imageUrl:
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e", // Bananas
        rating: 4.5,
        isExclusiveOffer: true,
      },
      {
        id: "eo2",
        name: "Red Apples",
        description: "Crisp and juicy, ideal for a healthy snack or baking.",
        price: 4.99,
        weight: "1kg",
        imageUrl:
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb", // Apples
        rating: 4.7,
        isExclusiveOffer: true,
      },
      {
        id: "eo3",
        name: "Avocados",
        description: "Creamy and nutrient-dense, great for salads or toast.",
        price: 3.99,
        weight: "3pcs",
        imageUrl:
          "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9", // Avocados
        rating: 4.8,
        isExclusiveOffer: true,
      },
      {
        id: "eo4",
        name: "Organic Spinach",
        description: "Fresh and tender, rich in iron and vitamins.",
        price: 2.49,
        weight: "200g",
        imageUrl:
          "https://images.unsplash.com/photo-1576045057995-568f588f82fb", // Spinach
        rating: 4.3,
        isExclusiveOffer: true,
      },
      {
        id: "eo5",
        name: "Free-Range Eggs",
        description: "Farm-fresh eggs with rich, golden yolks.",
        price: 3.49,
        weight: "12pcs",
        imageUrl:
          "https://images.unsplash.com/photo-1587486913049-53fc88980cfc", // Eggs
        rating: 4.6,
        isExclusiveOffer: true,
      },
      {
        id: "eo6",
        name: "Greek Yogurt",
        description: "High-protein, creamy yogurt with live cultures.",
        price: 2.99,
        weight: "500g",
        imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150", // Yogurt
        rating: 4.4,
        isExclusiveOffer: true,
      },
    ],
  },

  // 2. Best Selling
  {
    id: "best-selling",
    name: "Best Selling",
    imageUrl: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a", // Star badge image
    data: [
      {
        id: "bs1",
        name: "Red Apples",
        description: "Nutritious and heart-healthy. Perfect for a varied diet.",
        price: 4.99,
        weight: "1kg",
        imageUrl:
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb", // Apples
        rating: 4.9,
        isBestSelling: true,
      },
      {
        id: "bs2",
        name: "Sprite Can",
        description: "Refreshing lemon-lime soda, perfect chilled.",
        price: 1.99,
        weight: "325ml",
        imageUrl:
          "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e", // Sprite
        rating: 4.2,
        isBestSelling: true,
      },
      {
        id: "bs3",
        name: "Orange Juice",
        description: "100% pure squeezed oranges, no added sugar.",
        price: 15.99,
        weight: "2L",
        imageUrl:
          "https://images.unsplash.com/photo-1612230629551-004f7d7ac64a", // Orange juice
        rating: 4.7,
        isBestSelling: true,
      },
      {
        id: "bs4",
        name: "Chicken Breast",
        description: "Lean, tender, and high in protein. Grass-fed.",
        price: 8.99,
        weight: "1kg",
        imageUrl:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143", // Chicken
        rating: 4.5,
        isBestSelling: true,
      },
      {
        id: "bs5",
        name: "Whole Wheat Bread",
        description: "High-fiber, soft, and delicious for sandwiches.",
        price: 2.49,
        weight: "500g",
        imageUrl:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff", // Bread
        rating: 4.3,
        isBestSelling: true,
      },
      {
        id: "bs6",
        name: "Coca-Cola Can",
        description: "Classic cola taste, best served cold.",
        price: 4.99,
        weight: "325ml",
        imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7", // Coke
        rating: 4.1,
        isBestSelling: true,
      },
    ],
  },

  {
    id: "fruits-vegetables",
    name: "Fresh Fruits & Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1444459094717-a39f1e3e0903", // Fruits/veggies
    data: [
      {
        id: "fv1",
        name: "Carrots",
        description: "Sweet and crunchy, rich in beta-carotene.",
        price: 1.99,
        weight: "500g",
        imageUrl:
          "https://images.unsplash.com/photo-1447175008436-054170c2e979",
        rating: 4.0,
      },
      {
        id: "fv2",
        name: "Tomatoes",
        description: "Juicy and versatile, perfect for salads or sauces.",
        price: 2.49,
        weight: "1kg",
        imageUrl:
          "https://images.unsplash.com/photo-1592841209800-a371b77347b7",
        rating: 4.2,
      },
      {
        id: "fv3",
        name: "Broccoli",
        description: "Nutrient-packed florets, great steamed or roasted.",
        price: 1.79,
        weight: "300g",
        imageUrl:
          "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c",
        rating: 4.1,
      },
      {
        id: "fv4",
        name: "Strawberries",
        description: "Sweet and antioxidant-rich, perfect for desserts.",
        price: 3.99,
        weight: "250g",
        imageUrl:
          "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
        rating: 4.6,
      },
      {
        id: "fv5",
        name: "Potatoes",
        description: "Versatile and filling, ideal for mashing or frying.",
        price: 2.29,
        weight: "1kg",
        imageUrl:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
        rating: 4.0,
      },
      {
        id: "fv6",
        name: "Grapes",
        description: "Sweet seedless grapes, a refreshing snack.",
        price: 3.49,
        weight: "500g",
        imageUrl:
          "https://images.unsplash.com/photo-1603569283847-aa295f0d016a",
        rating: 4.3,
      },
    ],
  },

  // 4. Beverages (6 data)
  {
    id: "beverages",
    name: "Beverages",
    imageUrl: "https://images.unsplash.com/photo-1551029506-0807df4e2031", // Beverages
    data: [
      {
        id: "bev1",
        name: "Pepsi Can",
        description: "Bold cola flavor with a fizzy kick.",
        price: 4.99,
        weight: "330ml",
        imageUrl:
          "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
        rating: 4.0,
      },
      {
        id: "bev2",
        name: "Apple & Grape Juice",
        description: "Sweet and tangy blend, no preservatives.",
        price: 15.99,
        weight: "2L",
        imageUrl: "https://images.unsplash.com/photo-1551029506-0807df4e2031",
        rating: 4.5,
      },
      {
        id: "bev3",
        name: "Mineral Water",
        description: "Pure and refreshing, sourced from natural springs.",
        price: 0.99,
        weight: "500ml",
        imageUrl: "https://images.unsplash.com/photo-1561043845-2f5e09749871",
        rating: 4.7,
      },
      {
        id: "bev4",
        name: "Iced Tea",
        description: "Lightly sweetened with natural lemon flavor.",
        price: 2.49,
        weight: "1L",
        imageUrl: "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0",
        rating: 4.2,
      },
      {
        id: "bev5",
        name: "Coffee Beans",
        description: "Arabica blend, medium roast for rich flavor.",
        price: 7.99,
        weight: "250g",
        imageUrl:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
        rating: 4.8,
      },
      {
        id: "bev6",
        name: "Energy Drink",
        description: "Boosts focus with B-vitamins and natural caffeine.",
        price: 2.99,
        weight: "250ml",
        imageUrl:
          "https://images.unsplash.com/photo-1619003919950-453bdf8432bf",
        rating: 3.9,
      },
    ],
  },

  {
    id: "meat-fish",
    name: "Meat & Fish",
    imageUrl: "https://images.unsplash.com/photo-1518492104633-130d0cc84637", // Meat/fish banner
    data: [
      {
        id: "mf1",
        name: "Salmon Fillet",
        description:
          "Omega-3 rich, perfect for grilling or baking. Wild-caught and fresh.",
        price: 12.99,
        weight: "300g",
        imageUrl:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
        rating: 4.9,
      },
      {
        id: "mf2",
        name: "Chicken Thighs",
        description:
          "Juicy and flavorful, ideal for roasting or curries. Skin-on for extra crispiness.",
        price: 6.99,
        weight: "1kg",
        imageUrl:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
        rating: 4.5,
      },
      {
        id: "mf3",
        name: "Beef Mince",
        description:
          "Lean ground beef, great for burgers, meatballs, or bolognese.",
        price: 8.49,
        weight: "500g",
        imageUrl:
          "https://images.unsplash.com/photo-1606755456206-b25206b20b8a",
        rating: 4.6,
      },
      {
        id: "mf4",
        name: "Prawns",
        description:
          "Succulent and sweet, ready to grill or stir-fry. Peeled and deveined.",
        price: 14.99,
        weight: "400g",
        imageUrl:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
        rating: 4.7,
      },
      {
        id: "mf5",
        name: "Lamb Chops",
        description:
          "Tender and aromatic, best seasoned and grilled to perfection.",
        price: 16.99,
        weight: "500g",
        imageUrl:
          "https://images.unsplash.com/photo-1606755456206-b25206b20b8a",
        rating: 4.8,
      },
      {
        id: "mf6",
        name: "Tuna Steak",
        description:
          "Premium sashimi-grade tuna, rich in protein and healthy fats.",
        price: 11.99,
        weight: "250g",
        imageUrl:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
        rating: 4.4,
      },
    ],
  },

  // 6. Dairy & Eggs (6 data)
  {
    id: "dairy-eggs",
    name: "Dairy & Eggs",
    imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150", // Dairy banner
    data: [
      {
        id: "de1",
        name: "Cheddar Cheese",
        description: "Aged for sharp flavor, great for melting or snacking.",
        price: 5.49,
        weight: "200g",
        imageUrl: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7",
        rating: 4.4,
      },
      {
        id: "de2",
        name: "Organic Milk",
        description: "Creamy and rich, packed with calcium and vitamin D.",
        price: 3.29,
        weight: "1L",
        imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
        rating: 4.6,
      },
      {
        id: "de3",
        name: "Free-Range Eggs",
        description: "Farm-fresh eggs with golden yolks. Pack of 12.",
        price: 3.99,
        weight: "12pcs",
        imageUrl:
          "https://images.unsplash.com/photo-1587486913049-53fc88980cfc",
        rating: 4.7,
      },
      {
        id: "de4",
        name: "Greek Yogurt",
        description: "High-protein, thick and creamy with live cultures.",
        price: 2.99,
        weight: "500g",
        imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
        rating: 4.5,
      },
      {
        id: "de5",
        name: "Butter",
        description: "Creamy unsalted butter, perfect for baking or cooking.",
        price: 2.49,
        weight: "250g",
        imageUrl:
          "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
        rating: 4.3,
      },
      {
        id: "de6",
        name: "Cottage Cheese",
        description: "Low-fat and high-protein, ideal for salads or snacks.",
        price: 2.79,
        weight: "300g",
        imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
        rating: 4.0,
      },
    ],
  },
];
