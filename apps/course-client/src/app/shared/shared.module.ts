import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SharedUiModule } from '@course-platform/shared/ui';
import { FeatureToggleModule } from '@course-platform/shared/util/util-feature-toggle';
import { AppMaterialModule } from './material.module';

// TODO: organize imports here
const imports = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule,
    FeatureToggleModule,
    AppMaterialModule,
    TranslateModule.forChild(),
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    SharedUiModule,
    FeatureToggleModule,
    AppMaterialModule,
    TranslateModule,
    FlexLayoutModule
  ],
  providers: []
})
export class SharedModule {}
