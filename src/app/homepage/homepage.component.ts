import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAssetsList } from '../store/Assets/Assets.Selectors';
import { loadAssets } from '../store/Assets/Assets.Action';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadAssets());
    this.store.select(getAssetsList).subscribe((res: any[]) => {
      console.log(res.filter((val) => val.type_is_crypto));
    });
  }
}
