const initialState = [];

// Our exemplary reducer saves the submitted forms
const submitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_SEND':
      return [
        ...state,
        { from: action.payload },
      ];
    default:
      return state;
  }
};

export default submitReducer;
