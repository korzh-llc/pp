let locations = document.querySelector('.locations')

let locArr = []

class Location{
    constructor(image , name){
        this.image = image
        this.name = name
    }
    tohtml(){
        return `<div class="location">
                        <img src="${this.image}" class="location__img">
                        <h3 class="location__name">${this.name}</h3>
                    </div>`
    }
}

locArr.push(new Location("images/location1.jpeg" , "EMBANKMENT"))
locArr.push(new Location("images/location2.jpeg" , "KYLSHAKTY RIVER"))
locArr.push(new Location("images/location3.jpeg" , "REMOTE PLACE"))

for( i = 0 ; i < locArr.length ; i++){
    locations.innerHTML += locArr[i].tohtml()
}





let problems = document.querySelector('.problems')

let proArr = []

class Problem{
    constructor(image , text){
        this.image = image
        this.text = text
    }
    tohtml(){
        return `<div class="problem">
                    <img src="${this.image}" class="problem__img">
                    <h2 class="problem__text">${this.text}</h2>
                </div>`
    }
}

proArr.push(new Problem("images/3lakeside1.png" , "Lakeside pollution"))
proArr.push(new Problem("images/1lakeside2.png" , "Water pollution"))
proArr.push(new Problem("images/location1.jpeg" , "Waste management"))

for( i = 0 ; i < proArr.length ; i++){
    problems.innerHTML += proArr[i].tohtml()
}





let solutions = document.querySelector('.solutions')

let solArr = []

class Solution{
    constructor(image, text){
        this.image = image
        this.text = text
    }
    tohtml(){
        return `<div class="solution">
                    <img src="${this.image}" class="solution__img">
                    <h2 class="solution__text">${this.text}</h2>
                </div>`
    }
}
solArr.push(new Solution("images/solution1.png" , "Waste removal"))
solArr.push(new Solution("images/solution3.png" , "Recreation limits"))
solArr.push(new Solution("images/solution2.png" , "Water treatment"))

for( i = 0 ; i < solArr.length ; i++){
    solutions.innerHTML += solArr[i].tohtml()
}



const images = document.querySelectorAll('.slider__img')
const controlls = document.querySelectorAll('.controlls')
let imageIndex = 0

function show(index){
    images[imageIndex].classList.remove('active')
    images[index].classList.add('active')
    imageIndex = index
}

controlls.forEach((e) =>{
    e.addEventListener('click' , () => {
    if(event.target.classList.contains('prev')) {
        let index = imageIndex - 1

        if(index < 0){
            index = images.length - 1
        }
        show(index)
    } else if (event.target.classList.contains('next'))
    {
        let index = imageIndex + 1
        if (index >= images.length){
            index = 0
        }
        show(index)
    }
})
})

setInterval(() => {
  let index = imageIndex + 1;
  if (index >= images.length) index = 0;
  show(index);
}, 2000);

show(imageIndex)




function donate() {
  const amount = document.getElementById('amount').value;
  const message = document.getElementById('message');

  if (!amount || amount <= 0) {
    message.textContent = "Please enter a valid amount.";
    message.style.color = "red";
    return;
  }

  message.textContent = `Thank you for donating $${amount}! ❤️`;
  message.style.color = "white";
}



const header = document.querySelector('header')
const headerText = document.querySelectorAll('.navigation')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})
