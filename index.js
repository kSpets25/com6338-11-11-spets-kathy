const getPoemBtn = document.getElementById('get-poem')
const poemEl = document.getElementById('poem')
const poemURL = 'https://poetrydb.org/random,linecount/1;12/author,title,lines.json'

const getJSON = url => fetch(url).then(res => res.json())

const pipe = (...fns) => firstArg => fns.reduce((returnValue, fn) => fn(returnValue), firstArg)

const makeTag = tag => str => `<${tag}>${str}</${tag}>`

// complete this function
//const makePoemHTML = () => {}
const makePoemHTML = (poemData) => { //get poem data

  const data = poemData[0] 
  console.log('poem', (poemData))

  const title = makeTag('h2')(data.title)
  const author = pipe(makeTag('em'), (makeTag('h3')))("by:  " + data.author)

  const lineBr = makeTag('br')
  const lines = makeTag('p')(data.lines)

  const thePoem = `${title} ${author} ${lines}`
  return thePoem
}



// attach a click event to #get-poem
getPoemBtn.onclick = async function() {
  // renders the HTML string returned by makePoemHTML to #poem
  poemEl.innerHTML = makePoemHTML(await getJSON(poemURL))
}
