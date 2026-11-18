//from fastapi import FastAPI

import { nowPlaying, genres, details } from './00_data.js'

console.log(nowPlaying)

const movies = nowPlaying.results
const first = movies[0] 
console.log(first)

console.log(`$(fist.title) ($(first.release_date}) 평점 : ${first.vote_average}`)

console.log(movies.length, nowPlaying.totla_results)

const myArray = [1,2,3]
const result = myArray.map(n => n*2)
console.log(result)

const titles = movies.map(movie => movie.title)
console.log(titles)

console.log(movies.filter(movie => movie.vote_average > 8).map(movie=>movie.title))

const g = genres.find(genre => genre.id == 878)
console.log(g)

const sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);
const top3 = sortedMovies.slice(0, 3)
console.log(top3.map(m => m.title))

console.log(first)
const {id,title,vote_average} = first
// const id = first.id
// const title = first.title
// const vote_averate
console.log(id, title, vote_average)

const fall = details[0]
//fall['credits']
const directors = fall.credits.crew.filter(c => c.job == 'Director').map(c => c.name)
console.log(didrector)

const wished = {...first, wish: true }

const findResult = details[2].videos.results.find(v => v.type == 'Trailer').key
if (findResult) {
    console.log(findResult.key)
} else {
    console.log('none')
}

console.log(findResult || '없음')