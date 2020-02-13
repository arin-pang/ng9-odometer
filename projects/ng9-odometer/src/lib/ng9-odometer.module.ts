/**
 * Created by Jose Andres on 02.23.17
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng9OdometerComponent } from './ng9-odometer.component';

@NgModule({
    imports: [CommonModule],
    declarations: [Ng9OdometerComponent],
    exports: [Ng9OdometerComponent]
})
export class Ng9OdometerModule {
    static forRoot(): ModuleWithProviders<Ng9OdometerModule> {
        return {
            ngModule: Ng9OdometerModule
        };
    }
}
