import { rootReducer } from "./root/reducer";
import { RootActionType } from './root';

declare module 'Types' {
    export type RootState = StateType<typeof rootReducer>
    export type RootAction = 
        | RootActionType
}