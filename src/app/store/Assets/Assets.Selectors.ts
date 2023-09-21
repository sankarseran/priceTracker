import { AssetsState } from './../../model/Assets.Model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAssetsState = createFeatureSelector<AssetsState>('coinassets');

export const getAssetsList = createSelector(getAssetsState, (state) => {
  return state.list;
});
