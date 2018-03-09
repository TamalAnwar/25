const hello = {
    title: "This is a variable",
    description: "This is a description"
}

const home = require('../content/home');

exports.index = (req, res) => {
    res.render('home', home.home)
}

exports.about = (req, res) => {
    res.render('about', {
        title: "About Page",
        description: "Lorem ipsum dollar set."
    })
}

exports.contact = (req, res) => {
    res.render('contact', {
        title: "Contact Page",
        description: "Lorem ipsum dollar set."
    })
}

exports.portfolio = (req, res) => {
    res.render('portfolio')
}
