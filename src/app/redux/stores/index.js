import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas'
import { reducer as UserReducer } from './user/reducers'
import { createBrowserHistory as createHistory } from 'history';
import { reducer as NotificationReducer } from './notification/reducers'

export const history = createHistory()

const store = () => {
  const appReducer = combineReducers({
    users: UserReducer,
    notifications: NotificationReducer
  })

  const rootReducer = (state, action) => {
    if(action.type === "LOGOUT") {
      state = undefined
    }

    return appReducer(state, action)
  }

  return configureStore(rootReducer, rootSaga, history)
}

export default store