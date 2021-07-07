const { header, 
        footer,
        logoutButton,
        loginOrRegister
         } = require('./helper')


function page(content, isLoggedIn=false) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=h, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css">
        <link rel="stylesheet" href="/stylesheets/index.css">
    </head>
    <body>
        ${header()}
        ${  
            isLoggedIn ? logoutButton() : loginOrRegister() 
        }
        ${content}
        ${footer()}
    </body>
    </html>
    
    
    
    
    `
}

module.exports = page;