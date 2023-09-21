import {
  loadAssetsSuccess,
  loadAssetsFail,
  updateAssetsSuccess,
} from './Assets.Action';
import { createReducer, on } from '@ngrx/store';
import { assetsState } from './Assets.State';
import { AssetsState } from 'src/app/model/Assets.Model';

const _AssetsReducer = createReducer(
  assetsState,
  on(loadAssetsSuccess, (state, action) => {
    const favIds = localStorage.getItem('favAssetsId');
    let list = action.list.filter(
      (val) => val?.type_is_crypto && val?.price_usd
    );
    if (favIds) {
      const ids: string[] = JSON.parse(favIds);
      list = list.map((val) => {
        if (ids.findIndex((id) => val.asset_id === id) >= 0) {
          return {
            ...val,
            isFav: true,
          };
        }
        return val;
      });
    }
    localStorage.setItem('assetsList', JSON.stringify(list));
    return {
      ...state,
      list,
      errorMessage: '',
    };
  }),
  on(updateAssetsSuccess, (state, action) => {
    const updatedData = state.list.map((asset) => {
      return asset.asset_id === action.updatedAsset.asset_id
        ? { ...asset, isFav: action.isFav }
        : asset;
    });
    localStorage.setItem('assetsList', JSON.stringify(updatedData));
    return {
      ...state,
      list: updatedData,
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
