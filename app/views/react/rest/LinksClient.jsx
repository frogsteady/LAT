import axios from "axios";


module.exports = {
    getAllLinks: function () {
        return axios.get('/rest/1/links', {}, {})
            .then(function (response) {
                return response
            })
    },
};