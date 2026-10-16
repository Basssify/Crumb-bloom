// Curated product catalogue for CRUMB & BLOOM
// Fictional demonstration prices in Nigerian Naira (₦).

export const CATEGORIES = [
  'All Products',
  'Celebration Cakes',
  'Cupcakes',
  'Doughnuts',
  'Pastries',
  'Cookies',
  'Bread'
];

export const PRODUCTS = [
  {
    id: 'classic-vanilla-cake',
    name: 'Classic Vanilla Celebration Cake',
    category: 'Celebration Cakes',
    price: 25000,
    shortDescription: 'Layers of moist golden sponge infused with Madagascar vanilla bean and whipped Swiss meringue buttercream.',
    description: 'Our signature celebration cake is an homage to timeless pastry traditions. Handcrafted with three fluffy tiers of Madagascar vanilla bean sponge cake, gently brushed with vanilla simple syrup, and filled with silky Swiss meringue buttercream. Perfect for birthdays, intimate milestones, and afternoon tea celebrations.',
    imageUrl: '/images/cake-vanilla-celebration.jpg',
    featured: true,
    leadTime: '24 hours notice required',
    servings: '6-inch (Serves 10–12)',
    ingredients: ['French butter', 'Madagascar Bourbon vanilla bean', 'Organic wheat flour', 'Farm fresh eggs', 'Cane sugar', 'Sea salt'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Standard 6-inch (10–12 slices)', priceModifier: 0 },
      { name: 'Classic 8-inch (18–20 slices)', priceModifier: 8000 },
      { name: 'Grand 10-inch (28–30 slices)', priceModifier: 16000 }
    ]
  },
  {
    id: 'chocolate-fudge-cake',
    name: 'Chocolate Fudge Cake',
    category: 'Celebration Cakes',
    price: 32000,
    shortDescription: 'Deep Valrhona cocoa sponge generously layered with dark Belgian chocolate ganache.',
    description: 'An indulgent, deeply decadent chocolate cake designed for serious chocoholics. Made using premium Dutch-processed cocoa and 70% dark Belgian chocolate ganache, crowned with glossy chocolate shavings and Maldon sea salt flakes.',
    imageUrl: '/images/cake-chocolate-fudge-commons.jpg',
    featured: true,
    leadTime: '24 hours notice required',
    servings: '6-inch (Serves 10–12)',
    ingredients: ['70% Belgian dark chocolate', 'Dutch cocoa powder', 'Pure butter', 'Fresh cream', 'Espresso shot', 'Cane sugar'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Standard 6-inch (10–12 slices)', priceModifier: 0 },
      { name: 'Classic 8-inch (18–20 slices)', priceModifier: 9000 },
      { name: 'Grand 10-inch (28–30 slices)', priceModifier: 18000 }
    ]
  },
  {
    id: 'red-velvet-cake',
    name: 'Red Velvet Cake',
    category: 'Celebration Cakes',
    price: 30000,
    shortDescription: 'Traditional velvet sponge with a subtle cocoa crumb, filled with tangy whipped cream cheese frosting.',
    description: 'A genuine Southern classic elevated to patisserie perfection. Delicate crimson sponge infused with buttermilk and hints of cocoa, finished with our signature tangy vanilla bean cream cheese frosting and dusted red velvet crumb.',
    imageUrl: '/images/cake-red-velvet.jpg',
    featured: true,
    leadTime: '24 hours notice required',
    servings: '6-inch (Serves 10–12)',
    ingredients: ['Cultured buttermilk', 'Natural cocoa', 'Cream cheese', 'Pure vanilla extract', 'Farm eggs', 'Wheat flour'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Standard 6-inch (10–12 slices)', priceModifier: 0 },
      { name: 'Classic 8-inch (18–20 slices)', priceModifier: 8500 },
      { name: 'Grand 10-inch (28–30 slices)', priceModifier: 17000 }
    ]
  },
  {
    id: 'strawberry-shortcake',
    name: 'Strawberry Shortcake',
    category: 'Celebration Cakes',
    price: 28000,
    shortDescription: 'Airy chiffon sponge with macerated fresh strawberries and Chantilly cream.',
    description: 'Light, cloud-like Japanese-style strawberry shortcake. Layers of airy genoise sponge soaked with strawberry syrup, layered with sweet fresh strawberries and pillowy vanilla Chantilly cream.',
    imageUrl: '/images/cake-strawberry-shortcake.jpg',
    featured: false,
    leadTime: '24 hours notice required',
    servings: '6-inch (Serves 10–12)',
    ingredients: ['Fresh strawberries', 'Whipping cream', 'Organic eggs', 'Cake flour', 'Bourbon vanilla'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Standard 6-inch (10–12 slices)', priceModifier: 0 },
      { name: 'Classic 8-inch (18–20 slices)', priceModifier: 8000 }
    ]
  },
  {
    id: 'lemon-drizzle-cake',
    name: 'Lemon Drizzle Cake',
    category: 'Celebration Cakes',
    price: 22000,
    shortDescription: 'Zesty lemon butter sponge soaked in tangy citrus glaze with Meyer lemon curd.',
    description: 'Bright, invigorating, and beautifully moist. Packed with freshly grated lemon zest and soaked in tart lemon juice glaze while warm from the oven, layered with homemade Meyer lemon curd.',
    imageUrl: '/images/cake-lemon-drizzle.jpg',
    featured: false,
    leadTime: 'Same-day available if ordered before 11am',
    servings: 'Loaf or 7-inch Round (Serves 8–10)',
    ingredients: ['Meyer lemons', 'Pure butter', 'Unbleached flour', 'Cane sugar', 'Farm eggs'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Standard 7-inch Round (8–10 slices)', priceModifier: 0 },
      { name: 'Large 9-inch Round (14–16 slices)', priceModifier: 7000 }
    ]
  },
  {
    id: 'caramel-crunch-cake',
    name: 'Caramel Crunch Cake',
    category: 'Celebration Cakes',
    price: 35000,
    shortDescription: 'Golden sponge with house-made salted caramel, praline crunch, and caramel drizzle.',
    description: 'A masterpiece of texture and depth. Moist brown butter sponge cake paired with slow-cooked artisanal salted caramel, crispy hazelnut praline flakes, and salted butter caramel glaze.',
    imageUrl: '/images/cake-caramel.jpg',
    featured: true,
    leadTime: '24 hours notice required',
    servings: '6-inch (Serves 10–12)',
    ingredients: ['Brown butter', 'Sea salt caramel', 'Hazelnut praline', 'Belgian white chocolate', 'Eggs', 'Flour'],
    allergens: ['Dairy', 'Gluten', 'Eggs', 'Tree Nuts'],
    options: [
      { name: 'Standard 6-inch (10–12 slices)', priceModifier: 0 },
      { name: 'Classic 8-inch (18–20 slices)', priceModifier: 9500 },
      { name: 'Grand 10-inch (28–30 slices)', priceModifier: 19000 }
    ]
  },
  {
    id: 'vanilla-cupcakes-6',
    name: 'Vanilla Cupcake Box of 6',
    category: 'Cupcakes',
    price: 12000,
    shortDescription: 'Fluffy vanilla cupcakes with classic Swiss buttercream swirls and golden pearls.',
    description: 'Six delicate Madagascar vanilla bean cupcakes baked fresh every morning, crowned with creamy buttercream swirls, edible gold dust, and delicate sugar petals.',
    imageUrl: '/images/cupcakes-vanilla.jpg',
    featured: false,
    leadTime: 'Available same-day',
    servings: 'Box of 6 cupcakes',
    ingredients: ['Madagascar vanilla', 'Butter', 'Pastry flour', 'Eggs', 'Confectioner sugar'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Box of 6', priceModifier: 0 },
      { name: 'Box of 12 (Celebration Pack)', priceModifier: 11000 }
    ]
  },
  {
    id: 'chocolate-cupcakes-6',
    name: 'Chocolate Cupcake Box of 6',
    category: 'Cupcakes',
    price: 14000,
    shortDescription: 'Moist dark chocolate cupcakes topped with whipped chocolate fudge ganache.',
    description: 'Half a dozen velvety cocoa cupcakes with rich whipped chocolate ganache and chocolate curls. Baked with Dutch cocoa for an intense, balanced chocolate profile.',
    imageUrl: '/images/cupcakes-chocolate.jpg',
    featured: false,
    leadTime: 'Available same-day',
    servings: 'Box of 6 cupcakes',
    ingredients: ['Dutch cocoa', 'Semi-sweet chocolate', 'Butter', 'Pure cream', 'Eggs'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Box of 6', priceModifier: 0 },
      { name: 'Box of 12 (Celebration Pack)', priceModifier: 13000 }
    ]
  },
  {
    id: 'red-velvet-cupcakes-6',
    name: 'Red Velvet Cupcake Box of 6',
    category: 'Cupcakes',
    price: 14000,
    shortDescription: 'Crimson cocoa cupcakes piped with our beloved cream cheese frosting.',
    description: 'Handcrafted box of 6 red velvet cupcakes with a soft, melt-in-your-mouth crumb and signature tangy cream cheese frosting rosettes.',
    imageUrl: '/images/cupcakes-red-velvet.jpg',
    featured: true,
    leadTime: 'Available same-day',
    servings: 'Box of 6 cupcakes',
    ingredients: ['Buttermilk', 'Cocoa', 'Cream cheese', 'Pure vanilla', 'Flour'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Box of 6', priceModifier: 0 },
      { name: 'Box of 12 (Celebration Pack)', priceModifier: 13000 }
    ]
  },
  {
    id: 'glazed-doughnuts-6',
    name: 'Glazed Doughnuts Box of 6',
    category: 'Doughnuts',
    price: 9000,
    shortDescription: 'Pillowy 24-hour brioche doughnuts dipped in sheer Madagascar vanilla glaze.',
    description: 'Slow-proved for 24 hours, these artisanal brioche doughnuts have an ethereal, airy texture with a crisp outer crust and a translucent, crackling vanilla glaze.',
    imageUrl: '/images/doughnuts-glazed.jpg',
    featured: true,
    leadTime: 'Available daily from 8:00 AM',
    servings: 'Box of 6 brioche doughnuts',
    ingredients: ['Brioche dough', 'French butter', 'Vanilla bean glaze', 'Yeast', 'Eggs'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Box of 6 (Classic Glaze)', priceModifier: 0 },
      { name: 'Box of 12 (Double Pack)', priceModifier: 8000 }
    ]
  },
  {
    id: 'chocolate-doughnuts-6',
    name: 'Chocolate Doughnuts Box of 6',
    category: 'Doughnuts',
    price: 11000,
    shortDescription: 'Brioche doughnuts smothered in rich chocolate glaze and dark chocolate sprinkles.',
    description: 'Six artisanal brioche doughnuts dipped in a silky chocolate glaze made from melted dark chocolate and cocoa nibs.',
    imageUrl: '/images/doughnuts-chocolate.jpg',
    featured: false,
    leadTime: 'Available daily from 8:00 AM',
    servings: 'Box of 6 brioche doughnuts',
    ingredients: ['Brioche dough', 'Dark chocolate glaze', 'Cocoa crisps', 'Butter', 'Eggs'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Box of 6', priceModifier: 0 },
      { name: 'Box of 12', priceModifier: 10000 }
    ]
  },
  {
    id: 'assorted-doughnuts-12',
    name: 'Assorted Doughnuts Box of 12',
    category: 'Doughnuts',
    price: 18000,
    shortDescription: 'A baker’s dozen selection of glazed, chocolate, salted caramel, and cinnamon sugar doughnuts.',
    description: 'The ultimate party dozen. Features 3 Classic Glazed, 3 Chocolate Ganache, 3 Salted Caramel Crumb, and 3 Cinnamon Sugar brioche doughnuts packed in our signature gift box.',
    imageUrl: '/images/doughnuts-assorted.jpg',
    featured: true,
    leadTime: 'Available daily',
    servings: 'Box of 12 artisan doughnuts',
    ingredients: ['Brioche dough', 'Vanilla glaze', 'Chocolate', 'Caramel', 'Cinnamon sugar'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Standard Chef Assortment (12)', priceModifier: 0 }
    ]
  },
  {
    id: 'butter-croissants-4',
    name: 'Butter Croissants Box of 4',
    category: 'Pastries',
    price: 8000,
    shortDescription: 'Classic French viennoiserie laminated with 84% Normandy butter for 27 airy layers.',
    description: 'Our pride and joy. Rolled by hand over three days using cultured Normandy butter. Boasts a golden shatter-crisp exterior and an open honeycomb crumb with unmatched buttery fragrance.',
    imageUrl: '/images/pastry-croissants.jpg',
    featured: true,
    leadTime: 'Fresh daily from 7:30 AM',
    servings: 'Box of 4 croissants',
    ingredients: ['Normandy cultured butter 84%', 'French T55 flour', 'Whole milk', 'Natural levain', 'Sea salt'],
    allergens: ['Dairy', 'Gluten'],
    options: [
      { name: 'Box of 4', priceModifier: 0 },
      { name: 'Box of 8 (Brunch Pack)', priceModifier: 7500 }
    ]
  },
  {
    id: 'pain-au-chocolat-4',
    name: 'Pain au Chocolat Box of 4',
    category: 'Pastries',
    price: 9500,
    shortDescription: 'Flaky laminated pastry encasing two batons of bittersweet French chocolate.',
    description: 'The quintessential French morning pastry. Golden, flaky pastry folded around dual batons of 55% cocoa dark chocolate. Warm in the oven for 3 minutes for molten bliss.',
    imageUrl: '/images/pastry-pain-au-chocolat.jpg',
    featured: false,
    leadTime: 'Fresh daily from 7:30 AM',
    servings: 'Box of 4 pastries',
    ingredients: ['Normandy butter', 'Dark chocolate batons', 'Pastry flour', 'Milk', 'Yeast'],
    allergens: ['Dairy', 'Gluten'],
    options: [
      { name: 'Box of 4', priceModifier: 0 },
      { name: 'Box of 8', priceModifier: 9000 }
    ]
  },
  {
    id: 'cinnamon-rolls-4',
    name: 'Cinnamon Rolls Box of 4',
    category: 'Pastries',
    price: 10000,
    shortDescription: 'Gooey brioche spirals with Ceylon cinnamon, brown sugar, and cream cheese icing.',
    description: 'Generously spiced brioche dough rolled with fragrant Ceylon cinnamon, dark muscovado sugar, and cultured butter, drizzled lavishly with warm vanilla cream cheese glaze.',
    imageUrl: '/images/pastry-cinnamon-rolls.jpg',
    featured: true,
    leadTime: 'Fresh daily',
    servings: 'Box of 4 jumbo rolls',
    ingredients: ['Brioche dough', 'Ceylon cinnamon', 'Muscovado sugar', 'Cream cheese icing', 'Butter'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Box of 4', priceModifier: 0 },
      { name: 'Box of 8', priceModifier: 9500 }
    ]
  },
  {
    id: 'sausage-rolls-6',
    name: 'Sausage Rolls Box of 6',
    category: 'Pastries',
    price: 9500,
    shortDescription: 'Flaky puff pastry filled with seasoned artisanal sausage meat and fresh herbs.',
    description: 'A savoury patisserie staple. Golden, buttery puff pastry wrapped around gourmet minced beef and herb sausage seasoned with sage, thyme, and black pepper. Perfect warm snack.',
    imageUrl: '/images/pastry-sausage-rolls.jpg',
    featured: false,
    leadTime: 'Fresh daily',
    servings: 'Box of 6 savoury rolls',
    ingredients: ['Puff pastry', 'Seasoned minced sausage', 'Fresh sage and thyme', 'Egg wash', 'Sesame seeds'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    options: [
      { name: 'Box of 6', priceModifier: 0 },
      { name: 'Box of 12', priceModifier: 9000 }
    ]
  },
  {
    id: 'chocolate-chip-cookies-6',
    name: 'Chocolate Chip Cookies Box of 6',
    category: 'Cookies',
    price: 7500,
    shortDescription: 'Chewy, browned-butter cookies with melting chocolate puddles and sea salt.',
    description: 'Baked to golden perfection with crisp caramelized edges and a soft, chewy molten center. Aged for 36 hours for maximum nutty flavor and finished with crunchy Maldon sea salt.',
    imageUrl: '/images/cookies-chocolate-chip-commons.jpg',
    featured: true,
    leadTime: 'Available daily',
    servings: 'Box of 6 large cookies',
    ingredients: ['Browned butter', 'Belgian chocolate chunks', 'Cane sugar', 'Flour', 'Maldon sea salt'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    options: [
      { name: 'Box of 6', priceModifier: 0 },
      { name: 'Box of 12', priceModifier: 7000 }
    ]
  },
  {
    id: 'shortbread-cookies-12',
    name: 'Shortbread Cookies Box of 12',
    category: 'Cookies',
    price: 8000,
    shortDescription: 'Traditional Scottish-style all-butter shortbread fingers that melt on the tongue.',
    description: 'Simplicity elevated. Made with just four premium ingredients: churned butter, organic flour, sugar, and fine sea salt. Baked low and slow to a tender, crumbly pale gold.',
    imageUrl: '/images/cookies-shortbread-commons.jpg',
    featured: false,
    leadTime: 'Available daily',
    servings: 'Tin of 12 shortbread fingers',
    ingredients: ['Cultured butter', 'Wheat flour', 'Cornstarch', 'Cane sugar', 'Sea salt'],
    allergens: ['Dairy', 'Gluten'],
    options: [
      { name: 'Tin of 12', priceModifier: 0 },
      { name: 'Tin of 24 (Gift Tin)', priceModifier: 7500 }
    ]
  },
  {
    id: 'artisanal-sourdough',
    name: 'Artisanal Sourdough Loaf',
    category: 'Bread',
    price: 6500,
    shortDescription: 'Naturally leavened wild yeast bread with a blistering crust and open crumb.',
    description: 'Crafted using a 5-year-old sourdough starter, organic flour, water, and sea salt. Fermented for 36 hours and hearth-baked in a stone deck oven for a crackling blistered crust and tangy, chewy interior.',
    imageUrl: '/images/bread-sourdough.jpg',
    featured: false,
    leadTime: 'Fresh from oven at 8:30 AM',
    servings: 'Whole 850g Loaf (Approx. 16 slices)',
    ingredients: ['Stoneground flour', 'Wild sourdough starter', 'Filtered water', 'Sea salt'],
    allergens: ['Gluten'],
    options: [
      { name: 'Whole Loaf (Uncut)', priceModifier: 0 },
      { name: 'Sliced for Toast & Sandwiches', priceModifier: 0 }
    ]
  },
  {
    id: 'banana-bread-loaf',
    name: 'Banana Bread Loaf',
    category: 'Bread',
    price: 9000,
    shortDescription: 'Super moist loaf packed with caramelized ripe bananas, spices, and toasted walnuts.',
    description: 'Comfort food at its finest. Packed with five ultra-ripe bananas per loaf, toasted Nigerian walnuts, warm cinnamon, and a delicate brown sugar crust on top.',
    imageUrl: '/images/bread-banana.jpg',
    featured: true,
    leadTime: 'Baked fresh daily',
    servings: 'Whole Loaf (8–10 generous slices)',
    ingredients: ['Ripe bananas', 'Toasted walnuts', 'Pure butter', 'Cinnamon', 'Eggs', 'Flour'],
    allergens: ['Dairy', 'Gluten', 'Eggs', 'Tree Nuts'],
    options: [
      { name: 'Standard Loaf with Walnuts', priceModifier: 0 },
      { name: 'Nut-Free Loaf (Seed & Cinnamon Topping)', priceModifier: 0 }
    ]
  }
];

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

export function getRelatedProducts(currentId, category, limit = 3) {
  return PRODUCTS
    .filter(p => p.id !== currentId && p.category === category)
    .slice(0, limit);
}
