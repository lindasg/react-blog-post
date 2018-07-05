import _ from 'lodash';

export default function(state={}, action) {
  switch (action.type) {
    case 'delete_post':
      return _.omit(state, action.payload);
    case 'fetch_posts':
      return _.mapKeys(action.payload.data, 'id');
    case 'fetch_post':
      return { ...state, [action.payload.data.id]:action.payload.data };

    default:
      return state;
  }
}
