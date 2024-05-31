const express = require('express');
const app = express();

const port = 5678

app.use(express.json())
app.get('/', (req, res) => {
  res.json('Welcome on API fors users')
})
// app.use('/api/users',)

app.listen(port, ()=> console.log(`[SERVER] is runnning on http://localhost:${port}`))