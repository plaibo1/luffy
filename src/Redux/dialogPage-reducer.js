const ADD_MSG = 'ADD-MSG'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Alex Ferguson'},
        {id: 2, name: 'Selena Huemez'},
        {id: 3, name: 'LAFLAME'},
        {id: 4, name: 'Castro Pedali'},
        {id: 5, name: 'Suka Ebanaya'},
        {id: 6, name: 'Putyacha Na Kolesikah'},
      ],

    msgData: [
        {id: 1, msg: 'What do u think about it?'},
        {id: 2, msg: 'What do u think about it?'},
        {id: 3, msg: 'What do u think about it?'},
        {id: 4, msg: 'What do u think about it?'},
        {id: 5, msg: 'What do u think about it?'},
      ]
}

const dialogPageReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MSG:

            let newMsg = {
                id: 6,
                msg: action.msg
            }

            return {
                ...state,
                msgData: [...state.msgData, newMsg]
            }

        default:
            return state;
    }
}

export const addMsgCreator = (msg) => ({type: ADD_MSG, msg})



export default dialogPageReducer;