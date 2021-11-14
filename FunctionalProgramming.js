<!doctype html><html lang="en" style="overscroll-behavior-x:none"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta property="og:site_name" content="CodeSandbox"><link rel="shortcut icon" href="/favicon.ico"><link rel="mask-icon" href="/csb-ios.svg" color="#000"><link rel="manifest" href="/manifest.json"><script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script><script>WebFont.load({google:{families:["Source Code Pro:500","Roboto:300,400,500,700","Poppins:300,400,500,600,700"]}})</script><!-- Injected by server: --><link rel="alternate" type="application/json+oembed" href="https://codesandbox.io/oembed?url=https://codesandbox.io/s/thirsty-star-wistv&format=json" title="thirsty-star-wistv" /><title>thirsty-star-wistv - CodeSandbox</title><link href="/static/fonts/monolisa.css" rel="stylesheet"><link crossorigin="anonymous" rel="preload" href="/static/fonts/inter/Inter-Regular.woff2" as="font"><link crossorigin="anonymous" rel="preload" href="/static/fonts/inter/Inter-Medium.woff2" as="font"><link crossorigin="anonymous" rel="preload" href="/static/fonts/inter/Inter-Bold.woff2" as="font"><link href="/static/fonts/inter/inter.css" rel="stylesheet"><!-- Google Tag Manager --><script>!function(e,t,a,n){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var g=t.getElementsByTagName(a)[0],m=t.createElement(a);m.async=!0,m.src="https://www.googletagmanager.com/gtm.js?id=GTM-T3L6RFK",g.parentNode.insertBefore(m,g)}(window,document,"script","dataLayer")</script><!-- End Google Tag Manager --><!-- <script async src="//cdn.headwayapp.co/widget.js"></script> --><script src="https://codesandbox.io/static/browserfs12/browserfs.min.js" type="text/javascript"></script><script>BrowserFS&&(window.process={env:{VSCODE_DEV:!1},nextTick:function(e){return requestAnimationFrame(e)},once:BrowserFS.BFSRequire("process").once,removeListener:function(){}},window.Buffer=BrowserFS.BFSRequire("buffer").Buffer)</script><link data-name="/public/vscode31/vs/editor/editor.main" rel="preload" as="style" href="/public/vscode31/vs/editor/codesandbox.editor.main.css"><link rel="preload" as="script" href="/public/vscode31/vs/editor/codesandbox.editor.main.js"><link href="https://codesandbox.io/static/css/common.0cbbfe89.chunk.css" rel="stylesheet"><link href="https://codesandbox.io/static/css/vendors~app.ba9a586c.chunk.css" rel="stylesheet"><link href="https://codesandbox.io/static/css/default~app~embed.ef8b5814.chunk.css" rel="stylesheet"><link href="https://codesandbox.io/static/css/app.10caa73c.css" rel="stylesheet"><meta property="og:title" name="og:title" content="thirsty-star-wistv - CodeSandbox">
<meta property="twitter:title" name="twitter:title" content="thirsty-star-wistv - CodeSandbox">
<meta property="description" name="description" content="The online code editor tailored for web applications">
<meta property="og:description" name="og:description" content="The online code editor tailored for web applications">
<meta property="twitter:description" name="twitter:description" content="The online code editor tailored for web applications">
<meta property="og:author" name="og:author" content="josephlx2014">
<meta property="article:author" name="article:author" content="josephlx2014">
<meta property="article:published_time" name="article:published_time" content="2021-11-14T21:29:56">
<meta property="article:modified_time" name="article:modified_time" content="2021-11-14T22:03:31">
<meta property="article:section" name="article:section" content="static">
<meta property="og:type" name="og:type" content="article">
<meta property="og:url" name="og:url" content="https://codesandbox.io/s/wistv">
<meta property="twitter:site" name="twitter:site" content="@codesandbox">
<script type="application/ld+json">{"author":{"image":"https://avatars.githubusercontent.com/u/46848008?v=4","name":"josephlx2014","url":"https://codesandbox.io/u/josephlx2014","@type":"Person"},"codeRepository":"https://codesandbox.io/s/wistv","codeSampleType":"full solution","dateCreated":"2021-11-14T21:29:56","dateModified":"2021-11-14T22:03:31","image":{"url":"https://codesandbox.io/api/v1/sandboxes/wistv/screenshot.png","@type":"ImageObject"},"isBasedOn":null,"keywords":"static","name":"thirsty-star-wistv","programmingLanguage":"static","publisher":{"logo":{"height":630,"url":"https://codesandbox.io/static/img/banner.png","width":1200,"@type":"ImageObject"},"name":"CodeSandbox","@type":"Organization"},"text":null,"thumbnailUrl":"https://codesandbox.io/api/v1/sandboxes/wistv/screenshot.png","url":"https://codesandbox.io/s/wistv","workExample":{"applicationCategory":"static","operatingSystem":"Web app","screenshot":"https://codesandbox.io/api/v1/sandboxes/wistv/screenshot.png","url":"https://wistv.csb.app","@type":"SoftwareApplication"},"@context":"https://schema.org","@type":"SoftwareSourceCode"}</script>
<meta property="robots" name="robots" content="noindex">
<meta property="og:image" name="og:image" content="https://codesandbox.io/api/v1/sandboxes/wistv/screenshot.png">
<meta property="twitter:image:src" name="twitter:image:src" content="https://codesandbox.io/api/v1/sandboxes/wistv/screenshot.png">
<meta property="og:image:alt" name="og:image:alt" content="A preview of thirsty-star-wistv">
<meta property="og:image:width" name="og:image:width" content="1200">
<meta property="twitter:image:width" name="twitter:image:width" content="1200">
<meta property="og:image:height" name="og:image:height" content="630">
<meta property="twitter:image:height" name="twitter:image:height" content="630">
<meta property="twitter:card" name="twitter:card" content="summary_large_image">
</head><body style="margin:0;padding:0"><!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3L6RFK" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) --><div id="root"></div><script src="https://codesandbox.io/static/js/vendors~app~codemirror-editor~monaco-editor~sandbox.5ca13c344.chunk.js" crossorigin="anonymous"></script><script src="https://codesandbox.io/static/js/vendors~app~embed~sandbox~sandbox-startup.bcc15d438.chunk.js" crossorigin="anonymous"></script><script src="https://codesandbox.io/static/js/common-sandbox.7be24d846.chunk.js" crossorigin="anonymous"></script><script src="https://codesandbox.io/static/js/vendors~app~codemirror-editor~monaco-editor.e9593b851.chunk.js"></script><script src="https://codesandbox.io/static/js/0.84205e20b.chunk.js"></script><script src="https://codesandbox.io/static/js/vendors~app~embed~sandbox-startup.6e3433fd3.chunk.js" crossorigin="anonymous"></script><script src="https://codesandbox.io/static/js/common.cae856104.chunk.js"></script><script src="https://codesandbox.io/static/js/vendors~app~sandbox.711ae7310.chunk.js" crossorigin="anonymous"></script><script src="https://codesandbox.io/static/js/vendors~app~monaco-editor.bba89dfbf.chunk.js"></script><script src="https://codesandbox.io/static/js/vendors~app.cd182632a.chunk.js"></script><script src="https://codesandbox.io/static/js/default~app~embed~sandbox.f1cd866a8.chunk.js" crossorigin="anonymous"></script><script src="https://codesandbox.io/static/js/default~app~embed.03c35e4cd.chunk.js"></script><script src="https://codesandbox.io/static/js/default~app~monaco-editor.c0c46a0ec.chunk.js"></script><script src="https://codesandbox.io/static/js/app.ffc741dfe.js"></script><script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"6ae38c776e487d4c","token":"7449176f14aa420c959831edd48bd5b7","version":"2021.11.0","si":100}' crossorigin="anonymous"></script>
</body></html>