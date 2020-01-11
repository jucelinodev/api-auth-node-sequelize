import server from './server'

server.listen(process.env.PORT, () =>
  console.log(`Server running in ${process.env.APP_URL}:${process.env.PORT}`))
