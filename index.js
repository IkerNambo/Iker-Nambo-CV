
const body = document.body
const moon = document.getElementById('moon')
const sun = document.getElementById('sun')

function toggleTheme(){
    body.classList.toggle('darkmode')
    console.log(body.classList)
    console.log('hi')
    if(body.classList.contains('darkmode')){
        moon.classList.add('hide')
        sun.classList.remove('hide')
    } else {
        moon.classList.remove('hide')
        sun.classList.add('hide')
    }
}

