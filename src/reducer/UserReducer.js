const initialState = {
    data: [
        {
            key: 1,
            firstName: "Demo",
            lastName: "Demo",
            email: "demo@demo.com",
            portifolio: "$1,245.23",
            portifolioPercentage: "31.82%",
            accountValue: "$1,457.23"
        },
    ]
}


const UserReducer = (state = initialState, action) => {

    switch(action.tyoe) {
        case 'RETURN_USERS': {
            let data = [...state.data];
            return data;
        };
    }

    return state;

}

export default UserReducer;