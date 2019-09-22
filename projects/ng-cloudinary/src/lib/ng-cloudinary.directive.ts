import { Directive, OnInit, Input, HostBinding, ElementRef } from '@angular/core';
import { NgCloudinaryService } from './ng-cloudinary.service';
import { CloudinaryTransform } from './ng-cloudinary.models';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: 'img[libClSrc]',
})
export class NgCloudinaryDirective implements OnInit {
  @Input() libClSrc: string;
  @HostBinding('src') url?: string;
  @Input() transform: CloudinaryTransform;

  constructor(private cloudinaryService: NgCloudinaryService) { }

  ngOnInit() {
    this.url = this.cloudinaryService.getUrl(this.libClSrc, this.transform);
  }

}

@Directive({
  selector: '[libClBgSrc]',
})
export class NgCloudinaryBackgroundDirective implements OnInit {
  @Input() libClBgSrc: string;
  @HostBinding('style.background-image') url?: SafeStyle;
  @Input() transform: CloudinaryTransform;

  constructor(private cloudinaryService: NgCloudinaryService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustStyle(`url('${this.cloudinaryService.getUrl(this.libClBgSrc, this.transform)}')`);
    console.log(this.url);
  }

}
