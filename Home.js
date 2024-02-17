fetch("https://dogs-care.onrender.com/api/dogs_care")
  .then((response) => response.json())
  .then((data) => {
    displayDogData(data);
  })
  .catch((error) => console.error("Error fetching data:", error));

function displayDogData(data) {
  const dogList = data[0];
  console.log(dogList.image1);
  document.getElementById("dogImage1").src = dogList.image1;
  document.getElementById("heading").innerHTML = dogList.text_title;
  document.getElementById("subHeading").innerHTML = dogList.text_summary;
}

displayDogData();
