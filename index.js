import { updateTime } from './modules/dateAndTime.js';

class BookManager {
  static init() {
    const initial = new BookManager();
    return initial;
  }

  constructor() {
    this.books = [];
    this.bookAddition = document.getElementById('addBook');
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.dynamicList = document.querySelector('.dynamicList');
    this.inputsdiv = document.querySelector('.inputsDiv');
    this.listitem = document.querySelector('#list');
    this.addNew = document.querySelector('#addnew');
    this.contact = document.querySelector('#contact');
    this.contactForm = document.querySelector('.contact-form');
    this.listitem.addEventListener('click', () => {
      this.dynamicList.style.display = 'block';
      this.inputsdiv.style.display = 'none';
      this.contactForm.style.display = 'none';
    });
    this.addNew.addEventListener('click', () => {
      this.inputsdiv.style.display = 'flex';
      this.dynamicList.style.display = 'none';
      this.contactForm.style.display = 'none';
    });

    this.contact.addEventListener('click', () => {
      this.contactForm.style.display = 'flex';
      this.inputsdiv.style.display = 'none';
      this.dynamicList.style.display = 'none';
    });

    this.addBook = this.addBook.bind(this);
    this.updateButtonState = this.updateButtonState.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
    this.removeBook = this.removeBook.bind(this);

    this.bookAddition.addEventListener('click', this.addBook);
    this.titleInput.addEventListener('input', this.updateButtonState);
    this.authorInput.addEventListener('input', this.updateButtonState);

    this.renderBooks();

    const storedTitle = window.localStorage.getItem('title');
    const storedAuthor = window.localStorage.getItem('author');
    if (storedTitle) {
      this.titleInput.value = storedTitle;
    }
    if (storedAuthor) {
      this.authorInput.value = storedAuthor;
    }

    this.titleInput.addEventListener('input', () => {
      window.localStorage.setItem('title', this.titleInput.value);
    });
    this.authorInput.addEventListener('input', () => {
      window.localStorage.setItem('author', this.authorInput.value);
    });
  }

  updateButtonState() {
    if (!this.titleInput.value
      || !this.authorInput.value
      || this.titleInput.value.trim() === ''
      || this.authorInput.value.trim() === '') {
      this.bookAddition.disabled = true;
    } else {
      this.bookAddition.disabled = false;
    }
  }

  renderBooks() {
    this.dynamicList.innerHTML = '';

    const timeP = document.getElementById('time');

    updateTime(timeP);
    setInterval(() => {
      updateTime(timeP);
    }, 1000);
    

    const storedBooks = JSON.parse(window.localStorage.getItem('books'));
    if (storedBooks) {
      this.books = storedBooks;
      this.books.forEach((book, i) => {
        const bookEntry = document.createElement('div');
        if (i % 2 !== 0) {
          bookEntry.style.backgroundColor = 'lightgrey';
        }

        bookEntry.innerHTML = `
          <p>"${book.title}" by ${book.author}</p>
          <button class="removebtn">Remove</button>
        `;

        const removeBtn = bookEntry.querySelector('.removebtn');
        removeBtn.addEventListener('click', () => {
          this.removeBook(book);
        });
        this.dynamicList.appendChild(bookEntry);
      });
    }
  }

  addBook() {
    if (!this.bookAddition.disabled) {
      const title = this.titleInput.value.trim();
      const author = this.authorInput.value.trim();

      if (title !== '' && author !== '') {
        const book = {
          title,
          author,
        };
        this.books.push(book);
        window.localStorage.setItem('books', JSON.stringify(this.books));

        this.renderBooks();

        this.titleInput.value = '';
        this.authorInput.value = '';
      }
    }
  }

  removeBook(book) {
    this.books = this.books.filter((e) => e.title !== book.title && e.author !== book.author);
    window.localStorage.setItem('books', JSON.stringify(this.books));
    this.renderBooks();
  }
}

BookManager.init();
