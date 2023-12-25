 AFRAME.registerComponent("island-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
          this.data.speedOfRotation -= 0.01;
      }
      if (e.key === "ArrowLeft") {
          this.data.speedOfRotation += 0.01;
      }
    });
  },
  tick: function () {
    var islandRotation = this.el.getAttribute("rotation");

    islandRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: islandRotation.x,
      y: islandRotation.y,
      z: islandRotation.z,
    });
  },
});
  AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
        console.log("hi")
      window.addEventListener("keydown", (e) => {
  
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
      
        var diverPosition = this.data.speedOfAscent;
  
        if (e.key === "ArrowUp") {
            diverPosition.y += 0.1;
            this.el.setAttribute("position", diverPosition);
        }
        if (e.key === "ArrowDown") {
            diverPosition.y -= 0.1;
            this.el.setAttribute("position", diverPosition);
        }
      });
    }
  });
  
  
  