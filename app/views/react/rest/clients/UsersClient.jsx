import axios from "axios";


module.exports = function (errorHandling) {

    getBaseUrl = () => ""

    return {
        createUser: function (userJson) {
            return axios.post(getBaseUrl() + '/rest/user',
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
}