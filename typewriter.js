const sentence = "new example line written slowly";
let timer = 0;
for (const char of sentence) {
  timer += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
};

setTimeout(() => {
  process.stdout.write("\n");
}, timer)
