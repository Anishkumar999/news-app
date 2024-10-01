export const getNewsFromApi = async(q = 'all') => {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=847ac91c85a441a18c6eab1913dec37c`)

    let data = await response.json();

    return data.articles;
    

}