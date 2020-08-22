<template>
  <div class="dashboard">
    <img class="img-fluid" v-if="bannerImage === 'desktop'" src="../assets/HomeBanner.png">
    <img class="img-fluid" v-else-if="bannerImage === 'smallerMobile'" src="../assets/SmallerMobileBanner.png">
    <img class="img-fluid larger-desktop" v-else-if="bannerImage === 'larger-desktop'" src="../assets/HomeBanner.png">
    <img v-else src="../assets/MobileBanner.png">
    <div class="jumbotron jumbotron-fluid main-video-content">
      <div class="container main-video-title">
        <h1 class="main-video-text">THE GREATEST BUSINESS OPPORTUNITY & COMMUNITY</h1>
        <hr class="main-video-line">
        <p class="small-text">How would you like to join <span class="yellow-text">FREE HOME BASED BUSINESS TRAINING</span> to get <span class="yellow-text">UNLIMITED</span> income opportunity?</p>
      </div>
      <iframe class="youtube-video"  v-if="isYoutube(mainVideo.videoSrc)" :src="mainVideo.videoSrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <video v-else :key="mainVideo.id" width="100%" height="100%" class="video-content" controls controlsList="nodownload">
          <source :src="mainVideo.videoSrc" type="video/mp4">
      </video>
    </div>
    <!-- VIDEO LIST -->
    <div>
      <form method="post">
      </form>  
      <div class="video-list-title">
          <p>WATCH DRIVEN FROM WITHIN FULL TRAINING VIDEOS</p>
      </div>
      <div class="container video-list">
        <div class="row video-list-row justify-content-center">
            <VideoCard v-on:videochange="onVideoChange($event)"  v-for = "(video, i) in videos1" :videoData= "video"  :key="i" class="col-md-3 col-sm-6"></VideoCard>
        </div>
        <div class="row video-list-row justify-content-center">
            <VideoCard  v-on:videochange="onVideoChange($event)" v-for = "(video, i) in videos2"  :videoData= "video"  :key="i" class="col-md-3 col-sm-6"></VideoCard>
        </div>
      </div>
    </div>
    <!-- CONTACT -->
    <div class="row d-flex justify-content-center">
      <div class="col-md-4 col-sm-4 col-lg-4 col-xl-4 column-item">
        <div class="about-content download-item">
          <p class="download-title">DOWNLOAD USANA PRODUCTS AND PRICE LIST</p>
          <button type="button" @click="downloadFile()" class="btn btn-light download-button">Download PDF</button>
        </div>
        <img class="media-image"  src="../assets/DownloadPDF.jpg"/>
      </div>
      <div class="col-md-4 col-sm-4 col-lg-4 col-xl-4">
        <div class="about-content social-media-item">
          <p class="social-media-title">JOIN DRIVEN FROM WITHIN SOCIAL MEDIA GROUP</p>
          <div class="social-media-content">
            <li>Mindset</li>
            <li>Personal Growth</li>
            <li>Business Strategies</li>
          </div>
          <span>
            <a href="https://www.facebook.com/groups/265218818066523/?ref=bookmarks" target="_blank">
              <img class="social-media-icon" src="../assets/SocialMedia-03.png">
            </a>
            <a href="https://www.youtube.com/user/nkusnadi" target="_blank">
              <img class="social-media-icon" src="../assets/SocialMedia-04.png" >
            </a>
          </span>
        </div>
        <img class="media-image"  src="../assets/SocialMediaGroup.jpg"/>
      </div>
      <div class="col-md-4 col-sm-4 col-lg-4 col-xl-4">
        <div class="about-content contact-us-item">
          <p class="contact-us-title">CONTACT US</p>
          <p class="contact-us-content">For more information, please contact us through whatsapp or instagram</p>
          <span>
            <a href="https://www.instagram.com/nelvinkusnadi/?hl=id" target="_blank">
              <img class="social-media-icon" src="../assets/SocialMedia-01.png">
            </a>
            <a href="https://wa.me/+628118113456" target="_blank">
              <img class="social-media-icon" src="../assets/SocialMedia-02.png">
            </a>
          </span>
        </div>
        <img class="media-image" src="../assets/ContactUs.jpg"/>
      </div>
    </div>
    <!-- MODAL -->
    <FormModal></FormModal>
    <!-- Footer -->
    <div class="footer">
      <p class="footer-text">&copy;2020 Driven From Within by Nelvin Kusnadi. All rights reserved</p>
    </div>
  </div>
</template>

<script>
import VideoCard from './VideoCard/VideoCard'
import FormModal from './FormModal/FormModal'

export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  components: {
    VideoCard,
    FormModal
  },
  data(){
    return {
      mainVideo: {videoSrc: require('../assets/Videos/INTRO.mp4'), id:10},
      // videos1:[
      //     {id:0, videoSrc: require('../assets/Videos/2020.05.25 - 01. DFW welcome video (720).mp4'), caption:"Di video ini menceritakan siapa saya dan mengapa bisnis yang saya jalankan sangat bermanfaat untuk anda.", image:'01.png'},
      //     {id:1, videoSrc: require('../assets/Videos/2020.05.29 - 02. USANA Product & Business Presentation (720).mp4'), caption:"Di video ini saya menjelaskan secara detail bagaimana Usana company berbeda dari company lainnya.", image:'02.png'},
      //     {id:2, videoSrc: "https://youtu.be/6JL6GadTVuE", caption:"Di video ini menjelaskan kompensasi plan Usana secara detail dan seberapa besar potensi income untuk anda.", image:'03.png'},
      //     {id:3, videoSrc: require('../assets/Videos/2020.08.10 - 07. USANA Products.mp4'), caption:"Di video ini menjelaskan manfaat, kelebihan dan siapa saja yang dapat konsumsi product supplement Usana.", image:'04.png'},
      // ],
      // videos2:[
      //     {id:4, videoSrc: require('../assets/Videos/2020.08.04 - 04. USANA Skin Care Celavive_1.mp4'), caption:"Di video ini akan dijelaskan secara singkat tentang jenis dan kelebihan produk skin care Usana.", image:'05.png'},
      //     {id:5, videoSrc: require('../assets/Videos/2020.08.10 - 08. USANA Facilities Tour.mp4'), caption:"Di video ini menjelaskan bagaimana cara Usana memproduksi produknya.", image:'06.png'},
      //     {id:6, videoSrc: require('../assets/Videos/2020.08.10 - 05. How to Handle Objection.mp4'), caption:"Di video ini, saya memberikan contoh-contoh penolakan dan bagaimana strategi untuk menanganinya.", image:'07.png'},
      //     {id:7, videoSrc: require('../assets/Videos/2020.08.10 - 06. How to start USANA business.mp4'), caption:"Di video ini, saya menjelaskan step by step dan strategi bagaimana memulai bisnis Usana anda", image:'08.png'},
      // ],
      videos1:[
          {id:0, videoSrc: "https://www.youtube.com/embed/8hY66l1NqZM", caption:"Di video ini menceritakan siapa saya dan mengapa bisnis yang saya jalankan sangat bermanfaat untuk anda.", image:'01.png'},
          {id:1, videoSrc: "https://www.youtube.com/embed/cRgatYKXMcs?rel=0", caption:"Di video ini saya menjelaskan secara detail bagaimana Usana company berbeda dari company lainnya.", image:'02.png'},
          {id:2, videoSrc: "https://www.youtube.com/embed/6JL6GadTVuE?rel=0", caption:"Di video ini menjelaskan kompensasi plan Usana secara detail dan seberapa besar potensi income untuk anda.", image:'03.png'},
          {id:3, videoSrc: "https://www.youtube.com/embed/AinK7TY8l5Y?rel=0", caption:"Di video ini menjelaskan manfaat, kelebihan dan siapa saja yang dapat konsumsi product supplement Usana.", image:'04.png'},
      ],
      videos2:[
          {id:4, videoSrc: "https://www.youtube.com/embed/g2nM9uaO_C4?rel=0", caption:"Di video ini akan dijelaskan secara singkat tentang jenis dan kelebihan produk skin care Usana.", image:'05.png'},
          {id:5, videoSrc: require('../assets/Videos/2020.08.10 - 08. USANA Facilities Tour.mp4'), caption:"Di video ini menjelaskan bagaimana cara Usana memproduksi produknya.", image:'06.png'},
          {id:6, videoSrc: "https://www.youtube.com/embed/cyBhnti_nr0?rel=0", caption:"Di video ini, saya memberikan contoh-contoh penolakan dan bagaimana strategi untuk menanganinya.", image:'07.png'},
          {id:7, videoSrc: "https://www.youtube.com/embed/b8MdHYjY50w?rel=0", caption:"Di video ini, saya menjelaskan step by step dan strategi bagaimana memulai bisnis Usana anda", image:'08.png'},
      ],
      showModal: false,
      screensize: window.innerWidth,
      bannerImage: window.innerWidth < 500 ? "smallerMobile" : "desktop",
      download: require('../assets/Nutrisearch.zip'),
    }
  },
  created(){
    // window.addEventListener('contextmenu', event => event.preventDefault());
     window.addEventListener("resize", this.screenSizeChange);
  },
  destroyed() {
    window.removeEventListener("resize", this.screenSizeChange);
  },

  methods:{
    isYoutube(src){
      if(src.includes("youtube")){
        return true
      } else{
        false
      }
    },
    onVideoChange(value){
      if(value > 3){
        value = value-4
        this.mainVideo = this.videos2[value]
        this.ytVideo = false
      }else {
        this.mainVideo = this.videos1[value]
      }

    },
    screenSizeChange(){
      if(window.innerWidth < 400){
        this.bannerImage = "smallerMobile"
      } else if(window.innerWidth < 500 ){
        this.bannerImage = "mobile"
      } else this.bannerImage = "desktop"
    },
    downloadFile(){
      let link = document.createElement('a');
      link.href = this.download;
      link.download = 'Nutrisearch.zip';
      document.body.appendChild(link);
      link.click();
      link.remove();
    },

  }
}
</script>
<style src="./Dashboard.css" scoped>

</style>

