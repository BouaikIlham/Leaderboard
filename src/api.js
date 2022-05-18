import axios from "axios";


const getScores = async () => {
    let result
    await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HIrp1eplMX8i80HNnMCg/scores')
        .then((response) => {
            result = response.data.result
        })
        .catch( (error) => {
            console.log(error);
        })

        return result
}


export {getScores}