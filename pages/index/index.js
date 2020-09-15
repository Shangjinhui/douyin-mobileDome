const app = getApp()
import * as filter from '../../until/filter'
Page({
  data: {
    filter,
    mobile:'',
    list:[
      {
        username:filter.hideName('尚金辉'),
        avatar:'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/3793/3131589739~120x256.image',
        star:filter.switchArray(2),
        desc:'撒覅u很多佛i是的'
      },
      {
        username:filter.hideName('殷俊'),
        avatar:'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/3793/3131589739~120x256.image',
        star:filter.switchArray(5),
        desc:'撒覅u很多佛i是的asdasd'
      },
    ]
  },
  onLoad: function () {
    //console.log(this.filter,filter)
  },
  bindinput(e){
    this.data.mobile = e.detail.value;
  },
  lookDetail(){
    if(!(/^1[3456789]\d{9}$/.test(this.data.mobile))){     
        tt.showToast({
          title: '手机号格式错误', // 内容
          icon:'fail'
        });
    }else{
      this.showAdvert();
    }
  },
  showAdvert(){
    const videoAd = tt.createRewardedVideoAd({
      adUnitId: "375kh99d24081akvk6",
    });
    // 显示广告
    videoAd.show().then(() => {
        //console.log("广告显示成功");
    }).catch((err) => {
      //console.log("广告组件出现问题", err);
      // 可以手动加载一次
      videoAd.load().then(() => {
        //console.log("手动加载成功");
        // 加载成功后需要再显示广告
        return videoAd.show();
      });
    });

    videoAd.onClose((res) => {
      if (res.isEnded) {
        // 给予奖励
        tt.navigateTo({
          url: `/pages/testDetail/testDetail?mobile=${this.data.mobile}` // 指定页面的url
        });
      }
    });

    videoAd.onError((err) => {
      tt.showToast({
        title: JSON.stringify(err),
        icon:'fail'
      });
      setTimeout(()=>{
        tt.navigateTo({
          url: `/pages/testDetail/testDetail?mobile=${this.data.mobile}` // 指定页面的url
        });
      },500)
    });
  }
})
