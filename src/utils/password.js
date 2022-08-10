const bcrypt = require('bcrypt')

async function crypto(pwd){
    
    //criptografar a senha(hash)
    const salt = await bcrypt.genSalt()
    
    const password = await bcrypt.hash(pwd, salt)

    return password 
    
}

module.exports = {
    crypto,
}