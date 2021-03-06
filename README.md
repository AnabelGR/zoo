# Zoo Tracks

#### An Epicodus independent project in Angular2, 07.07.17

#### **By Anabel Ramirez**

## Description

This web application will allow zoo staff to view all animals currently at the zoo, add new animals to the list, and edit their information.

|Behavior| Input (User Action/Selection) |Output|
|---|:---|:---|
|Staff can view a list of animals. | "Rose, Elephant", "Inra, Tiger", "Zoe, Zebra"|"Rose, Elephant", "Inra, Tiger", "Zoe, Zebra"|
|Staff can view a list of young animals. | "Rose, Elephant, 1", "Zoe, Zebra, 2"|"Rose, Elephant, 1", "Zoe, Zebra, 2"|
|Staff can view a list of mature animals. | "Inra, Tiger, 8"|"Inra, Tiger, 8"|
|Staff can see details of animals. | Species: "Elephant", Name: "Rose", Age: 3, Diet: "Vegetarian", Location: "Elephant Reprise", Caretakers: 6, Sex: "Female", Likes: "pumpkins", Dislikes: "exercise", photo: "animal photo", tracks: "animal foot print image"|Species: "Elephant", Name: "Rose", Age: 3, Diet: "Vegetarian", Location: "Elephant Reprise", Caretakers: 6, Sex: "Female", Likes: "pumpkins", Dislikes: "exercise",  photo: "animal photo", tracks: "animal foot print image"|
|Staff can add newly-admitted animals. | add: Species: "Elephant", Name: "Rose", Age: 3, Diet: "Vegetarian", Location: "Elephant Reprise", Caretakers: 6, Sex: "Female", Likes: "pumpkins", Dislikes: "exercise",  photo: "animal photo", tracks: "animal foot print image"| Species: "Elephant", Name: "Rose", Age: 3, Diet: "Vegetarian", Location: "Elephant Reprise", Caretakers: 6, Sex: "Female", Likes: "pumpkins", Dislikes: "exercise",  photo: "animal photo", tracks: "animal foot print image"|
|Staff can edit an animal's name, number of caretakers, and age.|Name: "Rose", Age: 6, Caretakers: 6 |Species: "Elephant", Name: "Rose", Age: 6, Diet: "Vegetarian", Location: "Elephant Corral", Caretakers: 6, Sex: "Female", Likes: "pumpkins", Dislikes: "exercise",  photo: "animal photo", tracks: "animal foot print image"|

## Further development:
![alt text](screenshots/navbar1.png)

- This mock up navigational bar showcases other elements this application could include.
  - Online Learning Guide: Zoo Tracks would develop a learning game using the different tracks animals leave.
  - Educational Outreach: A place for teachers to submit zoo visit requests and also find educational links about the animals at the zoo.
  - Volunteer Opportunities: A place for volunteers to submit their requests and a scheduling interface for zoo staff.
  - Zoo Information: The general information about the zoo such as address, parking, hours, job opportunities, and special events (ultimately could have its own page link).
  - Employee Login: Logging in hours, checking schedule, requesting leave of absence.
- Additionally, the specs below would be added to the current interface:

|Behavior| Input (User Action/Selection) |Output|
|---|:---|:---|
|Staff can view the number of caretakers required per day. | "25"|"25"|
|Staff can timestamp when a new animal joins the zoo. | "07/12/17"|"07/12/17"|
|Staff can view the animals by species. | "elephants"|"6 records"|
|Staff can view the number of caretakers required by species. | "6"|"6"|
|Staff can view the average age of all the animals. | "16"|"16"|
|Staff can view animals by diet restrictions. | "herbivores"|"43 records"|


## Setup/Installation Requirements

To download and run this project:
1. Clone this repository to your desktop.
2. Run {$ npm install} and {$ bower install} in your terminal to gather required packages.
3. Run {$ gulp build} and then {$ gulp serve} to view the project in a web browser via a localhost.

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.

## Technologies Used

* Angular
* HTML
* CSS
* Bootstrap
* SASS

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Anabel Ramirez**

________________________

## Production Notes
## Configuration/dependencies
1. Create a {.gitignore_global} file on the top directory with the following file names to ignore for all OS generated and Modern Javascript files:
  - .DS_Store
  - .DS_Store?
  - .Spotlight-V100
  - .Trashes
  - ehthumbs.db
  - Thumbs.db
  - bower_components/
  - build/
  - node_modules/
  - tmp/
  - temp/
  - .env
  - npm-debug.log
  - app/\*.js
  - app/\*.js.map

2. Run { $ git config --global core.excludesfile ~/.gitignore_global } in the console log.

3. Create project folder with the following files:
  - README.md
  - index.html
  - gulpfile.js
    - main document to run npm and bower packages
  - app folder
    - app.component.ts, app.module.ts, main.ts
    - all other ts components
  - resources folder
      - images, js, styles folders
      - all .js and .scss or .css files respectively in their nested folders
4. initialize project
  - npm init (initializes project for gulp/npm installs)
  - bower init (initializes project for bower installs)

5. Install typescript
  - npm install typescript -g
  - apm install atom-typescript

6. Write gulpfile.js document, requires the following variables and their associated Tasks:
  ```Javascript
  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var utilities = require('gulp-util');
  var buildProduction = utilities.env.production;
  var del = require('del');
  var browserSync = require('browser-sync').create();
  var shell = require('gulp-shell');
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');

  var lib = require('bower-files')({
    "overrides":{
      "bootstrap" : {
        "main": [
          "less/bootstrap.less",
          "dist/css/bootstrap.css",
          "dist/js/bootstrap.js"
        ]
      }
    }
  });

  ////////////////////// TYPESCRIPT //////////////////////
  gulp.task('tsClean', function(){
    return del(['app/*.js', 'app/*.js.map']);
  });

  gulp.task('ts', ['tsClean'], shell.task([
    'tsc'
  ]));

  ////////////////////// BOWER //////////////////////
  gulp.task('jsBowerClean', function(){
    return del(['./build/js/vendor.min.js']);
  });

  gulp.task('jsBower', ['jsBowerClean'], function() {
    return gulp.src(lib.ext('js').files)
      .pipe(concat('vendor.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./build/js'));
  });

  gulp.task('cssBowerClean', function(){
    return del(['./build/css/vendor.css']);
  });

  gulp.task('cssBower', ['cssBowerClean'], function() {
    return gulp.src(lib.ext('css').files)
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest('./build/css'));
  });

  gulp.task('bower', ['jsBower', 'cssBower']);

  ////////////////////// SASS //////////////////////
  gulp.task('sassBuild', function() {
    return gulp.src(['resources/styles/*'])
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./build/css'));
  });

  ////////////////////// SERVER //////////////////////
  gulp.task('serve', ['build'], function() {
    browserSync.init({
      server: {
        baseDir: "./",
        index: "index.html"
      }
    });
    gulp.watch(['resources/js/*.js'], ['jsBuild']); // vanilla js changes, reload.
    gulp.watch(['*.html'], ['htmlBuild']); // html changes, reload.
    gulp.watch(['resources/styles/*.css', 'resources/styles/*.scss'], ['cssBuild']);
    gulp.watch(['app/*.ts'], ['tsBuild']); // typescript files change, compile then reload.
  });

  gulp.task('jsBuild', function(){
    browserSync.reload();
  });

  gulp.task('htmlBuild', function(){
    browserSync.reload();
  });

  gulp.task('cssBuild', ['sassBuild'], function(){
    browserSync.reload();
  });

  gulp.task('tsBuild', ['ts'], function(){
    browserSync.reload();
  });

  ////////////////////// GLOBAL BUILD task //////////////////////
  gulp.task('build', ['ts'], function(){
    // we can use the buildProduction environment variable here later.
    gulp.start('bower');
    gulp.start('sassBuild');
  });
```

7. Install packages
  - Run chmod +x {file location in project directory root folder} to make file executable
  - Run { bash batch_npm } and all commands will run

8. Index html headers and body
```html
<html>
  <head>
    <title>Zoo</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="build/js/vendor.min.js"></script>
    <link rel="stylesheet" href="build/css/vendor.css">
    <!-- 1. Load libraries -->
     <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <!-- 2. Configure SystemJS -->
    <script src="systemjs.config.js"></script>

    <link rel="stylesheet" href="build/css/styles.css">
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>
  <!-- 3. Display the application -->
  <body>
    <app-root>Loading...</app-root>
  </body>
</html>
```
11. pacakge.json file
```json
{
  "name": "zoo",
  "version": "1.0.0",
  "scripts": {
    "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "lite": "lite-server",
    "postinstall": "typings install",
    "tsc": "tsc",
    "tsc:w": "tsc -w"
  },
  "license": "MIT",
  "dependencies": {
    "@angular/common": "2.4.0",
    "@angular/compiler": "2.4.0",
    "@angular/core": "2.4.0",
    "@angular/forms": "2.4.0",
    "@angular/http": "2.4.0",
    "@angular/platform-browser": "2.4.0",
    "@angular/platform-browser-dynamic": "2.4.0",
    "@angular/router": "3.4.0",
    "@angular/upgrade": "2.4.0",
    "bootstrap": "3.3.6",
    "angular-in-memory-web-api": "0.3.1",
    "core-js": "2.4.1",
    "reflect-metadata": "0.1.3",
    "rxjs": "5.0.1",
    "zone.js": "0.7.2",
    "systemjs": "0.19.27"
  },
  "devDependencies": {
    "bower-files": "3.11.3",
    "browser-sync": "2.11.1",
    "del": "2.2.0",
    "gulp": "3.9.1",
    "gulp-concat": "2.6.0",
    "gulp-sass": "2.2.0",
    "gulp-shell": "0.5.2",
    "gulp-sourcemaps": "1.6.0",
    "gulp-uglify": "1.5.3",
    "gulp-util": "3.0.7",
    "concurrently": "3.0.0",
    "lite-server": "2.2.2",
    "typescript": "2.2.2",
    "typings":"1.3.2"
  }
}
```
12. tsconfig.json file
  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "lib": [ "es2015", "dom" ],
      "noImplicitAny": false,
      "suppressImplicitAnyIndexErrors": true
    }
  }
  ```
13. basic component parts app.component.ts file
  ```typescriptÂ
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: `
    <div class="container">
      <h1>Zoo-rific</h1>
    </div>
    `
  })

  export class AppComponent {

  }
  ```

14. app.module.ts file
  ``` typescript
  import { NgModule }      from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent }   from './app.component';

  @NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
  })

  export class AppModule { }
  ```
15. main.ts file (entry point)
  ```typescript
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { AppModule } from './app.module';

  const platform = platformBrowserDynamic();

  platform.bootstrapModule(AppModule);
  ```
16. systemjs.config.js file
```Javascript
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
```
