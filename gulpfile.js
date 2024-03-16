import gulp from "gulp";
import browser from "browser-sync";

// Server

export const server = (done) => {
  browser.init({
    server: {
      baseDir: "src",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

//Start

export const start = gulp.series(server)
