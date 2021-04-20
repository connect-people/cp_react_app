import keyMirror from 'keymirrorprefix'

function makeAsyncActions(actionName) {
    const prefix = actionName;
    return keyMirror(prefix, {
        INDEX: null,
        SUCCESS: null,
        FAIL: null,
    })
}


export const GET_SEARCH_KEYWORD = makeAsyncActions('GET_SEARCH_KEYWORD');