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

      <label>FAST-APP - 更高效的开发APP</label>
      <div id='sys-info'>
          <ul>
              <li>引擎版本信息：{{ ver }} </li>
              <li>系统类型：{{ sType }} </li>
              <li>系统版本：{{ sVer }} </li>
              <li>设备标识：{{ id }} </li>
              <li>设备型号：{{ model }} </li>
              <li>设备名称：{{ name }} </li>
              <li>网络状态：{{ cType }} </li>
              <li>主窗口名字：{{ winName }} </li>
              <li>主窗口宽度：{{ winWidth }} </li>
              <li>主窗口高度：{{ winHeight }} </li>
              <li>子窗口名字：{{ frameName }} </li>
              <li>子窗口宽度：{{ frameWidth }} </li>
              <li>子窗口高度：{{ frameHeight }} </li>
          </ul>
      </div>

  </div>
</template>

<script>
    import "@/assets/css/api.css";

    export default {
      name: "Main",
      data() {
        return {
            ver:api.version,
            sType:api.systemType,
            sVer:api.systemVersion,
            id:api.deviceId,
            model:api.deviceModel,
            name:api.deviceName,
            cType:api.connectionType,
            winName:api.winName,
            winWidth:api.winWidth,
            winHeight:api.winHeight,
            frameName:api.frameName,
            frameWidth:api.frameWidth,
            frameHeight:api.frameHeight
        }
      },
      created() {

      },
      methods: {

      },
      mounted() {

      }
    }
</script>