Pure-Place
====

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

#### [Pure on Github](https://github.com/yui/pure)

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
    

#### Sample Output  

src/tables/css/tables.css   

    .pure-table-striped tr:nth-child(2n-1) td {
        background-color: #f2f2f2;
    }
    
    .pure-table-bordered td {
        border-bottom: 1px solid #cbcbcb;
    }
    .pure-table-bordered tbody > tr:last-child td,
    .pure-table-horizontal tbody > tr:last-child td {
        border-bottom-width: 0;
    }


scss/tables/_tables.scss  

    %pure-table-striped tr:nth-child(2n-1) td {
      background-color: #f2f2f2;
    }
    
    %pure-table-bordered td {
      border-bottom: 1px solid #cbcbcb;
    }
    
    %pure-table-bordered tbody > tr:last-child td,
    %pure-table-horizontal tbody > tr:last-child td {
      border-bottom-width: 0;
    }

### Changelog

#### v0.1.1
*Responsive media queries
*Grid selector functions



    
