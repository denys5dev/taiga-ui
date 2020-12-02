import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Less from '!!raw-loader!./examples/2/index.less';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidth,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {TuiDropdownPosition} from '@taiga-ui/kit';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-dropdown-selection',
    templateUrl: './dropdown-selection.template.html',
    styleUrls: ['./dropdown-selection.style.less'],
    changeDetection,
})
export class ExampleTuiDropdownSelectionComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    positionVariants = [
        TuiDropdownPosition.Selection,
        TuiDropdownPosition.Word,
        TuiDropdownPosition.Tag,
    ];

    open = false;

    position = TuiDropdownPosition.Selection;

    tuiDropdownMinHeight = DEFAULT_MIN_HEIGHT;

    tuiDropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    tuiDropdownSided = false;

    alignVariants: TuiHorizontalDirection[] = ['right', 'left'];

    tuiDropdownAlign = this.alignVariants[0];

    readonly dropdownDirectionVariants: ReadonlyArray<TuiVerticalDirection> = [
        'top',
        'bottom',
    ];

    tuiDropdownDirection: TuiVerticalDirection | null = null;

    readonly tuiDropdownLimitWidthVariants: ReadonlyArray<TuiDropdownWidth> = [
        TuiDropdownWidth.Fixed,
        TuiDropdownWidth.Min,
        TuiDropdownWidth.Auto,
    ];

    tuiDropdownLimitWidth: TuiDropdownWidth | null = this
        .tuiDropdownLimitWidthVariants[0];
}