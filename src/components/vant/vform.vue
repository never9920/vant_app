<template>
  <div>
    <van-form @submit="onSubmit" class="form">
      <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      class="field"
      :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      class="field"
      :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
name:"vform",
  data () {
    return {
        username:'',
        password:''
    };
  },

  components: {},

  computed: {},

  methods: {
    onSubmit(values) {
      //console.log('submit', values);
    },
  }
}

</script>
<style scoped>
.form{
    position: relative;
    width: 100%;
}
.field{
    font-size: 18px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0);
    margin: 10px 0;
}
</style>