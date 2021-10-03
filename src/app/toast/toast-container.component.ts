import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './toast-service';



@Component({
    selector: 'app-toasts',
    templateUrl: './toast.component.html',
    host: { '[class.ngb-toasts]': 'true' }
})
export class ToastsContainer {
    constructor(public toastService: ToastService) { }
    show = true;
    isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

    close() {
        this.show = false;
        setTimeout(() => this.show = true, 3000);
    }
}
