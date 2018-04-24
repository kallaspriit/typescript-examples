// dummy http fetch (axios etc)
const http = {
  fetch: async (url: string): Promise<string> =>
    new Promise<string>((resolve, reject) => {
      // simulate latency
      setTimeout(() => {
        // reject if the url contains "fail"
        if (url.indexOf("fail") !== -1) {
          reject(new Error("404 - not found"));

          return;
        }

        // resolve with dummy response
        resolve(`dummy response for ${url}`);
      }, 1000);
    })
};

// [ts] 'await' expression is only allowed within an async function.
// const response = await http.fetch("https://example.com");

(async () => {
  const response1 = await http.fetch("https://example.com");
  // const response1 = await http.fetch("https://fail.example.com");

  console.log(`response1: ${response1}`);

  try {
    const response2 = await http.fetch("https://fail.example.com");

    console.log(`response2: ${response2}`);
  } catch (e) {
    console.error(`request 2 failed: ${e.message}`);
  }
})().catch(e => console.error(e)); // linter protects us
