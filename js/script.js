let input = document.querySelector(".search-countainer input")
let button = document.querySelector(".search-countainer button")
let Message = document.querySelector(".Message")


// items 
let img = document.querySelector(".poster img")
let Title = document.querySelector(".Title")
let Ratings = document.querySelector(".Ratings")
let Runtime = document.querySelector(".Runtime")
let Released = document.querySelector(".Released")
let Country = document.querySelector(".Country")
let Genre = document.querySelector(".Genre")
let Language = document.querySelector(".Language")
let Plot = document.querySelector(".Plot")
let Actors = document.querySelector(".Actors")





button.addEventListener("click", () => {
    let movieName = input.value 
    url = `http://www.omdbapi.com/?t=${movieName}&apikey=10912a6f`
    fetch(url).then((result) => {
        return result.json()
    }).then((data) => {
        if (data.Response === "True") {
            Message.style.visibility = "hidden"
            img.src = data.Poster
            Title.innerHTML = data.Title
            Ratings.innerHTML = data.Ratings[0].Value.slice(0,3)
            Runtime.innerHTML = data.Runtime
            Released.innerHTML = data.Released
            Country.innerHTML = data.Country
            Plot.innerHTML = data.Plot
            Actors.innerHTML = data.Actors
            Language.innerHTML = data.Language
            Genre.innerHTML = data.Genre
        } else {
            Message.style.visibility = "visible"
        }
    });
});
