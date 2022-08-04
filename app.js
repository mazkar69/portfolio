const express = require("express")
const app = express();
const path = require("path")
const ejs = require("ejs")
require("./db-conn/conn");
const Post = require("./db-conn/posts");
const { reset } = require("nodemon");
const port = process.env.PORT || 5000;

// Seting the static file
app.use("/static", express.static("static"))

// Seting the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


// setting utl parser 
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index")

})

app.get("/blog", async (req, res) => {
    const result = await Post.find().sort({"upload_time":-1});

    res.render("blog", { posts: result })

})
app.get("/blog/:url", async (req, res) => {
    // console.log(req.params);
    try {
        const url = req.params.url;
        const result = await Post.findOne({ url });
        const stringDate = result.upload_time.toString();
        const date = stringDate.slice(0,15);
        const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description"
            content="I'm mohd azkar, full stack web developer. This is my portfolio website which include all the details about myself.">
        <meta name="keywords"
            content="Mohd Azkar Portfolio, Azkaar, Azkar, azkar, askar, dazz azkar, full stack web developer, azkaar portfolio, md azkar,mohd azkar, Mohd Azkar, about dazz azkar, mohd azkar website, azkar website, azkar persnal website, mohd azkar persnal website">
        <meta name="author" content="Mohd Azkar">
        <title>Mohd Azkar</title>
        <link rel="icon" type="image/x-icon" href="/static/images/fav.png">
        <link rel="stylesheet" href="/static/css/style.css">
        <script defer src="/static/js/index.js"></script>
    </head>
    <style>
        .post {
            max-width: 120rem;
            margin: auto;
            display: flex;
            padding: 2rem 0rem;
            flex-direction: column;
            gap: 2rem;
    
    
        }
    
        .post h1 {
            font-size: 3rem;
    
        }
        .post h3 {
            font-size: 2.5rem;
    
        }
        .post p{
            font-size: 2.2rem;
        }
    
        .post li {
            font-size: 2rem;
            color: var(--para);
            list-style: square;
            padding: .5rem 0rem;
        }
    
        .post a {
            text-decoration: underline;
            color: rgb(91, 6, 210);
        }
        .post code{
            position: relative;
            font-size: 1.9rem;
            padding: 2rem;
            color: var(--para);
            font-style: italic;
            align-items: center;
            box-shadow: var(--shadow);
            /* text-align: center; */
            max-height: 60rem;
        }
    </style>
    
    <body>
        <header class="header">
            <img src="/static/images/logo2.png" alt="MOHD AZKAR" class="logo" />
            <nav class="navbar">
                <ul class="navbar-lists">
                    <li>
                        <a class="navbar-link home-link" href="/" id="">Home</a>
                    </li>
                    <li>
                        <a class="navbar-link about-link" href="#section-bio">About</a>
                    </li>
                    <li>
                        <a class="navbar-link service-link" href="#services">Services</a>
                    </li>
                    <li>
                        <a class="navbar-link portfolio-link" href="/blog">Blog</a>
                    </li>
                    <li>
                        <a class="navbar-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div class="mobile-nav-btn">
                <ion-icon name="menu-outline" class="menu mobile-nav-icon"></ion-icon>
                <ion-icon name="close-outline" class="close mobile-nav-icon"></ion-icon>
            </div>
        </header>
    
    
        <!-- blog section start here  -->
        <section class="section section-blog-page">
            <div class="container">
                <div class="post">

                    <span>${date}</span>
                    <h1>${result.title}</h1>
                    ${result.contant}

                </div>
            </div>
        </section>
    
        <!-- This is comment section which is in development phase -->
        <section class="section section-comment">
    
        </section>
    
    
    
    
    
        <!-- Our footer section -->
    
        <footer class="section-footer section footer">
            <div class=" container grid grid-four-column">
                <div class="f-about">
                    <h3>About</h3>
                    <p>I am a Student Currently pursuing BCA, Its my final year and i work in a tech company.</p>
                </div>
                <div class="f-links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href=""><span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                                Home</a>
                        </li>
                        <li><a href=""><span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                                About</a>
                        </li>
                        <li><a href=""><span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                                Services</a>
                        </li>
                        <li><a href=""><span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                                Portfolio</a>
                        </li>
                        <li><a href=""><span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                                Contact</a>
                        </li>
    
                    </ul>
                </div>
                <div class="f-services">
                    <h3>Services</h3>
                    <ul>
                        <li><a href=""><span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                                Web development</a>
                        </li>
                        <li><a href=""><span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                                Photography</a>
                        </li>
                        <li><a href=""><span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                                Mobile App</a>
                        </li>
                        <li><a href=""><span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                                Computer Software</a>
                        </li>
    
                    </ul>
                </div>
                <!-- End -->
                <div class="f-address">
                    <h3>Have a Question?</h3>
                    <address>
                        <div>
                            <p><span>
                                    <ion-icon name="location-outline"></ion-icon>
                                </span>Delhi, India</p>
                        </div>
                        <div>
                            <p><span>
                                    <ion-icon name="call-outline"></ion-icon>
                                </span><a href="tel:+91884375826">+91 8840375826</a></p>
                        </div>
                        <div>
                            <p><span>
                                    <ion-icon name="mail-outline"></ion-icon>
                                </span><a href="mailto:mohdazkar@outlook.com">mohdazkar@outlook.com</a></p>
                        </div>
                    </address>
                </div>
    
            </div>
            <div class="container">
                <div class="f-social-icons">
                    <a href="https://www.instagram.com/md.azkaar/" target="_blank">
                        <ion-icon name="logo-instagram" class="icon"></ion-icon>
                    </a>
                    <a href="https://github.com/mazkar69" target="_blank">
                        <ion-icon name="logo-github" class="icon"></ion-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/mohd-azkar-6575051bb/" target="_blank">
                        <ion-icon name="logo-linkedin" class="icon"></ion-icon>
                    </a>
                </div>
                <div class="f-credit">
                    <p>
                        Copyright &copy; all rights reserved. This website is made by AzKaR</p>
                    </p>
                </div>
            </div>
    
        </footer>
    
    
    
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script>
            console.log(post)
        </script>
    
    </body>
    
    </html>`

        // res.writeHead(200,{"contant-type":"text/plain"})
        res.send(html);
    } catch (error) {
        res.send(error)

    }



})
app.get("/create-new-post", (req, res) => {
    res.render("create-post")

})
app.post("/create-new-post", async (req, res) => {
    const title = req.body.title;
    const tags = req.body.tags;
    const url = req.body.url;
    const description = req.body.description;
    const contant = req.body.contant;
    try {
        const post = new Post({ title, tags, url, description, contant });
        await post.save();
        res.send("Post Published")

    } catch (error) {
        res.send(error);

    }

})


app.listen(port, () => {
    console.log("Running at port ", port);
})

