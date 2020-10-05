/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortablejsBinding } from './sortablejs-binding';
export class SortablejsBindings {
    /**
     * @param {?} bindingTargets
     */
    constructor(bindingTargets) {
        this.bindings = bindingTargets.map((/**
         * @param {?} target
         * @return {?}
         */
        target => new SortablejsBinding(target)));
    }
    /**
     * @param {?} index
     * @param {?} items
     * @return {?}
     */
    injectIntoEvery(index, items) {
        this.bindings.forEach((/**
         * @param {?} b
         * @param {?} i
         * @return {?}
         */
        (b, i) => b.insert(index, items[i])));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getFromEvery(index) {
        return this.bindings.map((/**
         * @param {?} b
         * @return {?}
         */
        b => b.get(index)));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    extractFromEvery(index) {
        return this.bindings.map((/**
         * @param {?} b
         * @return {?}
         */
        b => b.remove(index)));
    }
    /**
     * @return {?}
     */
    get provided() {
        return !!this.bindings.length;
    }
}
if (false) {
    /** @type {?} */
    SortablejsBindings.prototype.bindings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGVqcy1iaW5kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zb3J0YWJsZWpzLyIsInNvdXJjZXMiOlsibGliL3NvcnRhYmxlanMtYmluZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3pELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFJN0IsWUFBWSxjQUF5QztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWEsRUFBRSxLQUFZO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0NBRUY7OztJQXRCQyxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0YWJsZWpzQmluZGluZyB9IGZyb20gJy4vc29ydGFibGVqcy1iaW5kaW5nJztcclxuaW1wb3J0IHsgU29ydGFibGVqc0JpbmRpbmdUYXJnZXQgfSBmcm9tICcuL3NvcnRhYmxlanMtYmluZGluZy10YXJnZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlanNCaW5kaW5ncyB7XHJcblxyXG4gIGJpbmRpbmdzOiBTb3J0YWJsZWpzQmluZGluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihiaW5kaW5nVGFyZ2V0czogU29ydGFibGVqc0JpbmRpbmdUYXJnZXRbXSkge1xyXG4gICAgdGhpcy5iaW5kaW5ncyA9IGJpbmRpbmdUYXJnZXRzLm1hcCh0YXJnZXQgPT4gbmV3IFNvcnRhYmxlanNCaW5kaW5nKHRhcmdldCkpO1xyXG4gIH1cclxuXHJcbiAgaW5qZWN0SW50b0V2ZXJ5KGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnlbXSkge1xyXG4gICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKChiLCBpKSA9PiBiLmluc2VydChpbmRleCwgaXRlbXNbaV0pKTtcclxuICB9XHJcblxyXG4gIGdldEZyb21FdmVyeShpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iaW5kaW5ncy5tYXAoYiA9PiBiLmdldChpbmRleCkpO1xyXG4gIH1cclxuXHJcbiAgZXh0cmFjdEZyb21FdmVyeShpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iaW5kaW5ncy5tYXAoYiA9PiBiLnJlbW92ZShpbmRleCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3ZpZGVkKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5iaW5kaW5ncy5sZW5ndGg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=