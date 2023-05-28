AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{defualt:"", type:""}
    },
    init: function(){
        this.mouseEnter()
        this.mouseLeave()
    },
    mouseEnter: function(){
        this.el.addEventListner("mouseenter",()=>{
            this.el.getAttribute(id)
            const posters=["spiderman","batman","superman","flash"]
            if(posters.includes(id)){
                const postersContainer= documnet.querySelector("#posters-container")
                postersContainer.setAttribute("cursor-listerner",{
                    selectedItemId:id,
            })
this.el.setAttribute("material",{color:"#1565c0"});
            }
        }) 
    },
    mouseLeave: function(){
        this.el.addEventListner("mouseleave",()=>{
            const {selectedItemId}=this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if(id==selectedItemId){
                    if (id == selectedItemId) {
                        el.setAttribute("material", {
                          color: "orange",
                          opacity: 1,
                        });
                      }
                }
            }
        })
    }
})