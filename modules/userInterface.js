const addNewhandleClick = () => {
  this.inputsdiv.style.display = 'flex';
  this.dynamicList.style.display = 'none';
  this.contactForm.style.display = 'none';
}

const contactHandleClick = () => {
  this.contactForm.style.display = 'flex';
  this.inputsdiv.style.display = 'none';
  this.dynamicList.style.display = 'none';
}

export { contactHandleClick, addNewhandleClick };