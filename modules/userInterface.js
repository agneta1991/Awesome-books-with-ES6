const addNewhandleClick = (inputsdiv, dynamicList, contactForm) => {
  inputsdiv.style.display = 'flex';
  dynamicList.style.display = 'none';
  contactForm.style.display = 'none';
};

const contactHandleClick = (contactForm, inputsdiv, dynamicList) => {
  contactForm.style.display = 'flex';
  inputsdiv.style.display = 'none';
  dynamicList.style.display = 'none';
};

const listitemHandleClick = (contactForm, inputsdiv, dynamicList) => {
dynamicList.style.display = 'block';
inputsdiv.style.display = 'none';
contactForm.style.display = 'none';
};

export { contactHandleClick, addNewhandleClick, listitemHandleClick };
