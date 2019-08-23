import { VideoEditorActionTypes } from './video-editor.types';

const INITIAL_STATE = {
    hidden: true
}

const videoEditorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case VideoEditorActionTypes.SHOW_VIDEO_EDITOR_MENU:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state;
    }
}

export default videoEditorReducer;