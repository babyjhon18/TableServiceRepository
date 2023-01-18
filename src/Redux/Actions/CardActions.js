import { UPDATE_CARD_VIEW, CARD_BUMP_ITEM, SET_PLAY_AUDIO, UPDATE_TIMER } from '../../Store/Constants'

export function UpdateTimer(){
    return {
        type: UPDATE_TIMER,
    }
}

export function UpdateViewCards(){
    return {
        type: UPDATE_CARD_VIEW,
    }
}

export function SetPlayAudio(){
    return {
        type: SET_PLAY_AUDIO,
    }
}

export function BumpCard(){
    return {
        type: CARD_BUMP_ITEM,
    }
}