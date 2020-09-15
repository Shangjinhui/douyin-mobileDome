// pages/advert/advert.js
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    
  },
  data:{
    show:true,
    animation:null
  },
  ready(){
    
  },
  methods:{
    close(){
      const animation = tt.createAnimation({
        duration: 1000,
        timingFunction: "ease-in-out",
      });
      animation.opacity(0).step();
      this.setData({animation:animation.export()});
      setTimeout(()=>{this.setData({show:false});},1000)
    }
  }
})