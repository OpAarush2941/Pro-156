AFRAME.registerComponent("fish_model", {
    init: function () {
      console.log("hello world")
      for (var i = 1; i <= 10; i++) {
        const id = `hurdle${i}`;
  
        const posX =(Math.random()*150+(-75));  
        const posY = (Math.random()*100+(-50));
        const posZ = (Math.random()*150+(-75));

        const position = { x: posX, y: posY, z: posZ };

        this.createfish(id, position);
      }
    } ,
  
    createfish: function(id, position) { 
      
      const mapEl = document.querySelector("#map");
  
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      
      fishEl.setAttribute("scale", {x:3, y:3, z:3});
      
      fishEl.setAttribute("gltf-model","./Assets/Fish/scene.gltf");

      fishEl.setAttribute("animation-mixer", {});
      
      fishEl.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:2,
      })

      fishEl.setAttribute("game-play",{
            elementId:`#${id}`,
       });
  
      mapEl.appendChild(fishEl);
    }
  });
  
  