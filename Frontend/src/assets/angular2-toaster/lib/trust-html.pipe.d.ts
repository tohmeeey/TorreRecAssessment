import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class TrustHtmlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(content: any): SafeHtml;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TrustHtmlPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<TrustHtmlPipe, "trustHtml">;
}

//# sourceMappingURL=trust-html.pipe.d.ts.map