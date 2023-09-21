import { createAction, props } from '@ngrx/store';
import { Asset } from 'src/app/model/Assets.Model';

export const LOAD_ASSETS = '[assets page]load assets';
export const LOAD_ASSETS_SUCCESS = '[assets page]load assets success';
export const LOAD_ASSETS_FAIL = '[assets page]load assets fail';

export const loadAssets = createAction(LOAD_ASSETS);
export const loadAssetsSuccess = createAction(
  LOAD_ASSETS_SUCCESS,
  props<{ list: Asset[] }>()
);
export const loadAssetsFail = createAction(
  LOAD_ASSETS_FAIL,
  props<{ errorMessage: string }>()
);
