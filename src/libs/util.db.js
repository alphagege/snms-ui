import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage(`coframe-${process.env.COFRAME_APP_VERSION}`)
console.log(adapter)
const db = low(adapter)
console.log(db)

db.defaults({
  sys: {},
  database: {}
}).write()

export default db
