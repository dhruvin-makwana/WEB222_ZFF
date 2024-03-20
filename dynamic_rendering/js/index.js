/**
 * Create a new row element for the image and append it to the trending table.
 *
 * @param {Object} trendingTable - The table to which the image row will be appended
 * @param {Object} moviesDB - The database containing the movie results
 * @param {number} maxCount - The maximum number of movies to display in the image row
 * @return {void}
 */
function imageRow(trendingTable, moviesDB, maxCount) {
  // Create a new row element for the image
  const imageRow = document.createElement('tr');

  // Loop through each movie in the moviesDB results
  for (const movie of moviesDB.results.slice(0, maxCount)) {
    // Create a new cell element for the image
    const imageCell = document.createElement('td');

    // Create a new image element
    const img = document.createElement('img');

    // Set the image source to the movie's image URL
    img.src = movie.image;

    // Set the width attribute of the image to 150
    img.setAttribute('width', '150');

    // Set the alt attribute of the image to an empty string
    img.alt = '';

    // Set the srcset attribute of the image to an empty string
    img.srcset = '';

    // Append the image element to the image cell
    imageCell.appendChild(img);

    // Append the image cell to the image row
    imageRow.appendChild(imageCell);
  }

  // Append the image row to the trending table
  trendingTable.appendChild(imageRow);
}

/**
 * Create a new row element for the movie descriptions.
 *
 * @param {HTMLElement} trendingTable - The table where the row will be appended.
 * @param {Object} moviesDB - The database containing the movie data.
 * @param {number} maxCount - The maximum number of movies to display.
 * @return {void}
 */
function dataRow(trendingTable, moviesDB, maxCount) {
  // Create a new row element for the movie descriptions
  const descRow = document.createElement('tr');

  // Loop through each movie in the moviesDB results
  for (const movie of moviesDB.results.slice(0, maxCount)) {
    // Create a new cell element for the movie description
    const descCell = document.createElement('td');
    // Set the maximum width style of the cell to 50px
    descCell.style.maxWidth = '50px';

    // Create a new paragraph element for the movie title
    const titleholder = document.createElement('p');
    const title = document.createElement('b');
    // Set the text content of the title element to the movie's original title
    title.textContent = movie.original_title;
    // Append the title element to the titleholder paragraph
    titleholder.appendChild(title);
    // Append the titleholder paragraph to the description cell
    descCell.appendChild(titleholder);

    // Create a new paragraph element for the movie rating
    const rating = document.createElement('p');
    // Set the text content of the rating element to the movie's vote average
    rating.textContent = movie.vote_average;
    // Append the rating paragraph to the description cell
    descCell.appendChild(rating);

    // Create a new paragraph element for the movie release date
    const releaseDate = document.createElement('p');
    // Set the text content of the releaseDate element to the movie's release date
    releaseDate.textContent = movie.release_date;
    // Append the releaseDate paragraph to the description cell
    descCell.appendChild(releaseDate);

    // Append the description cell to the description row
    descRow.appendChild(descCell);
  }

  // Append the description row to the trending table
  trendingTable.appendChild(descRow);
}

/**
 * Renders the trending section with movies from the moviesDB.
 *
 * @param {Object} moviesDB - The database of movies
 * @return {void}
 */
function renderTrendingSection(moviesDB) {
  const trendingTable = document.createElement('table');
  const maxCount = 5;
  imageRow(trendingTable, moviesDB, maxCount);

  dataRow(trendingTable, moviesDB, maxCount);
  const main = document.getElementsByTagName('main')[0];
  main.appendChild(trendingTable);
}

renderTrendingSection(moviesDB);
