import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: 'safe'
  })
export class SafePipe implements PipeTransform{

    constructor(protected sanitizer: DomSanitizer) {}

    transform(value: any, ...args: any[]) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    
}