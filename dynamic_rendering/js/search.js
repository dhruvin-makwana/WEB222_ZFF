//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function getJsonFromUrl(url) {
  if (!url) url = location.search;
  const query = url.substr(1);
  const result = {};
  query.split('&').forEach(function(part) {
    const item = part.split('=');
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}
function getResults() {
  const query = getJsonFromUrl();
  console.log(query);
  const searchResults = moviesDB.results.filter((movie) => {
    return movie.original_title
        .toLowerCase()
        .includes(query.movie.toLowerCase());
  });
  document.getElementById('search-result-heading').textContent = `Search results for "${query.movie}"`;
  generateHTML(searchResults);
  console.log(searchResults);
}

function generateHTML(searchResults) {
  const table=document.getElementById('search-table');

  for (const movie of searchResults) {
    const row = document.createElement('tr');

    const imagetd = document.createElement('td');
    const image = document.createElement('img');
    image.src = movie.image;
    image.alt = '';
    image.srcset = '';
    image.setAttribute('width', '150');
    imagetd.appendChild(image);
    row.appendChild(imagetd);

    const title = document.createElement('td');
    title.textContent = movie.original_title;
    row.appendChild(title);

    const rating = document.createElement('td');
    rating.textContent = movie.vote_average;
    row.appendChild(rating);

    const releaseDate = document.createElement('td');
    releaseDate.textContent = movie.release_date;
    row.appendChild(releaseDate);

    table.appendChild(row);
  }
}

getResults();
