const box = document.querySelectorAll('.box')
console.log(box)

box.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item)
    })
})