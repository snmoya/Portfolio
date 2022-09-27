const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelectorAll('.nav_link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav_open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav_open');
    });
});


/* server */

const app = express();

app.listen(process.env.PORT || 30000, function() {
    console.log("Server is running on port 3000")
});