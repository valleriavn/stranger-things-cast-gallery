document.addEventListener("DOMContentLoaded", function () {
  var containerRow = document.getElementById("container-row");

  for (var i = 0; i < people.length; i++) {
    containerRow.innerHTML += `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card st-card shadow-lg h-100" data-index="${i}">
          <div class="st-img-wrapper">
            <img src="${people[i].picture}" class="card-img-top st-img" alt="${people[i].firstName} ${people[i].lastName}">
            <div class="st-overlay"></div>
          </div>
          <div class="card-body st-card-body">
            <h5 class="card-title st-name">${people[i].firstName} ${people[i].lastName}</h5>
            <p class="card-text st-character">
              ${people[i].character}
            </p>
          </div>
        </div>
      </div>
    `;
  }

  var cards = document.querySelectorAll(".st-card");
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      var index = this.getAttribute("data-index");
      showCastDetails(index);
    });
  });
});

function showCastDetails(index) {
  var person = people[index];

  var modalTitle = document.getElementById("castModalLabel");
  var modalImage = document.getElementById("modalImage");
  var modalCharacter = document.getElementById("modalCharacter");
  var modalDescription = document.getElementById("modalDescription");
  var modalQuote = document.getElementById("modalQuote");

  modalTitle.textContent = person.firstName + " " + person.lastName;
  modalImage.src = person.picture;
  modalImage.alt = person.firstName + " " + person.lastName;
  modalCharacter.textContent = person.character;
  modalDescription.textContent = person.description;
  modalQuote.textContent = '"' + person.quote + '"';

  var castModal = new bootstrap.Modal(document.getElementById("castModal"));
  castModal.show();
}
