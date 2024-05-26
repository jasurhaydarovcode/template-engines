### Hi, You will find installation and information about `Template Engines` in this repo

#### For suggestions and additions `jasurbekhaydarovcode@gmail.com`

## ___There are 3 most popular template engines___

- PUG
- HANDLEBARS
- EJS

---

## start 
```bash
npm init -y
```

## add script code `package.json`
```json
"scripts": {
    "start": "node index.js"
  },
```

#### main point `index.js `

# Template Engines

# <img align='center' src="https://skillicons.dev/icons?i=pug" alt="PUG" title="PUG" width='60'> PUG

#### Pug, formerly known as Jade, is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. It simplifies HTML generation by using a clean, minimal syntax, making your templates more readable and maintainable.

### Key features of Pug include:

- Whitespace Sensitivity: Pug uses indentation to determine the structure of the HTML, reducing the need for closing tags.
- Clean Syntax: The syntax is concise and eliminates much of the boilerplate code found in traditional HTML.
- Logic in Templates: Pug supports JavaScript expressions, loops, and conditionals directly in the template.
- Mixins and Inheritance: Allows you to create reusable chunks of templates (mixins) and extend templates to avoid repetition.

## 🌱 Install
```bash
npm install pug
```

## 1. Use in an Express.js application:

```js
const express = require('express');
const app = express();

// Set the view engine to Pug
app.set('view engine', 'pug');

// Create a route
app.get('/', function (req, res) {
    res.render('index', { title: 'Hello', message: 'This is a Pug example.' });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

```

## 2. Create a template:
For example, create a file named index.pug in the views folder with the following content:

```pug
doctype html
html
  head
    title= title
  body
    h1= title
    p= message

```

## 4. Send data to the template:
Inject data within a route, as shown in the previous code snippet. The ` = ` syntax is used to interpolate JavaScript values directly into the HTML.

---

# <img align='center' src="https://handlebarsjs.com/images/handlebars_logo.png" alt="hbs" title="Handlebars" width='60'> HANDLEBARS

<img src="https://img.shields.io/npm/v/express-handlebars.svg?style=flat-square" alt="npm version logo">

## 🌱 Install
```bash
npm i express-handlebars
```

## 1. Use in an Express.js application:
```js
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

// Set up the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Create a route
app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

```

## 2. Create a template:
For example, create a file named home.handlebars in the views folder and write your HTML with Handlebars syntax:

```handlebars
<h1>{{title}}</h1>
<p>{{message}}</p>
```

## 3. Send data to the template: 
Inject data within a route:

```js
app.get('/', function (req, res) {
    res.render('home', { title: 'Hello', message: 'This is an Express-Handlebars example.' });
});

```


---

# <img align='center' src="https://ejspr.com/app/uploads/2021/03/EJS-Monogram_Grass-Green_High-Res.png" alt="ejs" title="EJS" width='60'> EJS

## 🌱 Install
```bash
npm install ejs
```

## 1. Use in an Express.js application:

```js
const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Create a route
app.get('/', function (req, res) {
    res.render('index', { title: 'Hello', message: 'This is an EJS example.' });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

```

## 2. Create a template:
For example, create a file named index.ejs in the views folder with the following content:

```html
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <p><%= message %></p>
</body>
</html>

```

## 3. Send data to the template:
Inject data within a route, as shown in the previous code snippet. The <%= %> syntax is used to output the values of JavaScript expressions, while <% %> can be used to execute JavaScript code without outputting it.

---

### you can install all three template engines in one
#### pug, handlebars and ejs
```bash
npm install --save pug ejs express-handlebars
```