import exampleImg from './img/example.png'
import exampleFont_1 from './fonts/roboto-serif-v7-latin-900.svg'
import exampleFont_2 from './fonts/roboto-serif-v7-latin-900italic.svg'
import exampleFont_3 from './fonts/roboto-serif-v7-latin-italic.svg'
import exampleFont_4 from './fonts/roboto-serif-v7-latin-regular.svg'
import './styles/main.scss'

console.log('Webpack Work!')

class Game {
    name = 'Violin Charades'
}

const myGame = new Game();

const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

const heading = document.createElement('h1')
heading.textContent = "webpack template / JS also work!"

const app = document.querySelector('#root')
app.append(heading)
