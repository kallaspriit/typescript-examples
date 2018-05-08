// dummy async that "fetches" some data (current date as string)
async function fetch(url: string): Promise<string> {
  return new Promise<string>(resolve =>
    setTimeout(() => resolve(`${url} (${getTime()})`), 1000)
  );
}

(async () => {
  console.log("simple", await fetch("simple.com"));

  /////////////////////////////////////

  const urls = ["test1.com", "test2.com", "test3.com"];

  // order?
  console.log("fetchAll1", await fetchAll1(urls));
  console.log("fetchAll2", await fetchAll2(urls));
  console.log("fetchAll3", await fetchAll3(urls));
})().catch(error => console.error(error));

async function fetchAll1(urls: string[]): Promise<string[]> {
  return Promise.all(urls.map(async url => fetch(url)));
}

async function fetchAll2(urls: string[]): Promise<string[]> {
  const result: string[] = [];

  for (const url of urls) {
    result.push(await fetch(url));
  }

  return result;
}

async function fetchAll3(urls: string[]): Promise<string[]> {
  const result: string[] = [];

  urls.forEach(async url => {
    result.push(await fetch(url));
  });

  return result;
}

/*
 ________  ________  ________        ________  ___  ___  ___  ________
|\   __  \|\   __  \|\   __  \      |\   __  \|\  \|\  \|\  \|\_____  \
\ \  \|\  \ \  \|\  \ \  \|\  \     \ \  \|\  \ \  \\\  \ \  \\|___/  /|
 \ \   ____\ \  \\\  \ \   ____\     \ \  \\\  \ \  \\\  \ \  \   /  / /
  \ \  \___|\ \  \\\  \ \  \___|      \ \  \\\  \ \  \\\  \ \  \ /  /_/__
   \ \__\    \ \_______\ \__\          \ \_____  \ \_______\ \__\\________\
    \|__|     \|_______|\|__|           \|___| \__\|_______|\|__|\|_______|
                                              \|__|

A: SAME TIME
 [
  'test1.com (16:11:42)',
  'test2.com (16:11:42)',
  'test3.com (16:11:42)'
]

B: INCREMENTING TIME
[
  'test1.com (16:11:43)',
  'test2.com (16:11:44)',
  'test3.com (16:11:45)'
]

C: NO VALUES
[]

D: ERROR
Uncaught exception..

*/

// just return current time 16:15:32 etc
function getTime() {
  const date = new Date();

  return `${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${
    date.getMinutes() < 10 ? "0" : ""
  }${date.getMinutes()}:${
    date.getSeconds() < 10 ? "0" : ""
  }${date.getSeconds()}`;
}
