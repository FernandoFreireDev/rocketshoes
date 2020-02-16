export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [ ...state, action.product ];
      break;
    default:
      return state;
      break;
  }
}
