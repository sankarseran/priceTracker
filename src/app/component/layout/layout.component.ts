import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { loadAssets } from 'src/app/store/Assets/Assets.Action';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isFav: boolean | undefined;

  constructor(private router: Router, private store: Store) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event?.url.split('/')[1] === 'favorites') {
          this.isFav = true;
        } else {
          this.isFav = false;
        }
      });
  }

  navToFav(): void {
    this.router.navigate([this.isFav ? '' : '/favorites']);
  }

  syncPrice(): void {
    this.store.dispatch(loadAssets({ isForced: true }));
  }
}
