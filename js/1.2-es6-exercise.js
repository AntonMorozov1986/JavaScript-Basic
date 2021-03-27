'use strict';

class Post {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(text) {
    this.text = text;
  }
}

class AttachedPost extends Post {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }

  makeTextHighlighted() {
    this.highlighted = true;
  }
}

let userAuthor = 'Anton';
let userText = 'Hello World!!!';
let userDate = '24.03.2021';
const userPost = new Post(userAuthor, userText, userDate);
console.log(userPost);
userPost.edit('Новое сообщение');
console.log(userPost);
const userAttachedPost = new AttachedPost(userAuthor, userText, userDate);
console.log(userAttachedPost);
userAttachedPost.makeTextHighlighted();
console.log(userAttachedPost);