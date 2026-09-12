// Readonly Concept

interface point {
    readonly name: string;
    readonly id: string;
}

const user1: point = {
    name: "Vineet",
    id: "12xitr45"
}

// user1.name = "Vikas"; - It is not allowed as we have defined the interface as readonly.