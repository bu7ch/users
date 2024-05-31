const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5678

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/users_db');
  console.log(`[DATABASE] MongoDB connected !`)
}


app.use(express.json())
app.get('/', (req, res) => {
  res.json('Welcome on API fors users')
})
// app.use('/api/users',)

app.listen(port, ()=> console.log(`[SERVER] is runnning on http://localhost:${port}`))