export function slider1() {
    const btnBack = document.querySelector('.interesting__btn--back')
    const btnForward = document.querySelector('.interesting__btn--forward')
    const pag1 = document.getElementById(slidePg1)
    const pag2 = document.getElementById(slidePg2)
    const pag3 = document.getElementById(slidePg3)
    const pag4 = document.getElementById(slidePg4)
    const pag5 = document.getElementById(slidePg5)
    const posts = []
    posts.push(document.getElementById(interesting1))
    posts.push(document.getElementById(interesting2))
    posts.push(document.getElementById(interesting3))
    posts.push(document.getElementById(interesting4))
    posts.push(document.getElementById(interesting5))

    btnBack.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('work')
    })
}