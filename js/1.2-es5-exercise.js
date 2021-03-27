'use strict';

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (text) {
  this.text = text;
};

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

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