



const products = [

  // Medicine

  {
    id: 1,
    name: "Panadol Extra",
    price: 120,
    category: "medicine",
    rating: 4.8,
    stock: 0,
    description: "A popular over-the-counter medicine commonly used for temporary relief of headaches and minor aches and pains.",
    oldPrice: 150,
   discount: 20,
   isOffer: true,
   image: "/images/panadol.jpg",
  },

  {
    id: 2,
    name: "Brufen 400mg",
    price: 151,
    category: "medicine",
    rating: 4.9,
    stock: 5,
    description: "An over-the-counter medicine commonly used for temporary relief of pain, inflammation, and fever.",
    image:"/images/brufen400tab.jpg"
  },

  {
    id: 3,
    name: "Cataflam 50mg",
    price: 300,
    category: "medicine",
    rating: 4.1,
    stock: 2,
    description: "A commonly used medicine for temporary relief of pain and inflammation.",
    image:"/images/cataflam.jpg"
  },

  {
    id: 4,
    name: "Strepsils",
    price: 180,
    category: "medicine",
    rating: 4.7,
    stock: 9,
    description: "Throat lozenges designed to provide soothing relief from minor throat discomfort.",
    image:"/images/strepsils.jpg"
  },

  // Vitamins

  {
    id: 5,
    name: "Vitamin C",
    price: 180,
    category: "vitamins",
    rating: 3.8,
    stock: 3,
    description: "A vitamin C supplement designed to support daily nutritional needs and general wellness.",
    image: "/images/vitc.jpg",
  },

  {
    id: 6,
    name: "Vitamin D3",
    price: 220,
    category: "vitamins",
    rating: 4.0,
    stock: 6,
    description: "A vitamin D3 supplement intended to help support normal daily nutritional requirements.",
    image: "/images/vitd3.jpg",
  },

  {
    id: 7,
    name: "Omega 3",
    price: 350,
    category: "vitamins",
    rating: 5.0,
    stock: 7,
    description: "An omega-3 supplement that provides essential fatty acids as part of a balanced daily diet.",
    oldPrice: 420,
    discount: 17,
    isOffer: true,
    image: "/images/omega 3.jpg",
  },

  {
    id: 8,
    name: "Multivitamin",
    price: 280,
    category: "vitamins",
    rating: 4.2,
    stock: 3,
    description: "A daily multivitamin supplement containing a combination of essential vitamins and nutrients.",
    image: "/images/multiv.jpg",
    
  },

  // Skincare

  {
    id: 9,
    name: "Moisturizing Cream",
    price: 250,
    category: "skincare",
    rating: 3.8,
    stock: 1,
    description: "A moisturizing cream designed to help keep the skin hydrated and feeling soft and comfortable.",
    image: "/images/moist.jpg",
  },

  {
    id: 10,
    name: "Face Wash",
    price: 190,
    category: "skincare",
    rating: 3.8,
    stock: 10,
    description: "A facial cleanser designed to gently remove everyday dirt, excess oil, and impurities from the skin.",
    image: "/images/facewash.jpg",
  },

  {
    id: 11,
    name: "Sunscreen SPF 50",
    price: 320,
    category: "skincare",
    rating: 3.8,
    stock: 11,
    description: "A daily sunscreen formulated with SPF 50 to help protect the skin from harmful UV exposure.",
    image: "/images/sunscreen.jpg",
  },

  {
    id: 12,
    name: "Body Lotion",
    price: 230,
    category: "skincare",
    rating: 4.8,
    stock: 4,
    description: "A body lotion designed to moisturize the skin and leave it feeling smooth and comfortable.",
    image: "/images/bodysplash.jpg",
  },

  // Personal Care

  {
    id: 13,
    name: "Shampoo",
    price: 200,
    category: "personal-care",
    rating: 5.0,
    stock: 2,
    description: "A daily hair cleanser designed to remove buildup and leave the hair feeling clean and refreshed.",
    image: "/images/shampoo.jpg",
  },

  {
    id: 14,
    name: "Conditioner",
    price: 210,
    category: "personal-care",
    rating: 3.8,
    stock: 11,
    description: "A hair conditioner designed to help improve softness, smoothness, and manageability.",
    image: "/images/conditioner.jpg",
  },

  {
    id: 15,
    name: "Toothpaste",
    price: 95,
    category: "personal-care",
    rating: 4.8,
    stock: 3,
    description: "A daily toothpaste designed to help clean the teeth and maintain everyday oral hygiene.",
    image: "/images/toothpast.jpg",
  },

  {
    id: 16,
    name: "Mouthwash",
    price: 160,
    category: "personal-care",
    rating: 3.7,
    stock: 6,
    description: "A mouthwash designed to complement daily brushing and help maintain a fresh and clean mouth.",
    image: "/images/mouthwash.jpg",
  },

  // Baby Care

  {
    id: 17,
    name: "Baby Lotion",
    price: 150,
    category: "baby-care",
    rating: 4.9,
    stock: 8,
    description: "A gentle baby lotion designed to help moisturize and care for delicate baby skin.",
    oldPrice: 190,
    discount: 21,
    isOffer: true,
    image: "/images/infbodylution.jpg",
  },

  {
    id: 18,
    name: "Baby Shampoo",
    price: 170,
    category: "baby-care",
    rating: 3.1,
    stock: 11,
    description: "A gentle shampoo designed for babies and suitable for everyday hair and scalp cleansing.",
    image: "/images/bodyshampoo.jpg",
  },

  {
    id: 19,
    name: "Baby Cream",
    price: 140,
    category: "baby-care",
    rating: 4.8,
    stock: 3,
    description: "A gentle baby cream designed to help moisturize and care for delicate skin.",
    image: "/images/bodycream.jpg",
  },

  {
    id: 20,
    name: "Baby Powder",
    price: 110,
    category: "baby-care",
    rating: 4.0,
    stock: 5,
    description: "A baby care powder designed to help keep the skin feeling dry, fresh, and comfortable.",
    image: "/images/bodypowder.jpg",
  },

];

export default products;

