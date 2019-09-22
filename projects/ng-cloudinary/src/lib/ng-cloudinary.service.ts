import { Injectable, Inject } from '@angular/core';
import { CloudinaryConfigService, CloudinaryConfig, CloudinaryTransform, attributeMapping } from './ng-cloudinary.models';

@Injectable({
  providedIn: 'root'
})
export class NgCloudinaryService {

  constructor(@Inject(CloudinaryConfigService) private config: CloudinaryConfig) {}

  getUrl(src: string, transformation: CloudinaryTransform = {}): string {
    let t = this.getTransformationString(transformation);
    t = t ? `${t}/` : '';
    return `//res.cloudinary.com/${this.config.cloudName}/image/upload/${t}${src}`;
  }

  private getTransformationString(transformation: CloudinaryTransform): string {
    const t = [];
    for (const key of Object.keys(transformation)) {
      if (attributeMapping[key]) {
        t.push(`${attributeMapping[key]}_${transformation[key]}`);
      }
    }
    return t.join(',');
  }
}
