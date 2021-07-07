function loginForm() {
    return `
    
    <form action="" method="POST">
        
        <label> Username:
        <input type="text" name="username">
        </label>
        <br>
        <label> Password:
            <input type="password" name="password">
        </label>
        <br>
        <label>
        <input type="submit" value="Login">
        </label>
    </form>
    
    
    
    
    `
}

module.exports = loginForm;