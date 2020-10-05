/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, Renderer2 } from '@angular/core';
import Sortable from 'sortablejs';
import { GLOBALS } from './globals';
import { SortablejsBindings } from './sortablejs-bindings';
import { SortablejsService } from './sortablejs.service';
/** @type {?} */
const getIndexesFromEvent = (/**
 * @param {?} event
 * @return {?}
 */
(event) => {
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
const ɵ0 = getIndexesFromEvent;
export class SortablejsDirective {
    /**
     * @param {?} globalConfig
     * @param {?} service
     * @param {?} element
     * @param {?} zone
     * @param {?} renderer
     */
    constructor(globalConfig, service, element, zone, renderer) {
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
    ngOnInit() {
        if (Sortable && Sortable.create) { // Sortable does not exist in angular universal (SSR)
            if (this.runInsideAngular) {
                this.create();
            }
            else {
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => this.create()));
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const optionsChange = changes.sortablejsOptions;
        if (optionsChange && !optionsChange.isFirstChange()) {
            /** @type {?} */
            const previousOptions = optionsChange.previousValue;
            /** @type {?} */
            const currentOptions = optionsChange.currentValue;
            Object.keys(currentOptions).forEach((/**
             * @param {?} optionName
             * @return {?}
             */
            optionName => {
                if (currentOptions[optionName] !== previousOptions[optionName]) {
                    // use low-level option setter
                    this.sortableInstance.option(optionName, this.options[optionName]);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sortableInstance) {
            this.sortableInstance.destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    create() {
        /** @type {?} */
        const container = this.sortablejsContainer ? this.element.nativeElement.querySelector(this.sortablejsContainer) : this.element.nativeElement;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.sortableInstance = Sortable.create(container, this.options);
            this.sortablejsInit.emit(this.sortableInstance);
        }), 0);
    }
    /**
     * @private
     * @return {?}
     */
    getBindings() {
        if (!this.sortablejs) {
            return new SortablejsBindings([]);
        }
        else if (this.sortablejs instanceof SortablejsBindings) {
            return this.sortablejs;
        }
        else {
            return new SortablejsBindings([this.sortablejs]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    get options() {
        return Object.assign({}, this.optionsWithoutEvents, this.overridenOptions);
    }
    /**
     * @private
     * @return {?}
     */
    get optionsWithoutEvents() {
        return Object.assign({}, (this.globalConfig || {}), (this.sortablejsOptions || {}));
    }
    /**
     * @private
     * @param {?} eventName
     * @param {...?} params
     * @return {?}
     */
    proxyEvent(eventName, ...params) {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            if (this.optionsWithoutEvents && this.optionsWithoutEvents[eventName]) {
                this.optionsWithoutEvents[eventName](...params);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    get isCloning() {
        return this.sortableInstance.options.group.checkPull(this.sortableInstance, this.sortableInstance) === 'clone';
    }
    /**
     * @private
     * @template T
     * @param {?} item
     * @return {?}
     */
    clone(item) {
        // by default pass the item through, no cloning performed
        return (this.sortablejsCloneFunction || ((/**
         * @param {?} subitem
         * @return {?}
         */
        subitem => subitem)))(item);
    }
    /**
     * @private
     * @return {?}
     */
    get overridenOptions() {
        // always intercept standard events but act only in case items are set (bindingEnabled)
        // allows to forget about tracking this.items changes
        return {
            onAdd: (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.service.transfer = (/**
                 * @param {?} items
                 * @return {?}
                 */
                (items) => {
                    this.getBindings().injectIntoEvery(event.newIndex, items);
                    this.proxyEvent('onAdd', event);
                });
                this.proxyEvent('onAddOriginal', event);
            }),
            onRemove: (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                /** @type {?} */
                const bindings = this.getBindings();
                if (bindings.provided) {
                    if (this.isCloning) {
                        this.service.transfer(bindings.getFromEvery(event.oldIndex).map((/**
                         * @param {?} item
                         * @return {?}
                         */
                        item => this.clone(item))));
                        // great thanks to https://github.com/tauu
                        // event.item is the original item from the source list which is moved to the target list
                        // event.clone is a clone of the original item and will be added to source list
                        // If bindings are provided, adding the item dom element to the target list causes artifacts
                        // as it interferes with the rendering performed by the angular template.
                        // Therefore we remove it immediately and also move the original item back to the source list.
                        // (event handler may be attached to the original item and not its clone, therefore keeping
                        // the original dom node, circumvents side effects )
                        this.renderer.removeChild(event.item.parentNode, event.item);
                        this.renderer.insertBefore(event.clone.parentNode, event.item, event.clone);
                        this.renderer.removeChild(event.clone.parentNode, event.clone);
                    }
                    else {
                        this.service.transfer(bindings.extractFromEvery(event.oldIndex));
                    }
                    this.service.transfer = null;
                }
                this.proxyEvent('onRemove', event);
            }),
            onUpdate: (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                /** @type {?} */
                const bindings = this.getBindings();
                /** @type {?} */
                const indexes = getIndexesFromEvent(event);
                bindings.injectIntoEvery(indexes.new, bindings.extractFromEvery(indexes.old));
                this.proxyEvent('onUpdate', event);
            }),
        };
    }
}
SortablejsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sortablejs]',
            },] }
];
/** @nocollapse */
SortablejsDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GLOBALS,] }] },
    { type: SortablejsService },
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
];
SortablejsDirective.propDecorators = {
    sortablejs: [{ type: Input }],
    sortablejsContainer: [{ type: Input }],
    sortablejsOptions: [{ type: Input }],
    sortablejsCloneFunction: [{ type: Input }],
    runInsideAngular: [{ type: Input }],
    sortablejsInit: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGVqcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc29ydGFibGVqcy8iLCJzb3VyY2VzIjpbImxpYi9zb3J0YWJsZWpzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDcEssT0FBTyxRQUFRLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O01BRW5ELG1CQUFtQjs7OztBQUFHLENBQUMsS0FBb0IsRUFBRSxFQUFFO0lBQ25ELElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsRUFBRTtRQUN4RixPQUFPO1lBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUI7U0FDN0IsQ0FBQztLQUNMO1NBQU07UUFDTCxPQUFPO1lBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ25CLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUNwQixDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUE7O0FBS0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7Ozs7SUFvQjlCLFlBQ3VDLFlBQStCLEVBQzVELE9BQTBCLEVBQzFCLE9BQW1CLEVBQ25CLElBQVksRUFDWixRQUFtQjtRQUpVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUM1RCxZQUFPLEdBQVAs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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xyXG5pbXBvcnQgeyBHTE9CQUxTIH0gZnJvbSAnLi9nbG9iYWxzJztcclxuaW1wb3J0IHsgU29ydGFibGVqc0JpbmRpbmdUYXJnZXQgfSBmcm9tICcuL3NvcnRhYmxlanMtYmluZGluZy10YXJnZXQnO1xyXG5pbXBvcnQgeyBTb3J0YWJsZWpzQmluZGluZ3MgfSBmcm9tICcuL3NvcnRhYmxlanMtYmluZGluZ3MnO1xyXG5pbXBvcnQgeyBTb3J0YWJsZWpzT3B0aW9ucyB9IGZyb20gJy4vc29ydGFibGVqcy1vcHRpb25zJztcclxuaW1wb3J0IHsgU29ydGFibGVqc1NlcnZpY2UgfSBmcm9tICcuL3NvcnRhYmxlanMuc2VydmljZSc7XHJcblxyXG5jb25zdCBnZXRJbmRleGVzRnJvbUV2ZW50ID0gKGV2ZW50OiBTb3J0YWJsZUV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50Lmhhc093blByb3BlcnR5KCduZXdEcmFnZ2FibGVJbmRleCcpICYmIGV2ZW50Lmhhc093blByb3BlcnR5KCdvbGREcmFnZ2FibGVJbmRleCcpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV3OiBldmVudC5uZXdEcmFnZ2FibGVJbmRleCxcclxuICAgICAgICBvbGQ6IGV2ZW50Lm9sZERyYWdnYWJsZUluZGV4LFxyXG4gICAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZXc6IGV2ZW50Lm5ld0luZGV4LFxyXG4gICAgICBvbGQ6IGV2ZW50Lm9sZEluZGV4LFxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzb3J0YWJsZWpzXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZWpzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc29ydGFibGVqczogU29ydGFibGVqc0JpbmRpbmdUYXJnZXQ7IC8vIGFycmF5IG9yIGEgRm9ybUFycmF5XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc29ydGFibGVqc0NvbnRhaW5lcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNvcnRhYmxlanNPcHRpb25zOiBTb3J0YWJsZWpzT3B0aW9ucztcclxuXHJcbiAgQElucHV0KClcclxuICBzb3J0YWJsZWpzQ2xvbmVGdW5jdGlvbjogPFQ+KGl0ZW06IFQpID0+IFQ7XHJcblxyXG4gIHByaXZhdGUgc29ydGFibGVJbnN0YW5jZTogYW55O1xyXG5cclxuICBASW5wdXQoKSBydW5JbnNpZGVBbmd1bGFyID0gZmFsc2U7IC8vIHRvIGJlIGRlcHJlY2F0ZWRcclxuXHJcbiAgQE91dHB1dCgpIHNvcnRhYmxlanNJbml0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoR0xPQkFMUykgcHJpdmF0ZSBnbG9iYWxDb25maWc6IFNvcnRhYmxlanNPcHRpb25zLFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBTb3J0YWJsZWpzU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKFNvcnRhYmxlICYmIFNvcnRhYmxlLmNyZWF0ZSkgeyAvLyBTb3J0YWJsZSBkb2VzIG5vdCBleGlzdCBpbiBhbmd1bGFyIHVuaXZlcnNhbCAoU1NSKVxyXG4gICAgICBpZiAodGhpcy5ydW5JbnNpZGVBbmd1bGFyKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3AgaW4ga2V5b2YgU29ydGFibGVqc0RpcmVjdGl2ZV06IFNpbXBsZUNoYW5nZSB9KSB7XHJcbiAgICBjb25zdCBvcHRpb25zQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzLnNvcnRhYmxlanNPcHRpb25zO1xyXG5cclxuICAgIGlmIChvcHRpb25zQ2hhbmdlICYmICFvcHRpb25zQ2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c09wdGlvbnM6IFNvcnRhYmxlanNPcHRpb25zID0gb3B0aW9uc0NoYW5nZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjdXJyZW50T3B0aW9uczogU29ydGFibGVqc09wdGlvbnMgPSBvcHRpb25zQ2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuXHJcbiAgICAgIE9iamVjdC5rZXlzKGN1cnJlbnRPcHRpb25zKS5mb3JFYWNoKG9wdGlvbk5hbWUgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uc1tvcHRpb25OYW1lXSAhPT0gcHJldmlvdXNPcHRpb25zW29wdGlvbk5hbWVdKSB7XHJcbiAgICAgICAgICAvLyB1c2UgbG93LWxldmVsIG9wdGlvbiBzZXR0ZXJcclxuICAgICAgICAgIHRoaXMuc29ydGFibGVJbnN0YW5jZS5vcHRpb24ob3B0aW9uTmFtZSwgdGhpcy5vcHRpb25zW29wdGlvbk5hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5zb3J0YWJsZUluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuc29ydGFibGVJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuc29ydGFibGVqc0NvbnRhaW5lciA/IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zb3J0YWJsZWpzQ29udGFpbmVyKSA6IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSW5zdGFuY2UgPSBTb3J0YWJsZS5jcmVhdGUoY29udGFpbmVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICB0aGlzLnNvcnRhYmxlanNJbml0LmVtaXQodGhpcy5zb3J0YWJsZUluc3RhbmNlKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCaW5kaW5ncygpOiBTb3J0YWJsZWpzQmluZGluZ3Mge1xyXG4gICAgaWYgKCF0aGlzLnNvcnRhYmxlanMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTb3J0YWJsZWpzQmluZGluZ3MoW10pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvcnRhYmxlanMgaW5zdGFuY2VvZiBTb3J0YWJsZWpzQmluZGluZ3MpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc29ydGFibGVqcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgU29ydGFibGVqc0JpbmRpbmdzKFt0aGlzLnNvcnRhYmxlanNdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLm9wdGlvbnNXaXRob3V0RXZlbnRzLCAuLi50aGlzLm92ZXJyaWRlbk9wdGlvbnMgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG9wdGlvbnNXaXRob3V0RXZlbnRzKCkge1xyXG4gICAgcmV0dXJuIHsgLi4uKHRoaXMuZ2xvYmFsQ29uZmlnIHx8IHt9KSwgLi4uKHRoaXMuc29ydGFibGVqc09wdGlvbnMgfHwge30pIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb3h5RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIC4uLnBhcmFtczogYW55W10pIHtcclxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4geyAvLyByZS1lbnRlcmluZyB6b25lLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1NvcnRhYmxlSlMvYW5ndWxhci1zb3J0YWJsZWpzL2lzc3Vlcy8xMTAjaXNzdWVjb21tZW50LTQwODg3NDYwMFxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zV2l0aG91dEV2ZW50cyAmJiB0aGlzLm9wdGlvbnNXaXRob3V0RXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnNXaXRob3V0RXZlbnRzW2V2ZW50TmFtZV0oLi4ucGFyYW1zKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBpc0Nsb25pbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUluc3RhbmNlLm9wdGlvbnMuZ3JvdXAuY2hlY2tQdWxsKHRoaXMuc29ydGFibGVJbnN0YW5jZSwgdGhpcy5zb3J0YWJsZUluc3RhbmNlKSA9PT0gJ2Nsb25lJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvbmU8VD4oaXRlbTogVCk6IFQge1xyXG4gICAgLy8gYnkgZGVmYXVsdCBwYXNzIHRoZSBpdGVtIHRocm91Z2gsIG5vIGNsb25pbmcgcGVyZm9ybWVkXHJcbiAgICByZXR1cm4gKHRoaXMuc29ydGFibGVqc0Nsb25lRnVuY3Rpb24gfHwgKHN1Yml0ZW0gPT4gc3ViaXRlbSkpKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgb3ZlcnJpZGVuT3B0aW9ucygpOiBTb3J0YWJsZWpzT3B0aW9ucyB7XHJcbiAgICAvLyBhbHdheXMgaW50ZXJjZXB0IHN0YW5kYXJkIGV2ZW50cyBidXQgYWN0IG9ubHkgaW4gY2FzZSBpdGVtcyBhcmUgc2V0IChiaW5kaW5nRW5hYmxlZClcclxuICAgIC8vIGFsbG93cyB0byBmb3JnZXQgYWJvdXQgdHJhY2tpbmcgdGhpcy5pdGVtcyBjaGFuZ2VzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvbkFkZDogKGV2ZW50OiBTb3J0YWJsZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zZmVyID0gKGl0ZW1zOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5nZXRCaW5kaW5ncygpLmluamVjdEludG9FdmVyeShldmVudC5uZXdJbmRleCwgaXRlbXMpO1xyXG4gICAgICAgICAgdGhpcy5wcm94eUV2ZW50KCdvbkFkZCcsIGV2ZW50KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnByb3h5RXZlbnQoJ29uQWRkT3JpZ2luYWwnLCBldmVudCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uUmVtb3ZlOiAoZXZlbnQ6IFNvcnRhYmxlRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBiaW5kaW5ncyA9IHRoaXMuZ2V0QmluZGluZ3MoKTtcclxuXHJcbiAgICAgICAgaWYgKGJpbmRpbmdzLnByb3ZpZGVkKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0Nsb25pbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zZmVyKGJpbmRpbmdzLmdldEZyb21FdmVyeShldmVudC5vbGRJbmRleCkubWFwKGl0ZW0gPT4gdGhpcy5jbG9uZShpdGVtKSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ3JlYXQgdGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS90YXV1XHJcbiAgICAgICAgICAgIC8vIGV2ZW50Lml0ZW0gaXMgdGhlIG9yaWdpbmFsIGl0ZW0gZnJvbSB0aGUgc291cmNlIGxpc3Qgd2hpY2ggaXMgbW92ZWQgdG8gdGhlIHRhcmdldCBsaXN0XHJcbiAgICAgICAgICAgIC8vIGV2ZW50LmNsb25lIGlzIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIGl0ZW0gYW5kIHdpbGwgYmUgYWRkZWQgdG8gc291cmNlIGxpc3RcclxuICAgICAgICAgICAgLy8gSWYgYmluZGluZ3MgYXJlIHByb3ZpZGVkLCBhZGRpbmcgdGhlIGl0ZW0gZG9tIGVsZW1lbnQgdG8gdGhlIHRhcmdldCBsaXN0IGNhdXNlcyBhcnRpZmFjdHNcclxuICAgICAgICAgICAgLy8gYXMgaXQgaW50ZXJmZXJlcyB3aXRoIHRoZSByZW5kZXJpbmcgcGVyZm9ybWVkIGJ5IHRoZSBhbmd1bGFyIHRlbXBsYXRlLlxyXG4gICAgICAgICAgICAvLyBUaGVyZWZvcmUgd2UgcmVtb3ZlIGl0IGltbWVkaWF0ZWx5IGFuZCBhbHNvIG1vdmUgdGhlIG9yaWdpbmFsIGl0ZW0gYmFjayB0byB0aGUgc291cmNlIGxpc3QuXHJcbiAgICAgICAgICAgIC8vIChldmVudCBoYW5kbGVyIG1heSBiZSBhdHRhY2hlZCB0byB0aGUgb3JpZ2luYWwgaXRlbSBhbmQgbm90IGl0cyBjbG9uZSwgdGhlcmVmb3JlIGtlZXBpbmdcclxuICAgICAgICAgICAgLy8gdGhlIG9yaWdpbmFsIGRvbSBub2RlLCBjaXJjdW12ZW50cyBzaWRlIGVmZmVjdHMgKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGV2ZW50Lml0ZW0ucGFyZW50Tm9kZSwgZXZlbnQuaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKGV2ZW50LmNsb25lLnBhcmVudE5vZGUsIGV2ZW50Lml0ZW0sIGV2ZW50LmNsb25lKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChldmVudC5jbG9uZS5wYXJlbnROb2RlLCBldmVudC5jbG9uZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNmZXIoYmluZGluZ3MuZXh0cmFjdEZyb21FdmVyeShldmVudC5vbGRJbmRleCkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc2VydmljZS50cmFuc2ZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3h5RXZlbnQoJ29uUmVtb3ZlJywgZXZlbnQpO1xyXG4gICAgICB9LFxyXG4gICAgICBvblVwZGF0ZTogKGV2ZW50OiBTb3J0YWJsZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmluZGluZ3MgPSB0aGlzLmdldEJpbmRpbmdzKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhlcyA9IGdldEluZGV4ZXNGcm9tRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICBiaW5kaW5ncy5pbmplY3RJbnRvRXZlcnkoaW5kZXhlcy5uZXcsIGJpbmRpbmdzLmV4dHJhY3RGcm9tRXZlcnkoaW5kZXhlcy5vbGQpKTtcclxuICAgICAgICB0aGlzLnByb3h5RXZlbnQoJ29uVXBkYXRlJywgZXZlbnQpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG5pbnRlcmZhY2UgU29ydGFibGVFdmVudCB7XHJcbiAgb2xkSW5kZXg6IG51bWJlcjtcclxuICBuZXdJbmRleDogbnVtYmVyO1xyXG4gIG9sZERyYWdnYWJsZUluZGV4PzogbnVtYmVyO1xyXG4gIG5ld0RyYWdnYWJsZUluZGV4PzogbnVtYmVyO1xyXG4gIGl0ZW06IEhUTUxFbGVtZW50O1xyXG4gIGNsb25lOiBIVE1MRWxlbWVudDtcclxufVxyXG4iXX0=