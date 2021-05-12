const span = (text, index) => {
  const node = document.createElement('span')

  node.textContent = text
  node.style.setProperty('--index', index)

  return node
}

const byLetter = text => [...text].map(span)

const byWord = text => text.split(' ').map(span)

export {
  byLetter,
  byWord,
}