# Template EJS & Express

Ejs Can Help You Write JavaScript Into Websites, Like Calling Names / Other Data

# Example
In Index.js Express
```javascript
app.get('/', (req, res) => {
  res.render('file.ejs', {name:'Budi Setiawan'})
})
```html
<p class="name"><%- name -%></p>
```

