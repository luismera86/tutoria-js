const input = document.querySelectorAll('input');

// Registro de Adoptantes

const userName = document.querySelector('#userName');
const userPhone = document.querySelector('#userPhone');
const userAddress = document.querySelector('#userAddress');
const btnUserRegister = document.querySelector('#btnUserRegister');
let users = [];

const registerUser = () => {
  const user = {
    userName: userName.value,
    userPhone: userPhone.value,
    userAddress: userAddress.value,
  };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

btnUserRegister.addEventListener('click', () => {
  if (userName.value === '' || userPhone.value === '' || userAddress.value === '') {
    alert();
  } else {
    registerUser();
    userName.value = '';
    userPhone.value = '';
    userAddress.value = '';
  }
});

// Registro de mascotas

const petName = document.querySelector('#petName');
const petAge = document.querySelector('#petAge');
const petImg = document.querySelector('#petImg');
const petType = document.querySelector('#petType');
const btnPetRegister = document.querySelector('#btnPetRegister');
const pets = JSON.parse(localStorage.getItem('pets')) || [];


const registerPets = () => {
  const pet = {
    petName: petName.value,
    petAge: petAge.value,
    petImg: petImg.value,
    petType: petType.value === '1' ? 'Gato' : 'Perro',
    petStatus: 'Sin Adoptar',
  };
  pets.push(pet)
  console.log(pets)
  localStorage.setItem('pets', JSON.stringify(pets));
  renderPets();
};

btnPetRegister.addEventListener('click', () => {
  if (petName.value === '' || petAge.value === '' || petType.value === '') {
    alert();
  } else {
    registerPets();
    petName.value = '';
    petAge.value = '';
    petImg.value = '';
    petType.value = '';
  }
});

const renderPets = () => {
  const petsStorage = JSON.parse(localStorage.getItem('pets'));
  const petList = document.querySelector('#petList');

  if (pets !== null) {

    petsStorage.forEach((pet) => {
      petList.innerHTML += `
      <th>${pet.petName}</th>
      <th>${pet.petAge}</th>
      <th>${pet.petType}</th>
      <th> <img class="img-fluid figure-img" src="${pet.petImg}" alt="Img pet"></th>
      <th>${pet.petStatus}</th>
      <th><button id='btnInfo' class='btn btn-info'>Adoptar</button></th>
      
      `;
    });
  }

};
// const btnInfo = document.querySelector('#btnInfo')

// btnInfo.addEventListener('')

const alert = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Debe completar todos los campos',
  });
};

renderPets();
