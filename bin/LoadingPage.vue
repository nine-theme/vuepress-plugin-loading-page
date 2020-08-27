<template>
  <div id="loader-wrapper">
    <div class="loader-main">
      <span class="l-1"></span>
      <span class="l-2"></span>
      <span class="l-3"></span>
      <span class="l-4"></span>
      <span class="l-5"></span>
      <span class="l-6"></span>
    </div>
    <h3 class="title" v-if="$frontmatter.home">{{$site.title || $localeConfig.title}}</h3>
    <p class="description" v-if="$frontmatter.home">{{$site.description || $localeConfig.description}}</p>
  </div>
</template>

<style lang="stylus" scoped>
#loader-wrapper
  height:100vh;
  width:100vw;
  background #fff
  background var(--background-color)
  .loader-main
    position:fixed;
    height:50px;
    top:45%;
    left:50%;
    z-index:555;
    transform:translate(-50%,0);
    span[class*="l-"] {
      height: 24px;
      width: 24px;
      background: #3eaf7c;
      display: inline-block;
      margin: 12px 2px;
      border-radius: 100%;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      -webkit-animation: loader 4s infinite;
      -webkit-animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
      -webkit-animation-fill-mode: both;
      -moz-animation: loader 4s infinite;
      -moz-animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
      -moz-animation-fill-mode: both;
      -ms-animation: loader 4s infinite;
      -ms-animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
      -ms-animation-fill-mode: both;
      animation: loader 4s infinite;
      animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
      animation-fill-mode: both;
    }
    span.l-1 {-webkit-animation-delay: 1s;animation-delay: 1s;-ms-animation-delay: 1s;-moz-animation-delay: 1s;}
    span.l-2 {-webkit-animation-delay: 0.8s;animation-delay: 0.8s;-ms-animation-delay: 0.8s;-moz-animation-delay: 0.8s;}
    span.l-3 {-webkit-animation-delay: 0.6s;animation-delay: 0.6s;-ms-animation-delay: 0.6s;-moz-animation-delay: 0.6s;}
    span.l-4 {-webkit-animation-delay: 0.4s;animation-delay: 0.4s;-ms-animation-delay: 0.4s;-moz-animation-delay: 0.4s;}
    span.l-5 {-webkit-animation-delay: 0.2s;animation-delay: 0.2s;-ms-animation-delay: 0.2s;-moz-animation-delay: 0.2s;}
    span.l-6 {-webkit-animation-delay: 0;animation-delay: 0;-ms-animation-delay: 0;-moz-animation-delay: 0;}
    @-webkit-keyframes loader {
      0% {-webkit-transform: translateX(-30px); opacity: 0;}
      25% {opacity: 1;}
      50% {-webkit-transform: translateX(30px); opacity: 0;}
      100% {opacity: 0;}
    }
    @-moz-keyframes loader {
      0% {-moz-transform: translateX(-30px); opacity: 0;}
      25% {opacity: 1;}
      50% {-moz-transform: translateX(30px); opacity: 0;}
      100% {opacity: 0;}
    }
    @-keyframes loader {
      0% {-transform: translateX(-30px); opacity: 0;}
      25% {opacity: 1;}
      50% {-transform: translateX(30px); opacity: 0;}
      100% {opacity: 0;}
    }
    @-ms-keyframes loader {
      0% {-ms-transform: translateX(-30px); opacity: 0;}
      25% {opacity: 1;}
      50% {-ms-transform: translateX(30px); opacity: 0;}
      100% {opacity: 0;}
    }
  .title
    margin 8rem auto 2rem
    text-align center
    color $textColor
    color var(--text-color)
    font-size 30px
    box-sizing: border-box;
    padding: 0 10px;
    text-shadow 0 2px 10px rgba(0,0,0,0.2)
  .description
    margin auto
    text-align center
    color $textColor
    color var(--text-color)
    font-size 22px
    box-sizing: border-box;
    padding: 0 10px;
    text-shadow 0 2px 10px rgba(0,0,0,0.2);
</style>
