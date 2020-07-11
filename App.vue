<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
    
    // uni.getLocation({
    //   type: "gcj02", //返回可以用于uni.openLocation的经纬度
    //   success: function (res) {
    //     const latitude = res.latitude;
    //     const longitude = res.longitude;
    // 		console.log(res);
    //   },
    // });
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
@import "./common/common.css";

page {
  display: flex;
  min-height: 100%;
  background-color: #efefef;
}
</style>
