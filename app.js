let shot = document.querySelector('.shot')
let hit = document.querySelector('.hit')
let count = document.querySelector('.count span')
let selectGun = document.querySelector('.select-gun')
let gun = document.querySelector('.gun')
let table = document.querySelector('.table')

console.log(table)

selectGun.addEventListener('click', (e) => {
    const dataGun = e.target.dataset.gun
    console.log(e.target.dataset.gun)

    console.log(gun.src)
    gun.src = `./${dataGun}.png` || `./${dataGun}.jpg`
    console.log(gun.src)
})

let counter = 0

window.addEventListener('mousemove',function(ev){(function(e){
    e.style.left = ev.clientX - 100 +"px";
    e.style.top = ev.clientY + 200 +"px";
})(document.querySelector('.gun'))},false);

table.addEventListener('click', playShot)


function playShot(e)  {
    let element = e.target

    if (element.classList.contains('character')) {
        hit.stop()
        hit.play()
        counter++
        count.textContent = counter;
        element.classList.add('die')
        if (counter === 5) {
            setTimeout(replay, 1000)
        }
    } else {
        shot.stop()
        shot.play()
    }
}

function replay() {
    let died = document.querySelectorAll('.character')
    died.forEach(item => {
        item.classList.remove('die')
    })
    counter = 0
    count.textContent = counter
}

HTMLAudioElement.prototype.stop = function () {
    this.pause()
    this.currentTime = 0.0
}


