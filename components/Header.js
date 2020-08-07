// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
    const headWrp = document.createElement('div')
    headWrp.classList.add('header')
    
    const date = document.createElement('span')
    date.classList.add('date')
    date.textContent = 'MARCH 28, 2020'
    
    const heading = document.createElement('h1')
    heading.textContent = 'Lambda Times'
    
    const tmp = document.createElement('span')
    tmp.textContent = '98°'
    
    headWrp.appendChild(date)
    headWrp.appendChild(heading)
    headWrp.appendChild(tmp)
    
    
    return headWrp

}

const head = document.querySelector('.header-container')
head.appendChild(Header())




