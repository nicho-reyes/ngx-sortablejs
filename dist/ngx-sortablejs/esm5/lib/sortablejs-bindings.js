/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortablejsBinding } from './sortablejs-binding';
var SortablejsBindings = /** @class */ (function () {
    function SortablejsBindings(bindingTargets) {
        this.bindings = bindingTargets.map((/**
         * @param {?} target
         * @return {?}
         */
        function (target) { return new SortablejsBinding(target); }));
    }
    /**
     * @param {?} index
     * @param {?} items
     * @return {?}
     */
    SortablejsBindings.prototype.injectIntoEvery = /**
     * @param {?} index
     * @param {?} items
     * @return {?}
     */
    function (index, items) {
        this.bindings.forEach((/**
         * @param {?} b
         * @param {?} i
         * @return {?}
         */
        function (b, i) { return b.insert(index, items[i]); }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SortablejsBindings.prototype.getFromEvery = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.bindings.map((/**
         * @param {?} b
         * @return {?}
         */
        function (b) { return b.get(index); }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SortablejsBindings.prototype.extractFromEvery = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.bindings.map((/**
         * @param {?} b
         * @return {?}
         */
        function (b) { return b.remove(index); }));
    };
    Object.defineProperty(SortablejsBindings.prototype, "provided", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.bindings.length;
        },
        enumerable: true,
        configurable: true
    });
    return SortablejsBindings;
}());
export { SortablejsBindings };
if (false) {
    /** @type {?} */
    SortablejsBindings.prototype.bindings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGVqcy1iaW5kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zb3J0YWJsZWpzLyIsInNvdXJjZXMiOlsibGliL3NvcnRhYmxlanMtYmluZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3pEO0lBSUUsNEJBQVksY0FBeUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO0lBQzlFLENBQUM7Ozs7OztJQUVELDRDQUFlOzs7OztJQUFmLFVBQWdCLEtBQWEsRUFBRSxLQUFZO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQseUNBQVk7Ozs7SUFBWixVQUFhLEtBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsc0JBQUksd0NBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRUgseUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7O0lBdEJDLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRhYmxlanNCaW5kaW5nIH0gZnJvbSAnLi9zb3J0YWJsZWpzLWJpbmRpbmcnO1xyXG5pbXBvcnQgeyBTb3J0YWJsZWpzQmluZGluZ1RhcmdldCB9IGZyb20gJy4vc29ydGFibGVqcy1iaW5kaW5nLXRhcmdldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVqc0JpbmRpbmdzIHtcclxuXHJcbiAgYmluZGluZ3M6IFNvcnRhYmxlanNCaW5kaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGJpbmRpbmdUYXJnZXRzOiBTb3J0YWJsZWpzQmluZGluZ1RhcmdldFtdKSB7XHJcbiAgICB0aGlzLmJpbmRpbmdzID0gYmluZGluZ1RhcmdldHMubWFwKHRhcmdldCA9PiBuZXcgU29ydGFibGVqc0JpbmRpbmcodGFyZ2V0KSk7XHJcbiAgfVxyXG5cclxuICBpbmplY3RJbnRvRXZlcnkoaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goKGIsIGkpID0+IGIuaW5zZXJ0KGluZGV4LCBpdGVtc1tpXSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RnJvbUV2ZXJ5KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmJpbmRpbmdzLm1hcChiID0+IGIuZ2V0KGluZGV4KSk7XHJcbiAgfVxyXG5cclxuICBleHRyYWN0RnJvbUV2ZXJ5KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmJpbmRpbmdzLm1hcChiID0+IGIucmVtb3ZlKGluZGV4KSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvdmlkZWQoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLmJpbmRpbmdzLmxlbmd0aDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==