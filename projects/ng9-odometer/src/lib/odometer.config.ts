/**
 * Created by Jose Andres on 6.15.17
 */
export interface Ng9OdometerConfigModel {
    animation?: string;
    format?: string;
    theme?: string;
    value?: number;
    duration?: number;
    auto?: boolean;
}

export class Ng9OdometerConfig implements Ng9OdometerConfigModel {
    animation ? = 'slide';
    format = '(,ddd)';
    theme ? = 'default';
    value ? = 0;
    duration ? = 2000;
    auto ? = true;
}
