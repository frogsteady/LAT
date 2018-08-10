import axios from "axios";


module.exports = function (errorHandling) {

    return {
        createUser: function (userJson) {
            return axios.post('/rest/1/user',
                userJson,
                {}
            )
                .then(function (response) {
                    console.log(response);
                    return response
                })
                .catch(errorHandling)
        },
    }
};