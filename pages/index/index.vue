<template>
  <view class="index">
    <view class="index-bw-swiper">
      <bw-swiper
        :swiperList="swiperList"
        style="width: 100%; height: 100%;"
        :w_h="2"
		@clickItem="clickItemPic"
		@change="changePic"
      ></bw-swiper>
    </view>
  </view>
</template>

<script>
import BwSwiper from "@/components/common/BwSwiper.vue";
export default {
  data() {
    return {
      swiperList: [
        {
          img:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg",
          text: "加油",
        },
        {
          img:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg",
          text: "加油",
        },
        {
          img:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg",
          text: "加油",
        },
      ],
    };
  },
  methods:{
	  // 点击轮播的图片 row 当前对象 回调
	  clickItemPic(row){
		  console.log(row)
	  },
	  //改变的当前的图片 回调
	  changePic(e){
		  // console.log(e)
	  }
  },
  components: {
    BwSwiper,
  },
};
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  min-height: 200px;
  box-sizing: border-box;
  .index-bw-swiper {
    width: 100%;
    margin:0 auto;
    height: 200px;
  }
}
</style>
