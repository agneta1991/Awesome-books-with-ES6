function titleFunction() {
  window.localStorage.setItem('title', this.titleInput.value);
}

function authorFunction() {
  window.localStorage.setItem('author', this.authorInput.value);
}

export { titleFunction, authorFunction };