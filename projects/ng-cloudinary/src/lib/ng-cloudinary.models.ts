import { InjectionToken } from '@angular/core';

export interface CloudinaryConfig {
  cloudName: string;
}

export const CloudinaryConfigService = new InjectionToken<CloudinaryConfig>('CloudinaryConfig');

export interface CloudinaryTransform {
  width?: number | string;
  height?: number | string;
  crop?: string;
  aspect_ratio?: number | string;
  gravity?: string;
  zoom?: number;
  x?: number | string;
  y?: number | string;
  quality?: number | string;
  radius?: number | string;
  angle?: number | string;
  effect?: string;
  opacity?: number;
  border?: string;
  background?: string;
  overlay?: string;
  underlay?: string;
  color?: string;
  color_space?: string;
  dpr?: number | 'auto';
  density?: number;
  flags?: string | string[];
  transformation?: string;
}

export const attributeMapping = {
  width: 'w',
  height: 'h',
  crop: 'c',
  aspect_ratio: 'ar',
  gravity: 'g',
  zoom: 'z',
  x: 'x',
  y: 'y',
  quality: 'q',
  radius: 'r',
  angle: 'a',
  effect: 'e',
  opacity: 'o',
  border: 'bo',
  background: 'b',
  overlay: 'l',
  underlay: 'u',
  color: 'co',
  color_space: 'cs',
  dpr: 'dpr',
  density: 'dn',
  flags: 'fl',
  transformation: 't'
};
