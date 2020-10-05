/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SortablejsBinding {
    /**
     * @param {?} target
     */
    constructor(target) {
        this.target = target;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    insert(index, item) {
        if (this.isFormArray) {
            this.target.insert(index, item);
        }
        else {
            this.target.splice(index, 0, item);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    get(index) {
        return this.isFormArray ? this.target.at(index) : this.target[index];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        /** @type {?} */
        let item;
        if (this.isFormArray) {
            item = this.target.at(index);
            this.target.removeAt(index);
        }
        else {
            item = this.target.splice(index, 1)[0];
        }
        return item;
    }
    // we need this to identify that the target is a FormArray
    // we don't want to have a dependency on @angular/forms just for that
    /**
     * @private
     * @return {?}
     */
    get isFormArray() {
        // just checking for random FormArray methods not available on a standard array
        return !!this.target.at && !!this.target.insert && !!this.target.reset;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortablejsBinding.prototype.target;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGVqcy1iaW5kaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNvcnRhYmxlanMvIiwic291cmNlcyI6WyJsaWIvc29ydGFibGVqcy1iaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRTVCLFlBQW9CLE1BQStCO1FBQS9CLFdBQU0sR0FBTixNQUFNLENBQXlCO0lBQUksQ0FBQzs7Ozs7O0lBRXhELE1BQU0sQ0FBQyxLQUFhLEVBQUUsSUFBUztRQUM3QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsS0FBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYTs7WUFDZCxJQUFJO1FBRVIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUlELElBQVksV0FBVztRQUNyQiwrRUFBK0U7UUFDL0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN6RSxDQUFDO0NBRUY7Ozs7OztJQWxDYSxtQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0YWJsZWpzQmluZGluZ1RhcmdldCB9IGZyb20gJy4vc29ydGFibGVqcy1iaW5kaW5nLXRhcmdldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVqc0JpbmRpbmcge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhcmdldDogU29ydGFibGVqc0JpbmRpbmdUYXJnZXQpIHsgfVxyXG5cclxuICBpbnNlcnQoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5pc0Zvcm1BcnJheSkge1xyXG4gICAgICB0aGlzLnRhcmdldC5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YXJnZXQuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldChpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0Zvcm1BcnJheSA/IHRoaXMudGFyZ2V0LmF0KGluZGV4KSA6IHRoaXMudGFyZ2V0W2luZGV4XTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgaXRlbTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zvcm1BcnJheSkge1xyXG4gICAgICBpdGVtID0gdGhpcy50YXJnZXQuYXQoaW5kZXgpO1xyXG4gICAgICB0aGlzLnRhcmdldC5yZW1vdmVBdChpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtID0gdGhpcy50YXJnZXQuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcblxyXG4gIC8vIHdlIG5lZWQgdGhpcyB0byBpZGVudGlmeSB0aGF0IHRoZSB0YXJnZXQgaXMgYSBGb3JtQXJyYXlcclxuICAvLyB3ZSBkb24ndCB3YW50IHRvIGhhdmUgYSBkZXBlbmRlbmN5IG9uIEBhbmd1bGFyL2Zvcm1zIGp1c3QgZm9yIHRoYXRcclxuICBwcml2YXRlIGdldCBpc0Zvcm1BcnJheSgpIHtcclxuICAgIC8vIGp1c3QgY2hlY2tpbmcgZm9yIHJhbmRvbSBGb3JtQXJyYXkgbWV0aG9kcyBub3QgYXZhaWxhYmxlIG9uIGEgc3RhbmRhcmQgYXJyYXlcclxuICAgIHJldHVybiAhIXRoaXMudGFyZ2V0LmF0ICYmICEhdGhpcy50YXJnZXQuaW5zZXJ0ICYmICEhdGhpcy50YXJnZXQucmVzZXQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=