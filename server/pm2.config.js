module.exports = {
  apps : [{
    name      : "cluster",
    script    : "./dist/app.js",
    instances : 0,
    exec_mode : "cluster"
  },
  {
    name      : "app",
    script    : "./dist/app.js",
  },
]
}