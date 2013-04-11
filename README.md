least.
=====

"least." is a Random &amp; Responsive HTML 5, CSS3 Gallery with LazyLoad

How to install:
-----------

### one.

Download [least.](http://kamilczujowski.github.io/least/least.zip) or view the Code on [GitHub](https://github.com/kamilczujowski/least)

### two.

Insert the following code before end of head-tag.

    <!-- least. CSS-file -->
    <link href="css/least.css" rel="stylesheet" />
    <!-- jQuery libary -->
    <script src="http://code.jquery.com/jquery-latest.js" defer="defer"></script>
    <!-- least. JS-file -->
    <script src="js/least.js" defer="defer"></script>
    <!-- Lazyload JS-file -->
    <script src="js/jquery.lazyload.js" defer="defer"></script>

### three.

Insert the following code right after the body-tag.

    <ul id="gallery">
        <li id="fullPreview"></li>
        
        <li>
            <a href="img/full/full_1.jpg"></a>
            <img data-original="img/thumb/thumb_1.jpg" src="img/effects/white.gif" width="240" height="150" alt="Ocean" />
        
            <div class="overLayer"></div>
            <div class="infoLayer">
                <ul>
                    <li>
                        <h2>
                            Ocean
                        </h2>
                    </li>
                    <li>
                        <p>
                            View Picture
                        </p>
                    </li>
                </ul>
            </div>
        
            <div class="projectInfo">
                <strong>
                    Monday, 14th April 2093:
                </strong> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </div>
        </li>
    </ul>

### done.

Made in ♥ by [Kamil Czujowski](https://twitter.com/kamilczujowski) and [Sergej Müller](http://wpcoder.de)
© 2013 Hamburg, Germany
Version: 1.0.

