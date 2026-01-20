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







let imgs = document.querySelector('.places')

let imgArr = []

class Image{
    constructor(image){
        this.image = image
    }
    tohtml(){
        return `<div class="place">
                    <img src="${this.image}" class="place__img">
                </div>`
    }
}

imgArr.push(new Image("images/water1.png"))
imgArr.push(new Image("images/2lakeside2.png"))
imgArr.push(new Image("images/water3.png"))
imgArr.push(new Image("images/water4.png"))

for( i = 0 ; i < imgArr.length ; i++){
    imgs.innerHTML += imgArr[i].tohtml()
}


let lakesides = document.querySelector('.lakesides')

let lakArr = []

class Lakeside{
    constructor(image){
        this.image = image
    }
    tohtml(){
        return `<div class="place">
                    <img src="${this.image}" class="lakeside__img">
                </div>`
    }
}

lakArr.push(new Lakeside("images/1lakeside3.png"))
lakArr.push(new Lakeside("images/2lakeside1.png"))
lakArr.push(new Lakeside("images/3lakeside1.png"))
lakArr.push(new Lakeside("images/location1.jpeg"))

for( i = 0 ; i < lakArr.length ; i++){
    lakesides.innerHTML += lakArr[i].tohtml()
}


let samples = document.querySelector('.samples')

let samArr = []

class Samples{
    constructor(image){
        this.image = image
    }
    tohtml(){
        return `<div class="place">
                    <img src="${this.image}" class="samples__img">
                </div>`
    }
}

samArr.push(new Samples("images/sample1.png"))
samArr.push(new Samples("images/sample2.png"))
samArr.push(new Samples("images/sample3.png"))
samArr.push(new Samples("images/sample4.png"))

for( i = 0 ; i < samArr.length ; i++){
    samples.innerHTML += samArr[i].tohtml()
}



