/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, Renderer2 } from '@angular/core';
import Sortable from 'sortablejs';
import { GLOBALS } from './globals';
import { SortablejsBindings } from './sortablejs-bindings';
import { SortablejsService } from './sortablejs.service';
/** @type {?} */
var getIndexesFromEvent = (/**
 * @param {?} event
 * @return {?}
 */
function (event) {
    if (event.hasOwnProperty('newDraggableIndex') && event.hasOwnProperty('oldDraggableIndex')) {
        return {
            new: event.newDraggableIndex,
            old: event.oldDraggableIndex,
        };
    }
    else {
        return {
            new: event.newIndex,
            old: event.oldIndex,
        };
    }
});
var ɵ0 = getIndexesFromEvent;
var SortablejsDirective = /** @class */ (function () {
    function SortablejsDirective(globalConfig, service, element, zone, renderer) {
        this.globalConfig = globalConfig;
        this.service = service;
        this.element = element;
        this.zone = zone;
        this.renderer = renderer;
        this.runInsideAngular = false; // to be deprecated
        // to be deprecated
        this.sortablejsInit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SortablejsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Sortable && Sortable.create) { // Sortable does not exist in angular universal (SSR)
            if (this.runInsideAngular) {
                this.create();
            }
            else {
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return _this.create(); }));
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SortablejsDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var optionsChange = changes.sortablejsOptions;
        if (optionsChange && !optionsChange.isFirstChange()) {
            /** @type {?} */
            var previousOptions_1 = optionsChange.previousValue;
            /** @type {?} */
            var currentOptions_1 = optionsChange.currentValue;
            Object.keys(currentOptions_1).forEach((/**
             * @param {?} optionName
             * @return {?}
             */
            function (optionName) {
                if (currentOptions_1[optionName] !== previousOptions_1[optionName]) {
                    // use low-level option setter
                    _this.sortableInstance.option(optionName, _this.options[optionName]);
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    SortablejsDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sortableInstance) {
            this.sortableInstance.destroy();
        }
    };
    /**
     * @private
     * @return {?}
     */
    SortablejsDirective.prototype.create = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var container = this.sortablejsContainer ? this.element.nativeElement.querySelector(this.sortablejsContainer) : this.element.nativeElement;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.sortableInstance = Sortable.create(container, _this.options);
            _this.sortablejsInit.emit(_this.sortableInstance);
        }), 0);
    };
    /**
     * @private
     * @return {?}
     */
    SortablejsDirective.prototype.getBindings = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.sortablejs) {
            return new SortablejsBindings([]);
        }
        else if (this.sortablejs instanceof SortablejsBindings) {
            return this.sortablejs;
        }
        else {
            return new SortablejsBindings([this.sortablejs]);
        }
    };
    Object.defineProperty(SortablejsDirective.prototype, "options", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return tslib_1.__assign({}, this.optionsWithoutEvents, this.overridenOptions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortablejsDirective.prototype, "optionsWithoutEvents", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return tslib_1.__assign({}, (this.globalConfig || {}), (this.sortablejsOptions || {}));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} eventName
     * @param {...?} params
     * @return {?}
     */
    SortablejsDirective.prototype.proxyEvent = /**
     * @private
     * @param {?} eventName
     * @param {...?} params
     * @return {?}
     */
    function (eventName) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.zone.run((/**
         * @return {?}
         */
        function () {
            var _a;
            if (_this.optionsWithoutEvents && _this.optionsWithoutEvents[eventName]) {
                (_a = _this.optionsWithoutEvents)[eventName].apply(_a, tslib_1.__spread(params));
            }
        }));
    };
    Object.defineProperty(SortablejsDirective.prototype, "isCloning", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.sortableInstance.options.group.checkPull(this.sortableInstance, this.sortableInstance) === 'clone';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @template T
     * @param {?} item
     * @return {?}
     */
    SortablejsDirective.prototype.clone = /**
     * @private
     * @template T
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // by default pass the item through, no cloning performed
        return (this.sortablejsCloneFunction || ((/**
         * @param {?} subitem
         * @return {?}
         */
        function (subitem) { return subitem; })))(item);
    };
    Object.defineProperty(SortablejsDirective.prototype, "overridenOptions", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            // always intercept standard events but act only in case items are set (bindingEnabled)
            // allows to forget about tracking this.items changes
            return {
                onAdd: (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.service.transfer = (/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) {
                        _this.getBindings().injectIntoEvery(event.newIndex, items);
                        _this.proxyEvent('onAdd', event);
                    });
                    _this.proxyEvent('onAddOriginal', event);
                }),
                onRemove: (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    /** @type {?} */
                    var bindings = _this.getBindings();
                    if (bindings.provided) {
                        if (_this.isCloning) {
                            _this.service.transfer(bindings.getFromEvery(event.oldIndex).map((/**
                             * @param {?} item
                             * @return {?}
                             */
                            function (item) { return _this.clone(item); })));
                            // great thanks to https://github.com/tauu
                            // event.item is the original item from the source list which is moved to the target list
                            // event.clone is a clone of the original item and will be added to source list
                            // If bindings are provided, adding the item dom element to the target list causes artifacts
                            // as it interferes with the rendering performed by the angular template.
                            // Therefore we remove it immediately and also move the original item back to the source list.
                            // (event handler may be attached to the original item and not its clone, therefore keeping
                            // the original dom node, circumvents side effects )
                            _this.renderer.removeChild(event.item.parentNode, event.item);
                            _this.renderer.insertBefore(event.clone.parentNode, event.item, event.clone);
                            _this.renderer.removeChild(event.clone.parentNode, event.clone);
                        }
                        else {
                            _this.service.transfer(bindings.extractFromEvery(event.oldIndex));
                        }
                        _this.service.transfer = null;
                    }
                    _this.proxyEvent('onRemove', event);
                }),
                onUpdate: (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    /** @type {?} */
                    var bindings = _this.getBindings();
                    /** @type {?} */
                    var indexes = getIndexesFromEvent(event);
                    bindings.injectIntoEvery(indexes.new, bindings.extractFromEvery(indexes.old));
                    _this.proxyEvent('onUpdate', event);
                }),
            };
        },
        enumerable: true,
        configurable: true
    });
    SortablejsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[sortablejs]',
                },] }
    ];
    /** @nocollapse */
    SortablejsDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GLOBALS,] }] },
        { type: SortablejsService },
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 }
    ]; };
    SortablejsDirective.propDecorators = {
        sortablejs: [{ type: Input }],
        sortablejsContainer: [{ type: Input }],
        sortablejsOptions: [{ type: Input }],
        sortablejsCloneFunction: [{ type: Input }],
        runInsideAngular: [{ type: Input }],
        sortablejsInit: [{ type: Output }]
    };
    return SortablejsDirective;
}());
export { SortablejsDirective };
if (false) {
    /** @type {?} */
    SortablejsDirective.prototype.sortablejs;
    /** @type {?} */
    SortablejsDirective.prototype.sortablejsContainer;
    /** @type {?} */
    SortablejsDirective.prototype.sortablejsOptions;
    /** @type {?} */
    SortablejsDirective.prototype.sortablejsCloneFunction;
    /**
     * @type {?}
     * @private
     */
    SortablejsDirective.prototype.sortableInstance;
    /** @type {?} */
    SortablejsDirective.prototype.runInsideAngular;
    /** @type {?} */
    SortablejsDirective.prototype.sortablejsInit;
    /**
     * @type {?}
     * @private
     */
    SortablejsDirective.prototype.globalConfig;
    /**
     * @type {?}
     * @private
     */
    SortablejsDirective.prototype.service;
    /**
     * @type {?}
     * @private
     */
    SortablejsDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    SortablejsDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    SortablejsDirective.prototype.renderer;
}
/**
 * @record
 */
function SortableEvent() { }
if (false) {
    /** @type {?} */
    SortableEvent.prototype.oldIndex;
    /** @type {?} */
    SortableEvent.prototype.newIndex;
    /** @type {?|undefined} */
    SortableEvent.prototype.oldDraggableIndex;
    /** @type {?|undefined} */
    SortableEvent.prototype.newDraggableIndex;
    /** @type {?} */
    SortableEvent.prototype.item;
    /** @type {?} */
    SortableEvent.prototype.clone;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGVqcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc29ydGFibGVqcy8iLCJzb3VyY2VzIjpbImxpYi9zb3J0YWJsZWpzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZ0MsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3BLLE9BQU8sUUFBUSxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUVuRCxtQkFBbUI7Ozs7QUFBRyxVQUFDLEtBQW9CO0lBQy9DLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsRUFBRTtRQUN4RixPQUFPO1lBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUI7U0FDN0IsQ0FBQztLQUNMO1NBQU07UUFDTCxPQUFPO1lBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ25CLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUNwQixDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUE7O0FBRUQ7SUF1QkUsNkJBQ3VDLFlBQStCLEVBQzVELE9BQTBCLEVBQzFCLE9BQW1CLEVBQ25CLElBQVksRUFDWixRQUFtQjtRQUpVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUM1RCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixZQUFPLEdBQVAsT0FBTyxD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QUUzQywrQ0FBOEI7O0lBRTlCLCtDQUFrQzs7SUFFbEMsNkNBQThDOzs7OztJQUc1QywyQ0FBb0U7Ozs7O0lBQ3BFLHNDQUFrQzs7Ozs7SUFDbEMsc0NBQTJCOzs7OztJQUMzQixtQ0FBb0I7Ozs7O0lBQ3BCLHVDQUEyQjs7Ozs7QUFrSS9CLDRCQU9DOzs7SUFOQyxpQ0FBaUI7O0lBQ2pCLGlDQUFpQjs7SUFDakIsMENBQTJCOztJQUMzQiwwQ0FBMkI7O0lBQzNCLDZCQUFrQjs7SUFDbEIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xyXG5pbXBvcnQgeyBHTE9CQUxTIH0gZnJvbSAnLi9nbG9iYWxzJztcclxuaW1wb3J0IHsgU29ydGFibGVqc0JpbmRpbmdUYXJnZXQgfSBmcm9tICcuL3NvcnRhYmxlanMtYmluZGluZy10YXJnZXQnO1xyXG5pbXBvcnQgeyBTb3J0YWJsZWpzQmluZGluZ3MgfSBmcm9tICcuL3NvcnRhYmxlanMtYmluZGluZ3MnO1xyXG5pbXBvcnQgeyBTb3J0YWJsZWpzT3B0aW9ucyB9IGZyb20gJy4vc29ydGFibGVqcy1vcHRpb25zJztcclxuaW1wb3J0IHsgU29ydGFibGVqc1NlcnZpY2UgfSBmcm9tICcuL3NvcnRhYmxlanMuc2VydmljZSc7XHJcblxyXG5jb25zdCBnZXRJbmRleGVzRnJvbUV2ZW50ID0gKGV2ZW50OiBTb3J0YWJsZUV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50Lmhhc093blByb3BlcnR5KCduZXdEcmFnZ2FibGVJbmRleCcpICYmIGV2ZW50Lmhhc093blByb3BlcnR5KCdvbGREcmFnZ2FibGVJbmRleCcpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV3OiBldmVudC5uZXdEcmFnZ2FibGVJbmRleCxcclxuICAgICAgICBvbGQ6IGV2ZW50Lm9sZERyYWdnYWJsZUluZGV4LFxyXG4gICAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZXc6IGV2ZW50Lm5ld0luZGV4LFxyXG4gICAgICBvbGQ6IGV2ZW50Lm9sZEluZGV4LFxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzb3J0YWJsZWpzXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZWpzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc29ydGFibGVqczogU29ydGFibGVqc0JpbmRpbmdUYXJnZXQ7IC8vIGFycmF5IG9yIGEgRm9ybUFycmF5XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc29ydGFibGVqc0NvbnRhaW5lcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNvcnRhYmxlanNPcHRpb25zOiBTb3J0YWJsZWpzT3B0aW9ucztcclxuXHJcbiAgQElucHV0KClcclxuICBzb3J0YWJsZWpzQ2xvbmVGdW5jdGlvbjogPFQ+KGl0ZW06IFQpID0+IFQ7XHJcblxyXG4gIHByaXZhdGUgc29ydGFibGVJbnN0YW5jZTogYW55O1xyXG5cclxuICBASW5wdXQoKSBydW5JbnNpZGVBbmd1bGFyID0gZmFsc2U7IC8vIHRvIGJlIGRlcHJlY2F0ZWRcclxuXHJcbiAgQE91dHB1dCgpIHNvcnRhYmxlanNJbml0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoR0xPQkFMUykgcHJpdmF0ZSBnbG9iYWxDb25maWc6IFNvcnRhYmxlanNPcHRpb25zLFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBTb3J0YWJsZWpzU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKFNvcnRhYmxlICYmIFNvcnRhYmxlLmNyZWF0ZSkgeyAvLyBTb3J0YWJsZSBkb2VzIG5vdCBleGlzdCBpbiBhbmd1bGFyIHVuaXZlcnNhbCAoU1NSKVxyXG4gICAgICBpZiAodGhpcy5ydW5JbnNpZGVBbmd1bGFyKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3AgaW4ga2V5b2YgU29ydGFibGVqc0RpcmVjdGl2ZV06IFNpbXBsZUNoYW5nZSB9KSB7XHJcbiAgICBjb25zdCBvcHRpb25zQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzLnNvcnRhYmxlanNPcHRpb25zO1xyXG5cclxuICAgIGlmIChvcHRpb25zQ2hhbmdlICYmICFvcHRpb25zQ2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c09wdGlvbnM6IFNvcnRhYmxlanNPcHRpb25zID0gb3B0aW9uc0NoYW5nZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjdXJyZW50T3B0aW9uczogU29ydGFibGVqc09wdGlvbnMgPSBvcHRpb25zQ2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuXHJcbiAgICAgIE9iamVjdC5rZXlzKGN1cnJlbnRPcHRpb25zKS5mb3JFYWNoKG9wdGlvbk5hbWUgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uc1tvcHRpb25OYW1lXSAhPT0gcHJldmlvdXNPcHRpb25zW29wdGlvbk5hbWVdKSB7XHJcbiAgICAgICAgICAvLyB1c2UgbG93LWxldmVsIG9wdGlvbiBzZXR0ZXJcclxuICAgICAgICAgIHRoaXMuc29ydGFibGVJbnN0YW5jZS5vcHRpb24ob3B0aW9uTmFtZSwgdGhpcy5vcHRpb25zW29wdGlvbk5hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5zb3J0YWJsZUluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuc29ydGFibGVJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuc29ydGFibGVqc0NvbnRhaW5lciA/IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zb3J0YWJsZWpzQ29udGFpbmVyKSA6IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSW5zdGFuY2UgPSBTb3J0YWJsZS5jcmVhdGUoY29udGFpbmVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICB0aGlzLnNvcnRhYmxlanNJbml0LmVtaXQodGhpcy5zb3J0YWJsZUluc3RhbmNlKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCaW5kaW5ncygpOiBTb3J0YWJsZWpzQmluZGluZ3Mge1xyXG4gICAgaWYgKCF0aGlzLnNvcnRhYmxlanMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTb3J0YWJsZWpzQmluZGluZ3MoW10pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvcnRhYmxlanMgaW5zdGFuY2VvZiBTb3J0YWJsZWpzQmluZGluZ3MpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc29ydGFibGVqcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgU29ydGFibGVqc0JpbmRpbmdzKFt0aGlzLnNvcnRhYmxlanNdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLm9wdGlvbnNXaXRob3V0RXZlbnRzLCAuLi50aGlzLm92ZXJyaWRlbk9wdGlvbnMgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG9wdGlvbnNXaXRob3V0RXZlbnRzKCkge1xyXG4gICAgcmV0dXJuIHsgLi4uKHRoaXMuZ2xvYmFsQ29uZmlnIHx8IHt9KSwgLi4uKHRoaXMuc29ydGFibGVqc09wdGlvbnMgfHwge30pIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb3h5RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIC4uLnBhcmFtczogYW55W10pIHtcclxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4geyAvLyByZS1lbnRlcmluZyB6b25lLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1NvcnRhYmxlSlMvYW5ndWxhci1zb3J0YWJsZWpzL2lzc3Vlcy8xMTAjaXNzdWVjb21tZW50LTQwODg3NDYwMFxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zV2l0aG91dEV2ZW50cyAmJiB0aGlzLm9wdGlvbnNXaXRob3V0RXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnNXaXRob3V0RXZlbnRzW2V2ZW50TmFtZV0oLi4ucGFyYW1zKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBpc0Nsb25pbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUluc3RhbmNlLm9wdGlvbnMuZ3JvdXAuY2hlY2tQdWxsKHRoaXMuc29ydGFibGVJbnN0YW5jZSwgdGhpcy5zb3J0YWJsZUluc3RhbmNlKSA9PT0gJ2Nsb25lJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvbmU8VD4oaXRlbTogVCk6IFQge1xyXG4gICAgLy8gYnkgZGVmYXVsdCBwYXNzIHRoZSBpdGVtIHRocm91Z2gsIG5vIGNsb25pbmcgcGVyZm9ybWVkXHJcbiAgICByZXR1cm4gKHRoaXMuc29ydGFibGVqc0Nsb25lRnVuY3Rpb24gfHwgKHN1Yml0ZW0gPT4gc3ViaXRlbSkpKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgb3ZlcnJpZGVuT3B0aW9ucygpOiBTb3J0YWJsZWpzT3B0aW9ucyB7XHJcbiAgICAvLyBhbHdheXMgaW50ZXJjZXB0IHN0YW5kYXJkIGV2ZW50cyBidXQgYWN0IG9ubHkgaW4gY2FzZSBpdGVtcyBhcmUgc2V0IChiaW5kaW5nRW5hYmxlZClcclxuICAgIC8vIGFsbG93cyB0byBmb3JnZXQgYWJvdXQgdHJhY2tpbmcgdGhpcy5pdGVtcyBjaGFuZ2VzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvbkFkZDogKGV2ZW50OiBTb3J0YWJsZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zZmVyID0gKGl0ZW1zOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5nZXRCaW5kaW5ncygpLmluamVjdEludG9FdmVyeShldmVudC5uZXdJbmRleCwgaXRlbXMpO1xyXG4gICAgICAgICAgdGhpcy5wcm94eUV2ZW50KCdvbkFkZCcsIGV2ZW50KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnByb3h5RXZlbnQoJ29uQWRkT3JpZ2luYWwnLCBldmVudCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uUmVtb3ZlOiAoZXZlbnQ6IFNvcnRhYmxlRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBiaW5kaW5ncyA9IHRoaXMuZ2V0QmluZGluZ3MoKTtcclxuXHJcbiAgICAgICAgaWYgKGJpbmRpbmdzLnByb3ZpZGVkKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0Nsb25pbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zZmVyKGJpbmRpbmdzLmdldEZyb21FdmVyeShldmVudC5vbGRJbmRleCkubWFwKGl0ZW0gPT4gdGhpcy5jbG9uZShpdGVtKSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ3JlYXQgdGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS90YXV1XHJcbiAgICAgICAgICAgIC8vIGV2ZW50Lml0ZW0gaXMgdGhlIG9yaWdpbmFsIGl0ZW0gZnJvbSB0aGUgc291cmNlIGxpc3Qgd2hpY2ggaXMgbW92ZWQgdG8gdGhlIHRhcmdldCBsaXN0XHJcbiAgICAgICAgICAgIC8vIGV2ZW50LmNsb25lIGlzIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIGl0ZW0gYW5kIHdpbGwgYmUgYWRkZWQgdG8gc291cmNlIGxpc3RcclxuICAgICAgICAgICAgLy8gSWYgYmluZGluZ3MgYXJlIHByb3ZpZGVkLCBhZGRpbmcgdGhlIGl0ZW0gZG9tIGVsZW1lbnQgdG8gdGhlIHRhcmdldCBsaXN0IGNhdXNlcyBhcnRpZmFjdHNcclxuICAgICAgICAgICAgLy8gYXMgaXQgaW50ZXJmZXJlcyB3aXRoIHRoZSByZW5kZXJpbmcgcGVyZm9ybWVkIGJ5IHRoZSBhbmd1bGFyIHRlbXBsYXRlLlxyXG4gICAgICAgICAgICAvLyBUaGVyZWZvcmUgd2UgcmVtb3ZlIGl0IGltbWVkaWF0ZWx5IGFuZCBhbHNvIG1vdmUgdGhlIG9yaWdpbmFsIGl0ZW0gYmFjayB0byB0aGUgc291cmNlIGxpc3QuXHJcbiAgICAgICAgICAgIC8vIChldmVudCBoYW5kbGVyIG1heSBiZSBhdHRhY2hlZCB0byB0aGUgb3JpZ2luYWwgaXRlbSBhbmQgbm90IGl0cyBjbG9uZSwgdGhlcmVmb3JlIGtlZXBpbmdcclxuICAgICAgICAgICAgLy8gdGhlIG9yaWdpbmFsIGRvbSBub2RlLCBjaXJjdW12ZW50cyBzaWRlIGVmZmVjdHMgKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGV2ZW50Lml0ZW0ucGFyZW50Tm9kZSwgZXZlbnQuaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKGV2ZW50LmNsb25lLnBhcmVudE5vZGUsIGV2ZW50Lml0ZW0sIGV2ZW50LmNsb25lKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChldmVudC5jbG9uZS5wYXJlbnROb2RlLCBldmVudC5jbG9uZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNmZXIoYmluZGluZ3MuZXh0cmFjdEZyb21FdmVyeShldmVudC5vbGRJbmRleCkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc2VydmljZS50cmFuc2ZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3h5RXZlbnQoJ29uUmVtb3ZlJywgZXZlbnQpO1xyXG4gICAgICB9LFxyXG4gICAgICBvblVwZGF0ZTogKGV2ZW50OiBTb3J0YWJsZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmluZGluZ3MgPSB0aGlzLmdldEJpbmRpbmdzKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhlcyA9IGdldEluZGV4ZXNGcm9tRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICBiaW5kaW5ncy5pbmplY3RJbnRvRXZlcnkoaW5kZXhlcy5uZXcsIGJpbmRpbmdzLmV4dHJhY3RGcm9tRXZlcnkoaW5kZXhlcy5vbGQpKTtcclxuICAgICAgICB0aGlzLnByb3h5RXZlbnQoJ29uVXBkYXRlJywgZXZlbnQpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG5pbnRlcmZhY2UgU29ydGFibGVFdmVudCB7XHJcbiAgb2xkSW5kZXg6IG51bWJlcjtcclxuICBuZXdJbmRleDogbnVtYmVyO1xyXG4gIG9sZERyYWdnYWJsZUluZGV4PzogbnVtYmVyO1xyXG4gIG5ld0RyYWdnYWJsZUluZGV4PzogbnVtYmVyO1xyXG4gIGl0ZW06IEhUTUxFbGVtZW50O1xyXG4gIGNsb25lOiBIVE1MRWxlbWVudDtcclxufVxyXG4iXX0=