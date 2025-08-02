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
export async function deletePost(item) {
  console.log('deletePost: ', item.id);
  try {
    const response = await fetch(`https://68524bd70594059b23cce6a6.mockapi.io/books/${item.id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      // Handle non-successful responses (e.g., 404 Not Found, 500 Internal Server Error)
      const errorData = await response.json(); // If the API returns error details
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
    }

    // Optionally, handle a successful deletion response (e.g., check status code 204 No Content)
    console.log(`Resource with ID ${id} successfully deleted.`);
    // You might also return a success status or message
    return true; 

  } catch (error) {
    console.error('Error deleting resource:', error);
    // Handle network errors or other exceptions
    return false;
  }
}


