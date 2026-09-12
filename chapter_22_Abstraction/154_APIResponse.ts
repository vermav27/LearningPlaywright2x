interface APIResponse {
    endpoint: string;
    header?: object;
    body: string;
    responseCode: number;
}

let hitAPI1: APIResponse = {
    endpoint: "www.cptest.sciensus.com",
    body: "{ }",
    responseCode: 202
};

console.log(hitAPI1.endpoint);

// Here ? in line 3 means that that particular variable is optional in nature.