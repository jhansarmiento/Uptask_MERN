import colors from 'colors'
import server from './server.js'

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(colors.bold.magenta(`Server running on port ${PORT}`))
})