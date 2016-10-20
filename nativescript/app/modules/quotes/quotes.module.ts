import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular';

import { QuoteService, MyFavouritesService } from '../../x-shared/app/quotes';

import { SharedModule } from '../shared/shared.module';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuotesComponent } from './quotes.component';
import { quotesRouting } from './quotes.routing';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    SharedModule,
    quotesRouting
  ],
  declarations: [
    LISTVIEW_DIRECTIVES,
    QuotesListComponent,
    QuotesComponent
  ],
  providers: [QuoteService, MyFavouritesService]
})
export class QuotesModule { }