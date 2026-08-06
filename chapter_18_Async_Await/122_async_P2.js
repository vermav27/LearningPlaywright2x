async function getToken() {
    return Promise.resolve("sfsdkfjabvi475oa8vyvbyoqvyb4v");
}

async function run() {
    let result = await getToken();
    console.log(result);
}

run();
