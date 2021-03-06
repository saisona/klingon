import { CliService } from './cli/cli.service';
import { TerminalModule } from './_shared/terminal/terminal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MdTabsModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdSnackBarModule} from '@angular/material';
import {MdProgressBarModule} from '@angular/material';
import {MdSlideToggleModule} from '@angular/material';

import { AppComponent, SnackBarErrorComponent, SnackBarSuccessComponent } from './app.component';
import { DropDownComponent } from './_shared/drop-down/drop-down.component';
import { CliCreateComponent } from './cli/create/create.component';
import { CliServeComponent } from './cli/serve/serve.component';
import { BuildComponent } from './cli/build/build.component';
import { FlagsComponent } from './cli/flags/flags.component';
import { CliTestComponent } from './cli/test/test.component';
import { LogComponent } from './_shared/log/log.component';

const MdModules = [
  MdTabsModule,
    MdIconModule,
    MdToolbarModule,
    MdInputModule,
    MdTooltipModule,
    MdCheckboxModule,
    MdSelectModule,
    MdGridListModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdListModule,
    MdSnackBarModule,
    MdProgressBarModule,
    MdSlideToggleModule
];

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    CliCreateComponent,
    CliServeComponent,
    BuildComponent,
    FlagsComponent,
    CliTestComponent,
    LogComponent,
    SnackBarSuccessComponent,
    SnackBarErrorComponent
  ],
  entryComponents: [
    SnackBarSuccessComponent,
    SnackBarErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TerminalModule,
    BrowserAnimationsModule,
    ...MdModules
  ],
  providers: [CliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
