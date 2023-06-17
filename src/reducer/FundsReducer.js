const initialState = {
    data: [
        {
            key: 1,
            title: "Wind Fund",
            icon: "Wind",
            price: "$1032.23",
            percentage: "3.51%"

        },
        {
            key: 2,
            title: "Solar Fund",
            icon: "Sun",
            price: "$986.61",
            percentage: "0.13%"
        },
        {
            key: 3,
            title: "Nature Fund",
            icon: "Narute",
            price: "$1122.95",
            percentage: "5.00%"
        }
    ]
}


const FundsReducer = (state = initialState, action) => {

    switch(action.tyoe) {
        case 'AAA': {
            let data = [...state.data];
            return data;
        };
    }

    return state;

}

export default FundsReducer;