async function A() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log("A", i);
    }, i * 100);
  }
}

async function B() {
  // tslint:disable-next-line:no-var-keyword
  for (var i = 0; i < 10; i++) {
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      // setTimeout(() => {
      console.log("B", i);
    }, i * 100);
  }
}

(async () => {
  await A();
  await B();
})().catch(e => console.error(e));

/*
 ________  ________  ________        ________  ___  ___  ___  ________
|\   __  \|\   __  \|\   __  \      |\   __  \|\  \|\  \|\  \|\_____  \
\ \  \|\  \ \  \|\  \ \  \|\  \     \ \  \|\  \ \  \\\  \ \  \\|___/  /|
 \ \   ____\ \  \\\  \ \   ____\     \ \  \\\  \ \  \\\  \ \  \   /  / /
  \ \  \___|\ \  \\\  \ \  \___|      \ \  \\\  \ \  \\\  \ \  \ /  /_/__
   \ \__\    \ \_______\ \__\          \ \_____  \ \_______\ \__\\________\
    \|__|     \|_______|\|__|           \|___| \__\|_______|\|__|\|_______|
                                              \|__|

- 1 -      - 2 -      - 3 -      - 4 -
A 0        A 0        A 0        A 0
B 10       A 1        A 1        A 1
A 1        A 2        A 2        A 2
B 10       A 3        A 3        A 3
A 2        A 4        A 4        A 4
B 10       A 5        A 5        A 5
A 3        A 6        A 6        A 6
B 10       A 7        A 7        A 7
A 4        A 8        A 8        A 8
B 10       A 9        A 9        A 9
A 5        B 0        B 9        B 10
B 10       B 1        B 9        B 10
A 6        B 2        B 9        B 10
B 10       B 3        B 9        B 10
A 7        B 4        B 9        B 10
B 10       B 5        B 9        B 10
A 8        B 6        B 9        B 10
B 10       B 7        B 9        B 10
A 9        B 8        B 9        B 10
B 10       B 9        B 9        B 10

*/
