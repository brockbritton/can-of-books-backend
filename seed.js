
'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./model/book.js');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)
.then(() => {
  let brave_new_world = new Book({ title:"Brave New World", description: "A book about a possible future", status: true });
  let book_1984 = new Book({ title:"1984", description: "A book about a possible future", status: false });
  let charlottes_web = new Book({ title:"Charlotte's Web", description: "A book about friendship", status: true });
  brave_new_world.save()
  book_1984.save()
  charlottes_web.save()
  
}).catch(e => console.error(e));