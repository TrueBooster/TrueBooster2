import * as TypedRedux from 'typed-redux-kit'
import { State } from '../state'
import { reducer as UIReducer } from './UI'
import { reducer as LocationReducer } from './Location'
import { reducer as ReposCreateReducer } from './Pages/ReposCreate'
import { reducer as RepositoryMapReducer } from './RepositoryMap'
import * as Actions from '../actions'

export const reducer = new TypedRedux.MappedPipeReducer<State>({
  initialState: State()
})

reducer.set(Object.values(Actions.UI.ActionTypes), UIReducer)
reducer.set(Object.values(Actions.Location.ActionTypes), LocationReducer)
reducer.set(Object.values(Actions.RepositoryMap.ActionTypes), RepositoryMapReducer.reduce)
reducer.set(Object.values(Actions.Pages.ReposCreate.ActionTypes), ReposCreateReducer)
