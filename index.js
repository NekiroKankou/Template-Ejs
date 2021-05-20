const express = require('express')
var path = require('path');
const app = express();
const port = 53653;
// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static(__dirname + '../public'));

const nama = 'Sekolah Harapan Nusa';
const siswa = [{"nama":"Putri","kelas":"1"},{"nama":"Bambang","kelas":"5"},{"nama":"Hadi","kelas":"2"},{"nama":"Sudan","kelas":"6"}]
siswa = siswa.map(x => `<div class="card"><p>Nama : ${x.name}</p>
<p>Kelas : ${x.kelas}</p></div>`
app.get('/',async (req, res) => {
  res.render('index', {siswa:siswa,sekolah:nama})
})
