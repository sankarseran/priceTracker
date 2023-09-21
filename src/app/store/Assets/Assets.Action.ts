import { createAction, props } from '@ngrx/store';
import { Asset } from 'src/app/model/Assets.Model';

export const LOAD_ASSETS = '[assets page]load assets';
export const LOAD_ASSETS_SUCCESS = '[assets page]load assets success';
export const LOAD_ASSETS_FAIL = '[assets page]load assets fail';

export const UPDATE_ASSETS = '[assets page]update assets';
export const UPDATE_ASSETS_SUCCESS = '[assets page]update assets success';

export const loadAssets = createAction(
  LOAD_ASSETS,
  props<{ isForced: boolean }>()
);
export const loadAssetsSuccess = createAction(
  LOAD_ASSETS_SUCCESS,
  props<{ list: Asset[] }>()
);
export const loadAssetsFail = createAction(
  LOAD_ASSETS_FAIL,
  props<{ errorMessage: string }>()
);

export const updateAssets = createAction(
  UPDATE_ASSETS,
  props<{ updatedAsset: Asset; isFav: boolean }>()
);
export const updateAssetsSuccess = createAction(
  UPDATE_ASSETS_SUCCESS,
  props<{ updatedAsset: Asset; isFav: boolean }>()
);
