export async function getAllPosts() {
  try {
    const response = await fetch(
      "https://68524bd70594059b23cce6a6.mockapi.io/books"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status : ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error(error?.message || "Failed to fetch posts");
  }
}
export async function getLatestPosts() {
  try {
    const response = await fetch(
      "https://68524bd70594059b23cce6a6.mockapi.io/books"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status : ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error(error?.message || "Failed to fetch posts");
  }
}
