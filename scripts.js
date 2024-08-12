async function loadQuotes() {
  try {
    const response = await fetch('https://smileschool-api.hbtn.info/quotes');
    const quotes = await response.json();

    // function to display the quotes
    displayQuotes(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }
}


