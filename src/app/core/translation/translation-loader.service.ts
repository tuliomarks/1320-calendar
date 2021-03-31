import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { locale as portuguese } from './i18n/pt-br';

export interface Locale {
    lang: string;
    data: Object;
}

@Injectable({
    providedIn: 'root'
})
export class TranslationLoaderService {
    /**
     * Constructor
     *
     * @param {TranslateService} _translateService
     */
    constructor (
        private _translateService: TranslateService
    ) {
        // load messages
        this.loadTranslations(portuguese);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Load translations
     *
     * @param {Locale} args
     */
    loadTranslations(...args: Locale[]): void {
        const locales = [...args];

        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this._translateService.setTranslation(locale.lang, locale.data, true);
        });
    }

    /**
     * Get current language
     *
     * @param {Locale} args
     */
    getCurrentLanguage(): string {
        return this._translateService.currentLang;
    }

    /**
     * Get translation
     *
     * @param {Locale} args
     */
    get(...args: string[]): Observable<any> {
        const keys = [...args];
        return this._translateService.get(keys);
    }

    getMessage(code: string, params?: Object): Observable<any> {
        return this._translateService.get(code, params);
    }

    initTranslationLazyModule() {
        setTimeout(() => {
            const current = this._translateService.currentLang;
            this._translateService.setDefaultLang('en');
            this._translateService.use(current);
         });
    }

}
