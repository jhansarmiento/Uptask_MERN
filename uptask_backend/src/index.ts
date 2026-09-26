import colors from 'colors'
import server from './server.js'

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(colors.bold.blue(`Server running on port ${PORT}`))
})