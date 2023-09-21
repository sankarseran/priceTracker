import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

import { LayoutComponent } from './component/layout/layout.component';
import { AssetsListComponent } from './component/assets-list/assets-list.component';
import { AssetsItemComponent } from './component/assets-item/assets-item.component';

import { AppEffects } from './store/Common/App.Effects';
import { AssetsEffects } from './store/Assets/Assets.Effects';
import { AssetsReducer } from './store/Assets/Assets.Reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LayoutComponent,
    FavoritesPageComponent,
    AssetsListComponent,
    AssetsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ coinassets: AssetsReducer }),
    EffectsModule.forRoot([AssetsEffects, AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
