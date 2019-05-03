export function add(x, y) {
  return x + y
}

export function multi(x, y) {
  return x * y;
}

export function env() {
  return process.env.NODE_ENV
}

export function filePath() {
  return __dirname + __filename;
}

export function opt() {
  return process.env.OPT
}



export function log(...args) {
  console.log(args);
}