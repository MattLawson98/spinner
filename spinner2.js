let x = 100;
const spin = ['|','/','-','\\','|','/','-','\\','|'];
  for (let i = 0; i < spin.length ; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${spin[i]}`)
    }, x)
    x += 200;
  }

setTimeout(() => {
  process.stdout.write('\n');
}, 2600)