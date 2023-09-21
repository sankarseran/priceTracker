import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAssets } from '../store/Assets/Assets.Action';
import { getAssetsList } from '../store/Assets/Assets.Selectors';
import { Asset } from '../model/Assets.Model';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent {
  assets: Asset[] = [];
  favAssetsId: string[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadAssets({ isForced: false }));
    this.store.select(getAssetsList).subscribe((res: Asset[]) => {
      this.assets = res.filter((asset) => {
        if (asset.isFav) {
          this.favAssetsId.push(asset.asset_id);
          return true;
        }
        return undefined;
      });
      localStorage.setItem('favAssetsId', JSON.stringify(this.favAssetsId));
    });
  }
}
