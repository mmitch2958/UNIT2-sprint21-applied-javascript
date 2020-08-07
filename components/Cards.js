// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
function cardCreator({ headline, authorPhoto, authorName }) {
   //Construct the components 
    const cardWrapper = document.createElement('div')
    const name = document.createElement('span')
    const heading = document.createElement('div')
    const author = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    //Construct the data source 
    cardWrapper.className = 'card'
    author.className = 'author'
    imageContainer.className = 'img-container'
    name.textContent = `By ${authorName}`
    heading.textContent = `${headline}`
    heading.classList.add('headline')
    image.src = authorPhoto
   
    
    //append the data 
    cardWrapper.appendChild(heading)
    cardWrapper.appendChild(author)
    author.appendChild(imageContainer)
    imageContainer.appendChild(image)
    author.appendChild(name)

  console.log(cardWrapper)
  return cardWrapper
}

const articlesURL = 'https://lambda-times-api.herokuapp.com/articles'

axios.get(articlesURL)
  .then((value) => {
    const articles = value.data.articles
    const cardContainer = document.querySelector('.cards-container')

    for (let topics in articles) {
      articles[topics].forEach((item) => {
        cardContainer.appendChild(cardCreator(item))
      })
    }

    function createCard(type) {
      type.forEach((item) => {
        cardContainer.appendChild(cardCreator(item))
      })
    }

    const card = document.querySelectorAll('.card')
    card.forEach((card) => {
      const heading = card.querySelector('.headline')
      card.addEventListener('click', () => {
        console.log(heading.textContent)
      })
    })

  })
  .catch((elm) => {
    console.log(elm)
  })