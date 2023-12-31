<template>
  <v-app-bar flat color="black">
      <v-app-bar-title>
        <div class="py-4 pl-2 pr-6 title-img">
          <v-img
            height="64px"
            src="../../assets/dashinter-logo-dark.png"
            cover
          />
        </div>
      </v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style scoped>
.title-img {
  box-sizing: border-box;
  width: 240px;
  height: 64px;
  border-right: 0.5px solid #d9bfff;
}

.v-toolbar-title{
  margin-inline-start: 0px !important;
}

.v-toolbar {
  border-bottom: 0.5px solid #d9bfff;
}
</style>