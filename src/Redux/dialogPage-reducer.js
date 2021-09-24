const ADD_MSG = 'ADD-MSG'
const UPDATE_MSG_TEXT_ON_CHANGE = 'UPDATE-MSG-TEXT-ON-CHANGE'

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
        {id: 1, msg: 'What did u tal about?'},
        {id: 2, msg: 'What did u tal about?'},
        {id: 3, msg: 'What did u tal about?'},
        {id: 4, msg: 'What did u tal about?'},
      ],
    msgInputValue: ''
}

const dialogPageReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MSG:
            if (state.msgInputValue === '') return state
            let newMsg = {
                id: 5, 
                msg: state.msgInputValue
            }
            state.msgData.push(newMsg)
            state.msgInputValue = '';
            return state

        case UPDATE_MSG_TEXT_ON_CHANGE:
            state.msgInputValue = action.txt;
            return state

        default:
            return state;
    }
} 

export const addMsgCreator = () => ({type: ADD_MSG})

export const updateMsgOnChangeCreator = (text) => (
  {type: UPDATE_MSG_TEXT_ON_CHANGE, txt:text}
)


export default dialogPageReducer;