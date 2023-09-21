import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { emptyAction, showAlert } from './App.Action';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private $action: Actions, private _snackbar: MatSnackBar) {}

  _showAlert = createEffect(() =>
    this.$action.pipe(
      ofType(showAlert),
      exhaustMap((action) => {
        return this.snackbarAlert(action.message, action.resultType)
          .afterDismissed()
          .pipe(
            map(() => {
              return emptyAction();
            })
          );
      })
    )
  );

  snackbarAlert(message: string, resultType: string = 'error') {
    let _class = resultType == 'success' ? 'green-snackbar' : 'red-snackbar';
    return this._snackbar.open(message, 'OK', {
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      duration: 3000,
      panelClass: [_class],
    });
  }
}
