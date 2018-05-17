export namespace Example32 {
  // dummy async that "fetches" some data (date as string)
  async function fetch(url: string): Promise<string> {
    return new Promise<string>(resolve =>
      setTimeout(() => resolve(`${url} (${getTime()})`), 1000)
    );
  }

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

  (async () => {
    // console.log("simple", await fetch("simple.com"));

    const urls = ["test1.com", "test2.com", "test3.com"];

    // what is the output of each fetchAll implementation?
    console.log("fetchAll1", await fetchAll1(urls));
    console.log("fetchAll2", await fetchAll2(urls));
    console.log("fetchAll3", await fetchAll3(urls));
  })().catch(console.error);

  /*
 ________  ________  ________        ________  ___  ___  ___  ________
|\   __  \|\   __  \|\   __  \      |\   __  \|\  \|\  \|\  \|\_____  \
\ \  \|\  \ \  \|\  \ \  \|\  \     \ \  \|\  \ \  \\\  \ \  \\|___/  /|
 \ \   ____\ \  \\\  \ \   ____\     \ \  \\\  \ \  \\\  \ \  \   /  / /
  \ \  \___|\ \  \\\  \ \  \___|      \ \  \\\  \ \  \\\  \ \  \ /  /_/__
   \ \__\    \ \_______\ \__\          \ \_____  \ \_______\ \__\\________\
    \|__|     \|_______|\|__|           \|___| \__\|_______|\|__|\|_______|
                                              \|__|

A: NO VALUES
[]

B: SAME TIME
 [
  'test1.com (16:11:42)',
  'test2.com (16:11:42)',
  'test3.com (16:11:42)'
]

C: INCREMENTING TIME
[
  'test1.com (16:11:43)',
  'test2.com (16:11:44)',
  'test3.com (16:11:45)'
]

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
}
