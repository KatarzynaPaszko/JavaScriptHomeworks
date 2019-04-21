import { combineReducers } from "redux";
import { ActionType } from 'typesafe-actions';
import * as chessMoveConstants from './constant';
import * as chessMoveActions from './action';

export type ChessMoveActionType = ActionType<typeof chessMoveActions>;

export interface IChessMoveState {

}

export default combineReducers<IChessMoveState,ChessMoveActionType> ({
    chessMove: (state: any, action: any) => {
        switch(action.type) {
            case chessMoveConstants.ADD_PAWS: 
                return [
                    ...state,
                    
                ]
            default: 
            return state
        }
    }
})
