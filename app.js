const people = [
    {name: "Ann", street: "Ann street", city: "Ann city", state: "Ann state", country: "Ann country", telephone: "Ann telephone", birthday: "Ann birthday"},
    {name: "Jane", street: "Jane street", city: "Jane city", state: "Jane state", country: "Jane country", telephone: "Jane telephone", birthday: "Jane birthday"},
    {name: "Lucy", street: "Lucy street", city: "Lucy city", state: "Lucy state", country: "Lucy country", telephone: "Lucy telephone", birthday: "Lucy birthday"},
    {name: "Lily", street: "Lily street", city: "Lily city", state: "Lily state", country: "Lily country", telephone: "Lily telephone", birthday: "Lily birthday"},
    {name: "Mary", street: "Mary street", city: "Mary city", state: "Mary state", country: "Mary country", telephone: "Mary telephone", birthday: "Mary birthday"},
  ];

let names = document.querySelector('#names');
let info = document.querySelector('#info');
let name = document.querySelector("#name");
let street = document.querySelector('#street');
let city = document.querySelector('#city');
let state = document.querySelector('#state');
let country = document.querySelector('#country');
let telephone = document.querySelector('#telephone');
let birthday = document.querySelector('#birthday');

let fnName = function(item){
let divName = document.createElement('div');
divName.classList.add('nameDiv')
divName.textContent = item.name;
names.prepend(divName);
}

let fnRendernames = function(e){
  let targetDiv = people.find((item)=>item.name==e.target.textContent);
  name.textContent=targetDiv.name;
  street.textContent=targetDiv.street;
  city.textContent=targetDiv.city;
  state.textContent=targetDiv.state;
  country.textContent=targetDiv.country;
  telephone.textContent=targetDiv.telephone;
  birthday.textContent=targetDiv.birthday;
  let divs = document.querySelectorAll('.nameDiv');
  divs.forEach((item)=>{
    item.style.backgroundColor = 'aquamarine';
    item.style.color = 'black';
  } )
  e.target.style.backgroundColor = 'blue';
  e.target.style.color = 'white';
}


people.map(fnName);

names.addEventListener('click', fnRendernames);