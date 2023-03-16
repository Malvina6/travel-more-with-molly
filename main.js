let formBtn = document.querySelector('.icons');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('.form-close');
let menu = document.querySelector('.menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

const title = document.querySelector("#title");
const text = document.querySelector("#text");
const imageUpload = document.querySelector("#imageUpload");
const addBtn = document.querySelector("#addBtn");
const displayArea = document.querySelector("#display");
const defaultImage = "https://img.freepik.com/free-vector/hand-drawn-flat-design-no-photo-sign_23-2149278078.jpg?w=740&t=st=1678646823~exp=1678647423~hmac=4e79a0639cc44910d55bc79bd36ce2f704da3ee211032f5ecb75410b14e3bcda"
let count = 0;
addBtn.addEventListener("click", () => {
  display(title.value, text.value, count);
  count++;
});




formBtn.addEventListener('click', () =>{
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
  });

  menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

  });

  videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#video-slider').src = src;
 });

  });


  function validateInput(title, text) {
    return title === "" || text === "";
  }
  
  function display(title, text, id) {
    if (!validateInput(title, text)) {
      displayArea.innerHTML += `
      <tr id="${id}">
        <td><div class="flex-center">${title}</div></td>
        <td><div class="flex-center">${text}</div></td>
        <td><div class="flex-center"><img src="" alth="Could not load image" id="img${id}"></div></td>
        <td><div class="flex-center"><button class="btn btn-danger" onclick="remove('${id}')">Remove</button></div></td>
      </tr>
    `;
      imageToString(id);
      clearValues();
    } else {
      displayError('Error', 'Input must be filled!', 'error');
    }
  }
  
  function remove(id) {
    document.getElementById(id).remove();
  }
  
  function imageToString(id) {
    const image = document.querySelector(`#img${id}`);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(imageUpload.files[0]);
      reader.onload = () => {
        image.src = reader.result;
      }
    } catch (error) {
      image.src = defaultImage;
    }
  }
  
  function clearValues() {
    title.value = "";
    text.value = "";
    imageUpload.value = "";
  }
  
  function displayError(title, text, icon) {
    Swal.fire({ title, text, icon });
  }