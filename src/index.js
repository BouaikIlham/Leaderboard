import { getScores } from './api.js'
const listOfScores = document.querySelector('.scores')


const showScores = (scores) => {
    listOfScores.textContent = ''
    scores.map(score => {
        const list = document.createElement('li')
        list.className = ('list')
        list.textContent = score.user + ":" + score.score
        listOfScores.appendChild(list)
    })
}

const refrechBtn = document.querySelector('.refrech-btn')

refrechBtn.addEventListener('click', async () => {
    const list = await getScores()
    showScores(list)
})



window.onload = async () => {
    const list = await getScores()
    showScores(list);
};