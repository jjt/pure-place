Pure-Place
====

<<<<<<< HEAD
A fork of the Pure project that turns the `.pure____` classes in `src/**/css/*.css` into
`%pure____` placeholders in `scss/**/_*.scss`. Uses a custom [Grunt](http://gruntjs.com/)
task and some [Rework](https://github.com/visionmedia/rework).

Most of the classes are just replaced by a placeholder so that you can extend only those 
classes you need. The exception is the grid+responsive system, which is due to the
`.pure-g-r > [class *= _____]` selectors like the following:

    @media (max-width: 767px) {
      .pure-g-r > .pure-u,
      .pure-g-r > [class *= "pure-u-"] {
        width: 100%;
      }
    }

The responsive grid classes that ship with Pure are useful and can be outputted with
multiple custom prefixes. 

#### [Pure website](http://purecss.io/)


### Integrate

your-sass-file.scss

    @import "path/to/_pure.scss";
    @import "path/to/_functions.scss";

    // Default class names for all grid elements - recommended
    // eg. .pure-u-1-4, .pure-g-r, etc...
    $pure-g-r-prefixes: pure-g;
    $pure-u-r-prefixes: pure-u;
    
    // Output grid css
    @include set-pure-r-prefixes;
    @include set-pure-u-prefixes;

    .content {
      @extend %pure-g;
    }
    
    .main {
      @extend %pure-u-2-3;
    }
    
    .sidebar {
      @extend %pure-u-1-3;
    }


### Build

    npm install
    grunt pure-place
    


### Changelog

#### v0.1.1
*Responsive media queries
*Grid selector functions



    
