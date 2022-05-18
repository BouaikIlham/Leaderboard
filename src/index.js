import { getScores, createScore } from './api.js'
const listOfScores = document.querySelector('.scores')
const user = document.getElementById('name')
const score = document.getElementById('score')


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

const form = document.getElementById('form')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    await createScore(user.value , score.value)
    form.reset()
})