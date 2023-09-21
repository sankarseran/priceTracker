import {
  loadAssets,
  loadAssetsSuccess,
  loadAssetsFail,
  updateAssets,
  updateAssetsSuccess,
} from './Assets.Action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, of, map, switchMap } from 'rxjs';
import { Asset } from 'src/app/model/Assets.Model';
import { AssetsService } from 'src/app/service/assets.service';
import { showAlert } from '../Common/App.Action';

@Injectable()
export class AssetsEffects {
  constructor(private action$: Actions, private service: AssetsService) {}

  _loadAssets = createEffect(() =>
    this.action$.pipe(
      ofType(loadAssets),
      exhaustMap(() => {
        return this.service.GetAll().pipe(
          map((data: Asset[]) => {
            return loadAssetsSuccess({ list: data });
          }),
          catchError((_error) =>
            of(loadAssetsFail({ errorMessage: _error.message }))
          )
        );
      })
    )
  );

  _updateAssets = createEffect(() =>
    this.action$.pipe(
      ofType(updateAssets),
      switchMap((action) => {
        return of(
          updateAssetsSuccess({
            updatedAsset: action.updatedAsset,
            isFav: action.isFav,
          }),
          showAlert({
            message:
              action.updatedAsset.asset_id +
              (action.isFav
                ? ' Added to Favorites.'
                : ' Removed from Favorites.'),
            resultType: 'success',
          })
        );
      })
    )
  );
}
