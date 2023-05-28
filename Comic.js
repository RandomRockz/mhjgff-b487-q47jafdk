AFRAME.registerComponent("Comic", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/spiderman.jfif",
        },
        {
          id: "batman",
          title: "Batman",
          url: "./assets/batman.jfif",
        },
  
        {
          id: "superman",
          title: "Superman",
          url: "./assets/superman.jfif",
        },
        {
          id: "flash",
          title: "Flash",
          url: "./assets/flash.jfif",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  

     
        const borderEl =   this.createBorder(position,item.id)

        const thumbnailEl =   this.createThumbnails(item)
        borderEl.appendChild(thumbnailEl)

        const titleEl = this.createTitle(position,item)
        borderEl.appendChild(titleEl)
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
  const entityEl=document.createElement("a-entity")
  entityEl.setAttribute("id",id)
  entityEl.setAttribute("position",position)
  entityEl.setAttribute("visible",true)
  entityEl.setAttribute("geometry",{
    primitive:"ring",
    radiusInner:9,
    radiusOuter:10
  })
  entityEl.setAttribute("material",{color:"#00bcd4", opacity:0.4})
   return entityEl
  },
  
  createThumbnails:function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"circle",
      radius:9
    })
    entityEl.setAttribute("material",{src:item.url})
     return entityEl
    },
  
  
  
  
    createTitle:function(position,item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:70,
        color:"#e65100",
        value:item.title
      })
      const elPosition=position
      elPosition.y=-20
      entityEl.setAttribute("position",elPosition)
      entityEl.setAttribute("visible",true)
  
       return entityEl
      }
  
  
  
  
  
  });
  