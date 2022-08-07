let shot = document.querySelector('.shot')
let hit = document.querySelector('.hit')
let count = document.querySelector('.count span')
let guns = document.querySelector('.guns')

let counter = 0

window.addEventListener('mousemove',function(ev){(function(e){
    e.style.left = ev.clientX - 100 +"px";
    e.style.top = ev.clientY + 200 +"px";
})(document.querySelector('.gun'))},false);

document.body.addEventListener('click', playShot)

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


