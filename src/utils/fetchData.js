export const fetchData = async(url) => {
    const data = await fetch(url)
            .then((data) => data.json())
    return data
}