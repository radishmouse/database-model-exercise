function registrationForm() {
    return `
    <form action="" method="POST">
        <label> Your name
            <input type="text" name="name">
        </label>
        <br>
        <label> Username:
        <input type="text" name="username">
        </label>
        <br>
        <label> Password:
            <input type="text" name="password">
        </label>
        <br>
        <label>
        <input type="submit" value="Register!">
        </label>
    </form>
    
    `;
}

module.exports = registrationForm;