export async function load(){
    const res = await fetch('https://api.punkapi.com/v2/beers')
    const beers = await res.json()

    return {
        beers
    }
}