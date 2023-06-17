const initialState = {
    data: [
        {
            key: 1,
            title: "Wind Fund",
            icon: "Wind",
            price: "$1032.23",
            percentage: "3.51%",
            aum: "$430.88m",
            issueDate: "18/04/2022",
            vintageRange: "2019-2022",
            ter: "0.15%",
            priceAtCost: "$17.68",
            priceAtOpen: "$17.74"
        },
        {
            key: 2,
            title: "Solar Fund",
            icon: "Sun",
            price: "$986.61",
            percentage: "0.13%",
            aum: "$200.70m",
            issueDate: "13/01/2022",
            vintageRange: "2020-2022",
            ter: "0.20%",
            priceAtCost: "$18.61",
            priceAtOpen: "$18.34"            
        },
        {
            key: 3,
            title: "Nature Fund",
            icon: "Narute",
            price: "$1122.95",
            percentage: "5.00%",
            aum: "$109.38m",
            issueDate: "01/01/2022",
            vintageRange: "2021-2022",
            ter: "2.10%",
            priceAtCost: "$50.15",
            priceAtOpen: "$12.00"            
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