const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY"
});

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result[0].breeds[0].name);
        console.log(result[0].url);
        console.log(result[0].breeds[0].wikipedia_url);

        let imgElement = document.querySelector("#cat-image");
        imgElement.src = result[0].url;

        let breedElement = document.querySelector("#name-breed");
        breedElement.textContent = result[0].breeds[0].name;

        let wikipediaLink = document.querySelector("#breed-link");
        wikipediaLink.href = result[0].breeds[0].wikipedia_url;
    })
    .catch(error => console.log('error', error));