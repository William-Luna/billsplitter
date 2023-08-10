const app = require('./app')
const config = require('./utilities/config')

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})