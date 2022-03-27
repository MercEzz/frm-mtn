export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "☕", label: "Chai" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese, chai] = allIngredients;

export const initialTabs = [tomato, lettuce, cheese, chai];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
