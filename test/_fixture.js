<!doctype html>
<html lang="en">
  <head>
  <meta charset="utf-8">
    <link type="image/x-icon" rel="icon" href="favicon.ico">
    <link type="image/x-icon" rel="shortcut icon" href="favicon.ico">
    <link rel="stylesheet" href="pipe.css">
    <link rel="stylesheet" href="sh_vim-dark.css">
    <link rel="alternate"
          type="application/rss+xml"
          title="node blog"
          href="http://feeds.feedburner.com/nodejs/123123123">
    <title>node.js</title>
  </head>
  <body id="front">
    <div id="intro">
        <img id="logo" src="http://nodejs.org/images/logo.png" alt="node.js">

        <p>Node.js is a platform built on <a
        href="http://code.google.com/p/v8/">Chrome's JavaScript runtime</a>
        for easily building fast, scalable network applications.  Node.js
        uses an event-driven, non-blocking I/O model that makes it
        lightweight and efficient, perfect for data-intensive real-time
        applications that run across distributed devices.</p>

        <p>Current Version: v0.10.26</p>

        <div class=buttons>
        <a href="http://nodejs.org/dist/v0.10.26/node-v0.10.26.tar.gz" class="button downloadbutton" id="downloadbutton">INSTALL</a>

        <a href="download/" class=button id="all-dl-options">Downloads</a
        ><a href="api/" class="button" id="docsbutton">API Docs</a>
        </div>

        <a href="http://github.com/joyent/node"><img class="forkme" src="http://nodejs.org/images/forkme.png" alt="Fork me on GitHub"></a>
        <a href="http://www.joyent.com/noderoad" style="display: block; margin-top: 30px; margin-bottom: -6px;"><img src="images/roadshow-promo.png" width="688"></a>
    </div>

    <div id="quotes" class="clearfix"><h2>Node.js in the Industry</h2><ul><li class="iriscouch"><img src="industry/data/iriscouch/logo.png" alt="logo" height=34><p>
Node.js is not magic. It is better than magic: a useful
tool, making useful trade-offs. We've come to delight in and
depend on its laid-back enthusiastic style.
<br>
<a href="http://www.iriscouch.com">Jason Smith</a>
<br>
<span>Technologist</span>
</p>
</li>
<li class="858project"><img src="industry/data/858project/logo.png" alt="logo" height=34><p>
    Node.js helps us to see web sites from different point of view. We wrote our own framework for Node.js and we use it in web design &amp; development process to build web sites and online shops.
    <br>
    <a href="http://www.858project.com">Peter Sirka</a>
    <br>
    <span>Senior Web Developer, 858project.com</span>
</p></li>
<li class="chloi-inc"><img src="industry/data/chloi-inc/logo.png" alt="logo" height=34><p>Node.js has changed the game. With its low-level, robust API, we are able to prototype and build applications faster than in any other language, which our customers love.
<br>
<a href="http://chloi.io/">Rob Ellis</a>
<br>
<span>Co-founder</span></p>
</li>
<li class="voxer"><img src="industry/data/voxer/logo.png" alt="logo" height=34><p>Node puts the magic in the right places. We write our application,
and node delivers JSON over HTTP.
<br>
<a href="http://voxer.com">Matt Ranney</a>
<br>
<span>CTO</span>
</p>
</li></ul><h2 style="clear:both"><a href="/industry/">More...</a></h2></div>

    <div id="content" class="clearfix">
            <div id="column1">
                <h2>An example: Webserver</h2>
                <p>This simple web server written in Node responds with "Hello World" for every request.</p>
              <pre>
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');</pre>

              <p>To run the server, put the code into a file
              <code>example.js</code> and execute it with the
              <code>node</code> program from the command line:</p>
              <pre class="sh_none">
% node example.js
Server running at http://127.0.0.1:1337/</pre>

                <p>Here is an example of a simple TCP server which listens on port 1337 and echoes whatever you send it:</p>

                <pre>
var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');</pre>

                <!-- <p>Ready to dig in? <a href="">Download the latest version</a> of node.js or learn how other organizations are <a href="">using the technology</a>.</p> -->
        </div>
        <div id="column2">
            <h2>Featured</h2>
            <a href="http://www.youtube.com/watch?v=jo_B4LTHi3I"><img src="http://nodejs.org/images/ryan-speaker.jpg"></a>
            A guided introduction to Node

            <h2>Explore Node.js</h2>
            <ul id="explore">
                <li><a href="about/" class="explore">About</a><br><span>Technical overview</span></li>
                <li><a href="http://npmjs.org/" class="explore">npm Registry</a><br><span>Modules, resources and more</span></li>
                <li><a href="http://nodejs.org/api/" class="explore">Documentation</a><br><span>API Specifications</span></li>
                <li><a href="http://blog.nodejs.org" class="explore">Node.js Blog</a><br><span>Insight, perspective and events</span></li>
                <li><a href="community/" class="explore">Community</a><br><span>Mailing lists, blogs, and more</span></li>
                <li><a href="logos/" class="explore">Logos</a><br><span>Logo and desktop background</span></li>
                <li><a href="http://jobs.nodejs.org/" class="explore">Jobs</a><br><ol class="jobs"><!-- JOBS --><li><a href='http://jobs.nodejs.org/a/jbb/redirect/983858'>Twin Technologies, Inc</a></li><li><a href='http://jobs.nodejs.org/a/jbb/redirect/983857'>Twin Technologies, Inc</a></li><li><a href='http://jobs.nodejs.org/a/jbb/redirect/983856'>Twin Technologies, Inc</a></li><li><a href='http://jobs.nodejs.org/a/jbb/redirect/983832'>Percolate</a></li><li><a href='http://jobs.nodejs.org/a/jbb/redirect/980096'>Message Systems</a></li><li><a href='http://jobs.nodejs.org/a/jbb/redirect/973471'>Zoosk</a></li><li><a href='http://jobs.nodejs.org/a/jbb/redirect/973470'>Zoosk</a></li><!-- JOBS --></ol></li>
            </ul>
    </div>
</div>

    <div id="footer">
        <a href="http://joyent.com" class="joyent-logo">Joyent</a>
        <ul class="clearfix">
            <li><a href="/">Node.js</a></li>
            <li><a href="/download/">Download</a></li>
            <li><a href="/about/">About</a></li>
            <li><a href="http://npmjs.org/">npm Registry</a></li>
            <li><a href="http://nodejs.org/api/">Docs</a></li>
            <li><a href="http://blog.nodejs.org">Blog</a></li>
            <li><a href="/community/">Community</a></li>
            <li><a href="/logos/">Logos</a></li>
            <li><a href="http://jobs.nodejs.org/">Jobs</a></li>
            <!-- <li><a hrfe="http://twitter.com/nodejs" class="twitter">@nodejs</a></li> -->
        </ul>

        <p>Copyright <a href="http://joyent.com/">Joyent, Inc</a>, Node.js is a <a href="/trademark-policy.pdf">trademark</a> of Joyent, Inc. View <a href="https://raw.github.com/joyent/node/v0.10.26/LICENSE">license</a>.</p>
    </div>


    <script src="sh_main.js"></script>
    <script src="sh_javascript.min.js"></script>
    <script>highlight(undefined, undefined, 'pre');</script>

    <script>
      window._gaq = [['_setAccount', 'UA-10874194-2'], ['_trackPageview']];
      (function(d, t) {
        var g = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
        g.src = '//www.google-analytics.com/ga.js';
        s.parentNode.insertBefore(g, s);
      }(document, 'script'));
      ;(function(d,n) {
        var os = n.platform.match(/(Win|Mac|Linux)/);
        var x = n.userAgent.match(/x86_64|Win64|WOW64/) ||
                n.cpuClass === 'x64' ? 'x64' : 'x86';
        var base = 'http://nodejs.org/dist/v0.10.26/';
        var href = 'node-v0.10.26.tar.gz';
        var db = d.getElementById('downloadbutton');
        var d2;
        switch (os && os[1]) {
          case 'Mac':
            href = 'node-v0.10.26.pkg';
            break;
          case 'Win':
            href = 'node-v0.10.26-' + x + '.msi';
            if (x === 'x64') href = 'x64/' + href;
            break;

          // TODO uncomment when we have these
          // case 'Linux':
          //   // two buttons: .deb and .rpm
          //   href = 'node-v0.10.26-' + x + '.rpm';
          //   var d2 = document.createElement('a');
          //   d2.href = base + 'node-v0.10.26-' + x + '.deb';
          //   d2.className = 'button downloadbutton';
          //   d2.innerHTML = 'INSTALL .deb';
          //   db.innerHTML = 'INSTALL .rpm';
          //   db.parentNode.insertBefore(d2, db);
          //   break;
        }

        db.href = base + href;
        // if there's one download option, then download it at #download
        if (location.hash === '#download' && !d2)
          location.replace(b.href);
      })(document,navigator);
    </script>
 </body>
</html>
