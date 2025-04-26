<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xylays Developer</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #0d0d30, #1a1a60);
            color: #00ccff;
            font-family: 'Courier New', Courier, monospace;
            overflow-x: hidden;
        }
        .noise {
            position: fixed;
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%;
            background-image: url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif');
            background-size: cover;
            opacity: 0.08;
            z-index: 0;
            pointer-events: none;
        }
        .container {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 50px auto;
            padding: 30px;
            background: rgba(0, 0, 50, 0.7);
            border-radius: 15px;
            box-shadow: 0 0 15px #00ccff;
        }
        img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
            display: block;
            margin: 0 auto 20px auto;
            border: 2px solid #00ccff;
        }
        h1, h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        ul {
            list-style-type: square;
            padding-left: 30px;
            margin-bottom: 20px;
        }
        ul li {
            margin: 5px 0;
        }
        .social, .services {
            margin-top: 20px;
        }
        .social a {
            color: #00ccff;
            text-decoration: none;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 14px;
            color: #007799;
        }
        .glitch {
            color: #00ccff;
            font-size: 18px;
            text-align: center;
            animation: glitch 1s infinite;
        }
        @keyframes glitch {
            0% { text-shadow: 2px 2px #ff00c1, -2px -2px #00ccff; }
            25% { text-shadow: -2px 2px #ff00c1, 2px -2px #00ccff; }
            50% { text-shadow: 2px -2px #ff00c1, -2px 2px #00ccff; }
            75% { text-shadow: -2px -2px #ff00c1, 2px 2px #00ccff; }
            100% { text-shadow: 2px 2px #ff00c1, -2px -2px #00ccff; }
        }
    </style>
</head>
<body>

<div class="noise"></div>

<div class="container">
    <img src="https://ar-hosting.pages.dev/1745657839414.jpg" alt="Xylays Photo">
    
    <h1>Hi all, I'm Xylays Developer</h1>

    <h2>What are my skills?</h2>
    <ul>
        <?php
        $skills = ["HTML", "C#", "CSS", "Java", "JS", "Go", "Python", "PHP", "Rust", "C++", "Dll"];
        foreach ($skills as $skill) {
            echo "<li>$skill</li>";
        }
        ?>
    </ul>

    <div class="social">
        <h2>Where can you contact me and my social media?</h2>
        <ul>
            <li>GitHub: <a href="https://github.com/ryyyawh" target="_blank">github.com/ryyyawh</a></li>
            <li>Telegram: <a href="https://t.me/conquerryy" target="_blank">@conquerryy</a></li>
        </ul>
    </div>

    <div class="services">
        <h2>My Services</h2>
        <ul>
            <li>Open script service</li>
            <li>Open coding services</li>
            <li>Open service fix JS error</li>
            <li>And others related to coding</li>
        </ul>
    </div>

    <div class="footer">
        <p>© Xylays</p>
        <div class="glitch">Stay Code. Stay Creative.</div>
    </div>
</div>

</body>
</html>
