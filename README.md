Pure-Place
====

A fork of the Pure project that uses [grunt-pure-place](https://github.com/jjt/grunt-pure-place)
to turn the `.pure____` classes in `src/**/css/*.css` into
`%pure____` placeholders in `scss/**/_*.scss`.

The grunt-pure-place plugin does not support responsive classes at this time,
due to how Sass handles placeholders inside of `@media` queries.

### Integrate

your-sass-file.scss

    @import "path/to/pure";
    
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
    






    
### [Pure website](http://purecss.io/)

### [Pure on Github](https://github.com/yui/pure)
