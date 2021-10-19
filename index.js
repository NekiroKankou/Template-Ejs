const express = require('express')
const app = express();
const port = 8000; //Select Port To Use

// View Engine Setup
app.set('view engine', 'ejs')
// Static File Setup
app.use(express.static(__dirname + '../public'));

//Usage Example
const nama = 'Sekolah Harapan Nusa';
const siswa = [{"nama":"Putri","kelas":"1"},{"nama":"Bambang","kelas":"5"},{"nama":"Hadi","kelas":"2"},{"nama":"Sudan","kelas":"6"}]
siswa = siswa.map(x => `<div class="card"><p>Nama : ${x.name}</p>
<p>Kelas : ${x.kelas}</p></div>`
app.get('/',async (req, res) => {
  res.render('index', {siswa:siswa,sekolah:nama})
})

app.listen(port) //Must Have
