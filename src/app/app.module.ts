import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {RequirementModule} from './requirement/requirement.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        RequirementModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
