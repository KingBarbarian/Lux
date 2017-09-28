import { User } from '@/actions'
const defaultState = {
  token: '',
}

const user = (state = defaultState, action) => {
  switch(action.type) {
    case User.USER_TOKEN.SUCCESS:
      return {
        token: action.payload
      }
    default: 
      return state;
  }
}

module.exports = user