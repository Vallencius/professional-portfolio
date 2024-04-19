<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Hi! I'm Vallencius Gavriel Alfredo Siswanto. You can call me Vallen. I'm a web developer. Welcome to My Protfolio!"/>
        <meta name="keywords" content="Vallen, Vallenc, Vallencius, Vallencius Gavriel, Vallencius Gavriel Alfredo Siswanto, Portfolio, Web Developer, Website Developer, Backend, Frontend"/>
        <meta name="author" content="Vallencius Gavriel Alfredo Siswanto"/>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vallencius.com/" />
        <meta property="og:title" content="Vallen's Portfolio" />
        <meta property="og:description" content="Hi! I'm Vallencius Gavriel Alfredo Siswanto. You can call me Vallen. I'm a web developer. Welcome to My Protfolio!" />
        <meta property="og:image" content="https://vallencius.com/images/logo-hitam.png" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vallencius.com/" />
        <meta property="twitter:title" content="Vallen's Portfolio" />
        <meta property="twitter:description" content="Hi! I'm Vallencius Gavriel Alfredo Siswanto. You can call me Vallen. I'm a web developer. Welcome to My Protfolio!" />
        <meta property="twitter:image" content="https://vallencius.com/images/logo-hitam.png" />

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- Icon -->
        <link rel="shortcut icon" href="{{ asset('images/logo-square.svg') }}"/>

        <script>
            var csrf_tokens = "{{ csrf_token() }}";
        </script>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body className="font-sans antialiased">
        @inertia
    </body>
</html>
