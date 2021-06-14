import { combineReducers } from "redux"
import libraryReducers from "./libraryReducers"
import selectionReducers from "./selectionReducers"
export default combineReducers({
    libraries: libraryReducers,
    selectedLibraryId: selectionReducers
})