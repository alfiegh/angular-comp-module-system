import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CollectionModule } from './collection/collection.module'; -> now is being lazy loaded, when used here, it was in the imports array
// import { ElementModule } from './element/element.module'; -> now is being lazy loaded
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { ViewsHomeComponent } from './views/views-home/views-home.component';
// import { StatisticsComponent } from './views/statistics/statistics.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
