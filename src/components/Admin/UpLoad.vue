<template>
  <div id="demo">
    <!-- <div>demo</div> -->
    <div class="UpLoadBox">
      <!-- <p class="UpLoadTitle">拖拽文件或点击上传（文件限制大小为200MB）</p> -->
      <file-pond
        name="test"
        ref="pond"
        label-idle="Drop files here..."
        v-bind:allow-multiple="false"
        v-bind:instantUpload="false"
        v-bind:allowReplace="true"
        v-bind:allowRemove="true"
        v-bind:allowRevert="true"
        v-bind:allowProcess="true"
        accepted-file-types="application/pdf,video/*"
        maxFileSize="200MB"
        labelMaxFileSize="Maximum file size is 200MB"
        v-bind:allowFileRename="true"
        v-bind:server="myServer"
        v-bind:files="myFiles"
        v-on:init="handleFilePondInit"
      />
    </div>
  </div>
</template>

<script>
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileRename from "filepond-plugin-file-rename";

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginFileRename
);
export default {
  name: "demo",
  data: function () {
    return {
      myFiles: "",
      myServer: {
        process: (fieldName, file, metadata, load) => {
          const formData = new FormData();
          //console.log(file.type);
          let ans = file.type == "application/pdf" ? 1 : 0;
          formData.append("type", ans);
          formData.append("file", file, file.name);
          formData.append("filename", file.name);
          formData.append("filesize", file.size / 1000 / 1000);
          formData.append("id", 111);
          let yy = new Date().getFullYear();
          let mm = new Date().getMonth() + 1;
          let dd = new Date().getDate();
          let uploadDate = yy + "-" + mm + "-" + dd;
          formData.append("date", uploadDate);
          for (var key of formData.entries()) {
            console.log(key[0] + "," + key[1]);
          }
          console.log(formData);

          // related to aborting the request
          const CancelToken = this.$axios.CancelToken;
          const source = CancelToken.source();

          // the request itself
          this.$axios({
            method: "post",
            url: "/forum/add/",
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data;charset=UTF-8",
            },
            cancelToken: source.token,
            // onUploadProgress: (e) => {
            //   // updating progress indicator
            //   progress(e.lengthComputable, e.loaded, e.total);
            // },
          })
            .then((response) => {
              // passing the file id to FilePond
              console.log(res.data);
              load(response.data);
            })
            .catch((thrown) => {
              if (this.$axios.isCancel(thrown)) {
                console.log("Request canceled", thrown.message);
              } else {
                // handle error
              }
            });
          return {
            abort: () => {
              source.cancel("Operation canceled by the user.");
            },
          };
        },
        load: (source, load) => {
          // simulates loading a file from the server
          fetch(source)
            .then((res) => res.blob())
            .then(load);
        },
      },
    };
  },
  methods: {
    handleFilePondInit: function () {
      console.log("FilePond has initialized");
    },
  },
  components: {
    FilePond,
  },
};
</script>

<style scoped>
.UpLoadBox{
  /* 调整宽度 是div的宽度 也可以间接调整文件框的宽度*/
  /*width: 71vw;*/
  /* 调整高度 */
  height: 13vh;
   /* 调整与左侧的距离 */
  /*margin-left: 8vw;*/
}
.UpLoadTitle{
  /* 文件栏上边的字体的位置 */
  text-align: center;
  height: 2vh;
}
</style>