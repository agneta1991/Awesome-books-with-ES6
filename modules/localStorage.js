const titleFunction = (titleInput) => {
  window.localStorage.setItem('title', titleInput.value);
};

const authorFunction = (authorInput) => {
  window.localStorage.setItem('author', authorInput.value);
};

export { titleFunction, authorFunction };
