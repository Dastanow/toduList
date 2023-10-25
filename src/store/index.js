import { createStore } from "redux";

const inishal = {
    todus: [],
    istoList: false,
    timeId: new Date()
};

const todosReduser = (state = inishal, action) => {
    switch(action.type) {
        case "GET_TODUS":
            console.log( "Acton",action.payload);
            return {
            ...state,
            todus: [...action.payload],
            };
            case "ADD__TODO":
            const todo = {
            id: state.todus.length +1,
            email: action.payload,
          
            };
            console.log(todo);  
            return {
                ...state,
                todus: [...state.todus, todo]
            };
            // case "ADD__DELETE":
            //     const delet = async (id) => {
            //         const idToDelete = action.payload;
            //         const updatedTodus =  todus.filter((item) => item.id !== idToDelete)
            //         return {
            //             ...state,
            //             todus:  updatedTodus,
            //         };
            //     }

}
}

const store = createStore(todosReduser);
export default store;