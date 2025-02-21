require('dotenv').config()

const app = require('./app')
require('./database')
//logic to start the server

async function main(){
    await app.listen(app.get('port'))
    console.log('Server on port', app.get('port'));
}

main()
