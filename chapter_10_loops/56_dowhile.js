let retry = 1;
do {

    console.log("Retrying attempt =", retry);
    console.log("Retrying....");
    retry++;

} while (retry < 4);