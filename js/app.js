document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete');
  deleteButton.addEventListener('click', handleDeleteSubmit);
});

const handleFormSubmit = function (event) {
  event.preventDefault();

  // grab input values
  const commonName = this.common.value;
  const sciName = this.scientific.value;
  const status = this.status.value;

  // create html div to contain new additions
  const newListItem = document.createElement('div');
  newListItem.classList.add('animal-added');
  const list = document.querySelector('.list-container');
  list.appendChild(newListItem);

  // create child elements within div to contain the text and values
  const itemHeader = document.createElement('p');
  itemHeader.classList.add('name');
  newListItem.appendChild(itemHeader);
  const itemLatin = document.createElement('p');
  itemLatin.classList.add('latin');
  newListItem.appendChild(itemLatin);
  const itemStatus = document.createElement('p');
  itemStatus.classList.add('status');
  newListItem.appendChild(itemStatus);

  // input form values
  itemHeader.textContent = `${ commonName }`;
  itemLatin.textContent = `${ sciName }`;
  itemStatus.textContent = `${ status }`

  // reset to empty form
  this.reset();

};

const handleDeleteSubmit = function (event) {
  const list = document.querySelector('.list-container');
  list.innerHTML = '';
};
