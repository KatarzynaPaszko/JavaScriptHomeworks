import { action } from 'typesafe-actions';
import { ADD_PAWS } from './constant';
import { IPaw } from '../../scenes/ChessMove/services/paws';

export const addPaws = (paws:IPaw[]) => action(ADD_PAWS, paws);