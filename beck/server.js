const app = require('./app')
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`✅ EMR server is running at http://localhost:${PORT}`)
})
