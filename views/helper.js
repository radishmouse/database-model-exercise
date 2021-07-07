function header() {
    return `
        <header>
            <h1>Welcome!</h1>
        </header>
    `;
}

function footer() {
    return `
        <footer>
            <p>
              &copy; 2018 Princess industries
            </p>
        </footer>
    `;
}

function logoutButton () {
    return `
    <div>
            <form action="/logout" method="POST">
                <input type="submit" value="logout">
            </form>
        </div>
    
    `
}

function loginOrRegister () {
    return `
    <div>
    <a href="/login">Login</a>
    |
    <a href="/register">Register</a>
    </div>
    `
}

module.exports = {
    header,
    footer,
    logoutButton,
    loginOrRegister
};