# ng9-odometer [![npm version](https://img.shields.io/npm/v/ng9-odometer.svg?style=flat)](https://www.npmjs.com/package/ng9-odometer) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Odometer for Angular9 that wraps HubSpot's Odometer [http://github.hubspot.com/odometer/docs/welcome/](http://github.hubspot.com/odometer/docs/welcome/)

## Quick Start

```
npm install ng9-odometer --save
```

## Table of contents

- [Setup](#setup)
- [Usage](#usage)
- [Configuration](#configuration)

## Setup

First you need to install the npm module:
```sh
npm install ng9-odometer --save
```

Then add the `Ng9OdometerModule` to the imports array of your application module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng9OdometerModule } from 'ng9-odometer'; // <-- import the module
import { AppComponent} from './app.component';

@NgModule({
    imports: [
      BrowserModule, 
      Ng9OdometerModule.forRoot() // <-- include it in your app module
    ], 
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    //
}
```

## Usage 

Use the `<ng9-odometer></ng9-odometer>` component to create an odometer. The `number` is required attribute. 
The `number` represents the limit at which the odometer will travel. The `config` an object with the configuration properties, this is NOT required. 

```js
@Component({
   selector: 'main-element',
   template: `
        ...
        <ng9-odometer [number]="number" [config]="{ }"></ng9-odometer>
        <!-- Further content here -->
        ...
   `
})
export class MainElementComponent {
  public number: number = 1000;
}
```

When on manual mode (`[config]="{ auto: false }"`), you can update the `number` attribute and that will trigger an odometer update right away. The `observable` is an Observable which will be used as a trigger for the odometer when on manual mode. 

```js
@Component({
   selector: 'main-element',
   template: `
        ...
        <ng9-odometer [number]="number" [config]="{ auto: false }" [observable]="observable"></ng9-odometer>
        <!-- Further content here -->
        ...
   `
})
export class MainElementComponent {
  public number: number = 1000;
  public observable: Observable<boolean>;
  private observer: Observer<boolean>;
  
  constructor() {
    this.observable = new Observable<boolean>((observer: any) => this.observer = observer).share();

    // Trigger odometer after 2s
    setTimeout(() => this.observer.next(true), 2000);
  }
}
```

## Configuration

The component accepts either a `[config]="{ ... }"` attribute with an object with all the configurable attribues or independent attributes for each configuration.

| Option        | Type      | Default     | Description   |
| --------------| --------- | ----------- |-------------- |
| `animation`   | string    | 'slide'     | Animation effect type. <br> Options: 'slide', 'count'
| `format`      | string    | '(,ddd)'    | Format to apply on the numbers. <br> Format - Example: <br> (,ddd) - 12,345,678 <br> (,ddd).dd - 12,345,678.09 <br> (.ddd),dd - 12.345.678,09 <br> ( ddd),dd - 12 345 678,09 <br> d         -  12345678
| `theme`       | string    | 'default'   | The desired theme. <br> Options: 'default', 'minima', 'digital', 'car', 'plaza', 'slot-machine', 'train-station'
| `value`       | number    | 0           | Initial value of the odometer
| `auto`        | boolean   | true        | Setup auto or manual mode for the odometer

```js
@Component({
   selector: 'main-element',
   template: `
        ...
        <ng9-odometer 
            [number]="1000" 
            [observable]="observable" 
            [config]="config"></ng9-odometer>
        <!-- Further content here -->

        <ng9-odometer 
            [number]="1000" 
            [observable]="observable"
            [config]="{ animation: 'count', format: 'd', theme: 'car', value: 50, auto: false }">
        </ng9-odometer>
        <!-- Further content here -->

        <ng9-odometer 
            [number]="1000"  
            [observable]="observable"
            [animation]="'count'"
            [format]="'d'"
            [theme]="'car'"
            [value]="0",
            [auto]="false">
        </ng9-odometer>
        <!-- Further content here -->
        ...
   `
})
export class MainElementComponent {
    public config = {
        animation: 'count', 
        format: 'd', 
        theme: 'car', 
        value: 50,
        auto: true,
    }

    ...
}
```

If you add both, the `[config]` and any independent configuration, the independent config will overwrite the `[config]` object.


## License

[MIT](LICENSE)
