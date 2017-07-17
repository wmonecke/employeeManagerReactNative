const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'employee_update':
      return { ...state, [action.payload.prop]: action.payload.value }
    case 'employee_create':
      return { INITIAL_STATE };
    default:
      return state;
  }
};
