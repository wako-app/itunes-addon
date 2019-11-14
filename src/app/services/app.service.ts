import { Injectable } from '@angular/core';
import { PluginLoaderService } from '@wako-app/mobile-sdk';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(protected pluginLoader: PluginLoaderService) {

  }

  loadPlugins() {
    return this.pluginLoader.install('/assets/plugins/manifest.json', 'en');
  }
}
