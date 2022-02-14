export enum ActionKind {
    signOut = 'signOut',
    sigIn = 'sigIn',
}

export type State = {
    user: boolean
}

export type Action =
    | { readonly type: 'sigIn'; payload: boolean }
    | { readonly type: 'signOut'; payload: boolean }

export type Dispatch = (action: Action) => void

export const initialState: State = {
    user: true,
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ActionKind.sigIn:
            return {
                ...state,
                user: action.payload,
            }
        case ActionKind.signOut:
            return { ...state, user: action.payload }
        default:
            return { ...state }
    }
}
