const API_URL = "https://avipaw-rescue-production.up.railway.app/api/animals";

// Get all animals
export const getAnimals = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch animals");
  }

  return response.json();
};

// Get one animal
export const getAnimal = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch animal");
  }

  return response.json();
};

// Create animal
export const createAnimal = async (animalData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(animalData)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create animal");
  }

  return response.json();
};

// Update animal
export const updateAnimal = async (id, animalData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(animalData)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to update animal");
  }

  return response.json();
};

// Delete animal
export const deleteAnimal = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete animal");
  }

  return response.json();
};