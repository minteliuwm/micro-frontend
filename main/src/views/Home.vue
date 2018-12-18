<template>
  <div class="home">
    <div class="home-header">
			<router-link class="item" to="/react">React Demo</router-link>
			<router-link class="item" to="/vue">Vue Demo</router-link>
    </div>
    <div id="content">
			<router-view />
		</div>
  </div>
</template>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-header {
    flex: 0 0 56px;
    height: 56px;
    background: #2f3240;
    color: #fff;
    .item {
      float: left;
      width: 152px;
      height: 100%;
      line-height: 56px;
      text-align: center;
			cursor: pointer;
			text-decoration: none;
			color: #fff;
    }
  }
}
</style>
