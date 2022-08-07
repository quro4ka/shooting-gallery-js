let shot = document.querySelector('.shot')
let hit = document.querySelector('.hit')
let count = document.querySelector('.count span')

let counter = 0

document.body.addEventListener('click', playShot)

function playShot(e)  {
    let element = e.target

    if (element.classList.contains('character')) {
        hit.play()
        counter++
        count.textContent = counter;
        element.classList.add('die')
    } else {
        shot.play()
    }
}



