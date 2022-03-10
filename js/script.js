const box = document.querySelector('.box')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const oval = document.querySelector('.oval')


red.addEventListener('click', (()=>{
	box.classList.toggle('red')
}))

blue.addEventListener('click', (()=>{
	box.classList.toggle('blue')
}))

oval.addEventListener('click', (()=>{
	box.classList.toggle('square');
}))


const inpName = document.querySelector('.name')
const btnGo = document.querySelector('.go')
const btnClean = document.querySelector('.clean')



btnClean.addEventListener('click', (()=>{
   inpName.value = ' '
}))

btnGo.addEventListener('click', (()=>{
	if(inpName.value){
		alert(`Добро пожаловать ${inpName.value}!!!`)
	} else {
		alert('Введите имя....!!!')
	}

}))

const col = document.querySelectorAll('.col-2')


col.forEach((item)=>{
	item.addEventListener('click',(()=>{
		col.forEach((item)=>{
			item.classList.remove('backgroundCol')
		})
		item.classList.add('backgroundCol')
	}))

})

