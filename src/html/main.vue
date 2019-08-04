<style>
    label {
        margin: 10px;
        font-size: 24px;
    }

    ul {
        margin-bottom: 10px;
    }

    ul li {
        margin: 5px 10px;
        padding: 5px;
        color: #000;
        word-wrap: break-word;
    }
</style>

<template>
  <div>
    <SysInfo :title="title" />
  </div>
</template>

<script>
    import "@/assets/css/api.css";
    //导入组件
    import SysInfo from "SysInfo";

    export default {
      name: "Main",
      components:{
          SysInfo
      },
      data() {
        return {
            title:"FAST-APP - 更高效的开发APP"
        };
      },
      created() {

      },
      mounted() {

      },
      methods: {

      }
    };
</script>