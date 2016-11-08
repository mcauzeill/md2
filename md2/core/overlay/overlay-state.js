/**
 * OverlayState is a bag of values for either the initial configuration or current state of an
 * overlay.
 */
export var OverlayState = (function () {
    function OverlayState() {
        /** Whether the overlay has a backdrop. */
        this.hasBackdrop = false;
        /** Custom class to add to the backdrop **/
        this.backdropClass = 'md-overlay-dark-backdrop';
    }
    return OverlayState;
}());

//# sourceMappingURL=overlay-state.js.map
