let data = {
    users: {
        user1: {
            name: "Vineet",
            age: 34,
            place: {
                city1: "Una",
                city2: "Delhi"
            }
        },
        user2: {
            name: "Ankita",
            age: 33,
            place: {
                city1: "Bikaner",
                city2: "Delhi"
            }
        }

    },
    admins: {
        adm1: {
            name: "Parth",
            age: 34,
            place: {
                city1: "Mumbai",
                city2: "Hyderabad"
            }
        },
        adm2: {
            name: "Ravi",
            age: 33,
            place: {
                city1: "Hisar",
                city2: "Gurgaon"
            }
        }

    }
};

console.log(data.users.user2.place.city2);