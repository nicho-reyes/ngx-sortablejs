/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SortablejsBinding = /** @class */ (function () {
    function SortablejsBinding(target) {
        this.target = target;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    SortablejsBinding.prototype.insert = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        if (this.isFormArray) {
            this.target.insert(index, item);
        }
        else {
            this.target.splice(index, 0, item);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SortablejsBinding.prototype.get = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.isFormArray ? this.target.at(index) : this.target[index];
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SortablejsBinding.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var item;
        if (this.isFormArray) {
            item = this.target.at(index);
            this.target.removeAt(index);
        }
        else {
            item = this.target.splice(index, 1)[0];
        }
        return item;
    };
    Object.defineProperty(SortablejsBinding.prototype, "isFormArray", {
        // we need this to identify that the target is a FormArray
        // we don't want to have a dependency on @angular/forms just for that
        get: 
        // we need this to identify that the target is a FormArray
        // we don't want to have a dependency on @angular/forms just for that
        /**
         * @private
         * @return {?}
         */
        function () {
            // just checking for random FormArray methods not available on a standard array
            return !!this.target.at && !!this.target.insert && !!this.target.reset;
        },
        enumerable: true,
        configurable: true
    });
    return SortablejsBinding;
}());
export { SortablejsBinding };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortablejsBinding.prototype.target;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGVqcy1iaW5kaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNvcnRhYmxlanMvIiwic291cmNlcyI6WyJsaWIvc29ydGFibGVqcy1iaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUVFLDJCQUFvQixNQUErQjtRQUEvQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUFJLENBQUM7Ozs7OztJQUV4RCxrQ0FBTTs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUFTO1FBQzdCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVELCtCQUFHOzs7O0lBQUgsVUFBSSxLQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7OztJQUVELGtDQUFNOzs7O0lBQU4sVUFBTyxLQUFhOztZQUNkLElBQUk7UUFFUixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBSUQsc0JBQVksMENBQVc7UUFGdkIsMERBQTBEO1FBQzFELHFFQUFxRTs7Ozs7Ozs7UUFDckU7WUFDRSwrRUFBK0U7WUFDL0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN6RSxDQUFDOzs7T0FBQTtJQUVILHdCQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQzs7Ozs7OztJQWxDYSxtQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0YWJsZWpzQmluZGluZ1RhcmdldCB9IGZyb20gJy4vc29ydGFibGVqcy1iaW5kaW5nLXRhcmdldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVqc0JpbmRpbmcge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhcmdldDogU29ydGFibGVqc0JpbmRpbmdUYXJnZXQpIHsgfVxyXG5cclxuICBpbnNlcnQoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5pc0Zvcm1BcnJheSkge1xyXG4gICAgICB0aGlzLnRhcmdldC5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YXJnZXQuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldChpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0Zvcm1BcnJheSA/IHRoaXMudGFyZ2V0LmF0KGluZGV4KSA6IHRoaXMudGFyZ2V0W2luZGV4XTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgaXRlbTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zvcm1BcnJheSkge1xyXG4gICAgICBpdGVtID0gdGhpcy50YXJnZXQuYXQoaW5kZXgpO1xyXG4gICAgICB0aGlzLnRhcmdldC5yZW1vdmVBdChpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtID0gdGhpcy50YXJnZXQuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcblxyXG4gIC8vIHdlIG5lZWQgdGhpcyB0byBpZGVudGlmeSB0aGF0IHRoZSB0YXJnZXQgaXMgYSBGb3JtQXJyYXlcclxuICAvLyB3ZSBkb24ndCB3YW50IHRvIGhhdmUgYSBkZXBlbmRlbmN5IG9uIEBhbmd1bGFyL2Zvcm1zIGp1c3QgZm9yIHRoYXRcclxuICBwcml2YXRlIGdldCBpc0Zvcm1BcnJheSgpIHtcclxuICAgIC8vIGp1c3QgY2hlY2tpbmcgZm9yIHJhbmRvbSBGb3JtQXJyYXkgbWV0aG9kcyBub3QgYXZhaWxhYmxlIG9uIGEgc3RhbmRhcmQgYXJyYXlcclxuICAgIHJldHVybiAhIXRoaXMudGFyZ2V0LmF0ICYmICEhdGhpcy50YXJnZXQuaW5zZXJ0ICYmICEhdGhpcy50YXJnZXQucmVzZXQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=