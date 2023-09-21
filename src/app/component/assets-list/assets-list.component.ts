import { Asset } from 'src/app/model/Assets.Model';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAssetsList } from 'src/app/store/Assets/Assets.Selectors';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss'],
})
export class AssetsListComponent {
  @Input()
  assets: Asset[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
