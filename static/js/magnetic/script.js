class MagneticComponent extends giaCursorDistance {
    constructor(element) {
        super(element);

        this.options = {
            distance: 100
        };
    }

    setRender() { //gets called by giaCursorDistance on mount
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.diagonal = Math.sqrt( Math.pow(this.width, 2) + Math.pow(this.height, 2) );
        this.maxDistance = (this.diagonal + this.options.distance) / 2;
        this.element.style.transition = "0.6s cubic-bezier(0.075, 0.82, 0.165, 1)";
    }

    render(distance, x, y) {  // gets called by giaCursorDistance on mousemove
        if (distance < this.maxDistance) {
            let percent = 1 - (distance / this.maxDistance);
            this.element.style.transform = `
              translate3d(${ Math.round(x*percent) }px, ${ Math.round(y*percent) }px, 0) 
              rotateY(${ Math.round(x*percent) }deg) 
              rotateX(${ Math.round(y*percent) }deg)
            `; 
        } else {
            this.element.style.transform = "";
        }
    }
}

loadComponents({ "MagneticComponent": MagneticComponent });