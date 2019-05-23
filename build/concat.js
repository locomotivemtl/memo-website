import gulp from 'gulp';
import concat from 'gulp-concat';
import merge from 'merge-stream';
import paths from '../mconfig.json';

/*
function task() {
    return gulp
        .src([
            `${paths.scripts.vendors.src}*.js`
        ])
        .pipe(concat(`${paths.scripts.vendors.main}.js`))
        .pipe(gulp.dest(paths.scripts.dest));
}

export default task;
*/

function task() {
    const stacks = [
        {
            dest: `${paths.scripts.main}.js`,
            src: [
                `${paths.scripts.src}*/*.js`,
                `!${paths.scripts.vendors.src}*.js`,
                `${paths.scripts.src}app.js`
            ]
        },
        {
            dest: `${paths.scripts.vendors.main}.js`,
            src: [
                `${paths.scripts.vendors.src}*.js`
            ]
        },
    ];

    const tasks = stacks.map(function (stack) {
        return gulp.src(stack.src)
                   .pipe(concat(stack.dest))
                   .pipe(gulp.dest(paths.scripts.dest));
    });

    return merge(tasks);
}

export default task;
