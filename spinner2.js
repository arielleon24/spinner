const spin = ["\r|    ", "\r/    ", "\r-    ", "\r\\   ", "\r|    ", "\r/    ", "\r-    ", "\r|    ",
];
let timer = 0;

  for (let frame of spin) {
    setTimeout(() => {
      process.stdout.write(frame);
    }, timer);
    timer += 100;
  }
