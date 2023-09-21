import { Asset } from 'src/app/model/Assets.Model';
import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAssetsList } from '../store/Assets/Assets.Selectors';
import { loadAssets } from '../store/Assets/Assets.Action';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  assets: Asset[] = [];
  fullAssets: Asset[] = [];
  searchText: string = '';
  @ViewChild('searchInput') searchInput: ElementRef | null;
  constructor(private store: Store) {
    this.searchInput = null;
  }

  loadMoreData() {
    this.assets.push(
      ...this.fullAssets.slice(this.assets.length, this.assets.length + 100)
    );
  }

  filterAssets() {
    this.assets = this.fullAssets.filter(
      (asset) =>
        asset.name
          .toLocaleLowerCase()
          .includes(this.searchText.toLocaleLowerCase()) ||
        asset.asset_id
          .toLocaleLowerCase()
          .includes(this.searchText.toLocaleLowerCase())
    );
  }

  ngAfterViewInit() {
    if (this.searchInput) {
      fromEvent(this.searchInput.nativeElement, 'input')
        .pipe(
          debounceTime(2000) // 2 seconds
        )
        .subscribe(() => {
          if (this.searchText.trim().length) {
            this.filterAssets();
          }
        });
    }
  }

  ngOnInit(): void {
    this.store.dispatch(loadAssets({ isForced: false }));
    this.store.select(getAssetsList).subscribe((res: Asset[]) => {
      this.fullAssets = res;
      if (this.searchText.trim().length) {
        this.filterAssets();
      } else {
        this.assets = res.slice(0, 100);
      }
    });
  }
}
