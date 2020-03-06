<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link  href="{{ asset('/css/app.css') }}"  rel="stylesheet">
        <title>JJ</title>
    </head>
    <body>
        <div id="app">
            <router-view  :key="$route.fullPath"></router-view>
        </div>
    </body>
</html>

<script src="{{ asset("/js/app.js?v.1.1") }}" charset="utf-8"></script>
