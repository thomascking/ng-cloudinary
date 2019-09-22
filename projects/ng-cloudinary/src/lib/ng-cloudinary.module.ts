import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgCloudinaryDirective, NgCloudinaryBackgroundDirective } from './ng-cloudinary.directive';
import { NgCloudinaryService } from './ng-cloudinary.service';
import { CloudinaryConfig, CloudinaryConfigService } from './ng-cloudinary.models';

@NgModule({
  declarations: [
    NgCloudinaryDirective,
    NgCloudinaryBackgroundDirective
  ],
  imports: [
  ],
  exports: [
    NgCloudinaryDirective,
    NgCloudinaryBackgroundDirective
  ]
})
export class NgCloudinaryModule {
  static forRoot(config: CloudinaryConfig): ModuleWithProviders {
    return {
      ngModule: NgCloudinaryModule,
      providers: [
        NgCloudinaryService,
        {
          provide: CloudinaryConfigService,
          useValue: config
        }
      ]
    };
  }
}
