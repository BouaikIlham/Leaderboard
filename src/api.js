import axios from "axios";
const gameId = 'HNOxjEhF0ya84VTJccpZ'


const getScores = async () => {
    let result
    await axios.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`)
        .then((response) => {
            result = response.data.result
        })
        .catch((error) => {
            console.log(error);
        })

    return result
}

const createScore = async (user, score) => {
    await axios.post(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, { user: user, score: score })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

export { getScores, createScore }