<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!--
        Hey! We see you're checking out our source code. As a fellow nerd, you can follow us on Github and see what we've been up to.
        https://github.com/twelfthjames/
    -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twelfth &amp; James</title>
    <link rel="stylesheet" href="https://use.typekit.net/iou5itg.css">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>
<body>
    <header id="header">
        <div class="header-logo">
            <img src="https://twelfth.nyc3.digitaloceanspaces.com/tj_round_light.svg" alt="Twelfth &amp; James">
        </div>
    </header>
    <section id="introduction">
        <p>We're not a creative agency. We're your creative partners.</p>
    </section>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-90741245-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-90741245-1');
</script>
</body>
</html>