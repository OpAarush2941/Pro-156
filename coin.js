 AFRAME.registerComponent("coins", {
    init: function(){
        console.log("hello")
        for(var i=1; i<=10; i++){
            const id=`coin${i}`;

            const posX = (Math.random()*100+(-75));  
            const posY = (Math.random()*100+(-50));
            const posZ = (Math.random()*150+(-75));

            const position={x:posX, y:posY, z:posZ};
            this.createCoin(id, position);
        };
    },
    createCoin: function(id, position){
        console.log("success")
        const treasureEntity = document.querySelector("#map");
        var coinEl = document.createElement("a-entity");
        coinEl.setAttribute("id", id);
        coinEl.setAttribute("position", position);
        coinEl.setAttribute("material", "color", "#ff9100");
        coinEl.setAttribute("geometry",{primitive:"circle", radius:1});
        coinEl.setAttribute("animation", {
            property:"rotation",
            to:"0 360 0",
            loop:"true",
            dur:1000
        });

        coinEl.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:2,
        })

        coinEl.setAttribute("game-play",{
            elementId:`${id}`,
        });

        treasureEntity.appendChild(coinEl);
    }
});