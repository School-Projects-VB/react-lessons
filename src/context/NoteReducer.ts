import {Note} from "../types/NoteType";
import {Action} from "../types/ActionType";
import {Timestamp} from "@firebase/firestore";

export enum NoteActionType {
    SET_NOTE = "SET_NOTE",
    SET_NOTES = 'SET_NOTES',
    ADD_NOTES = 'ADD_NOTES',
    SET_LOADING = 'SET_LOADING'
}

export interface NoteState {
    note: Note;
    notes: Note[];
    loading: boolean;
}

export const initialNoteState: NoteState = {
    note: {
        id: "default",
        title: "ERROR",
        content: "Not found",
        created_date: Timestamp.now()
    },
    notes: [],
    loading: true,
}

export const noteReducer = (state: NoteState, action: Action<NoteActionType>) => {
    switch (action.type) {
        case NoteActionType.SET_NOTE:
            return {
                ...state,
                note: action.payload,
                loading: false,
            };
        case NoteActionType.SET_NOTES:
            return {
                ...state,
                notes: action.payload,
                loading: false,
            };
        case NoteActionType.ADD_NOTES:
            return {
                ...state,
                notes: [
                    action.payload,
                    ...state.notes,
                ],
            };
        case NoteActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
}