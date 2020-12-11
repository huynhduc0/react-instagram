
/**
 * Fetch data from given url
  @param {} url
  @param {} body
 */
var base_url = "http://congchuabuoito.southeastasia.cloudapp.azure.com/"
const fetchJSON = (url, body, method = {}) => {
    const options = {
        body: JSON.stringify(body),
        method: method,
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(base_url+url, options)
        .then((response) => {
            if (!response.status === 200) {
                throw response.json();
            }
            return response.json();
        })
        .then((json) => {
            return json;
        })
        .catch((error) => {
            throw error;
        });
};

export { fetchJSON };