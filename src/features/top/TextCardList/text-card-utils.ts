export type MenuItem = {
  head: string;
  description: string;
  icon?: string;
};

export async function getCardListItems() {
  try {
    const response = await fetch(
      "http://localhost:8787/api/menus"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCoffeeItems() {
  try {
    const response = await fetch(
      "http://localhost:8787/api/menus/coffee"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
