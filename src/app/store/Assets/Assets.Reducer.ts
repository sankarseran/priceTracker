import { loadAssetsSuccess, loadAssetsFail } from './Assets.Action';
import { createReducer, on } from '@ngrx/store';
import { assetsState } from './Assets.State';
import { AssetsState } from 'src/app/model/Assets.Model';

const _AssetsReducer = createReducer(
  assetsState,
  on(loadAssetsSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.list],
      errorMessage: '',
    };
  }),
  on(loadAssetsFail, (state, action) => {
    return {
      ...state,
      list: [],
      errorMessage: action.errorMessage,
    };
  })
);

export function AssetsReducer(
  state: AssetsState | undefined,
  action: { type: string }
) {
  return _AssetsReducer(state, action);
}
