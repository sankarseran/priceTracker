import { updateAssets } from './../../store/Assets/Assets.Action';
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';
import { Asset } from 'src/app/model/Assets.Model';

@Component({
  selector: 'app-assets-item',
  templateUrl: './assets-item.component.html',
  styleUrls: ['./assets-item.component.scss'],
})
export class AssetsItemComponent {
  @Input()
  assetItem: Asset | null;
  USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  price = '0';
  imageUrl = '';
  constructor(private store: Store) {
    this.assetItem = null;
  }

  addToFav() {
    // Todo call despatch and update fav list
    if (this.assetItem?.isFav) {
      this.store.dispatch(
        updateAssets({ updatedAsset: this.assetItem, isFav: false })
      );
    } else if (this.assetItem) {
      this.store.dispatch(
        updateAssets({ updatedAsset: this.assetItem, isFav: true })
      );
    }
  }

  ngOnInit() {
    this.price = this.USDollar.format(
      this.assetItem?.price_usd ? this.assetItem?.price_usd : 0
    );
    this.imageUrl = this.assetItem?.id_icon
      ? 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_64/' +
        this.assetItem?.id_icon?.split('-').join('') +
        '.png'
      : '../../../assets/icons/icon-192x192.png';
  }
}
