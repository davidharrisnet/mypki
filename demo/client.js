

async function fetchText() {
    try {
      const response = await fetch('http://localhost:3000');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error fetching text:', error);
      // Handle error appropriately
    }
  }
  
  // Example usage:
  async function main() {
    const text = await fetchText();
    console.log(text); // Output the fetched text

  }
  
  main();