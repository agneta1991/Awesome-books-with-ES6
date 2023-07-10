const titleFunction = () => {
  window.localStorage.setItem('title', this.titleInput.value);
};

const authorFunction = () => {
  window.localStorage.setItem('author', this.authorInput.value);
};

export { titleFunction, authorFunction };
