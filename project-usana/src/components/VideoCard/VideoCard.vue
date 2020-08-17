<template>
    <div class="card video" style="width: 18rem;">
      <img class="card-img-top" v-bind:src="require('../../assets/' + videoData.image)">
      <div class="card-body">
        <p class="card-text video-text">{{videoData.caption}}</p>
          <button v-if="!getUser" @click="emitVideoLink(videoData.id)" type="button watch-now" class="btn" data-toggle="modal" data-target="#exampleModal">
              Watch Now
          </button>
          <button v-else class="btn" @click="emitVideoLink(videoData.id)" type="button watch-now">
              Watch Now
          </button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'VideoCard',
  props: [ "videoData"],
  data(){
    return {
      getUser: localStorage.getItem('user-usana')
    }
  },
  methods:{
    emitVideoLink(value){
      this.$emit('videochange',value)
    }
  }
}
</script>
<style src="./VideoCard.css" scoped></style>