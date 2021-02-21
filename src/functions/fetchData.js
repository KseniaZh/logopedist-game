function fetchData(url, method, body) {

    return fetch(url, {

        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
}
export default fetchData