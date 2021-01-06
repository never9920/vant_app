<template>
  <div>
    <van-form @submit="onSubmit" class="form">
      <van-field 
      v-model="value" 
      label="用户名"  
      :rules="[{ required: true, message: '请填写用户名' }]" 
      clearable
      class="field"
      />
      <van-field 
      v-model="password" 
      type="password" 
      label="密码" 
      :rules="[{ required: true, message: '请填写密码' }]"
      clearable
      class="field"/>
      <van-field 
      v-model="tel" 
      type="tel" 
      label="手机号" 
      :rules="phonerule"
      clearable
      class="field">
        <template #button>
          <van-button size="small" type="primary" :disabled="rightphone" @click.prevent="check">{{codetime>0 ? `已发送(${codetime}s)` : '获取验证码'}}</van-button>
        </template>
      </van-field>
      <van-field
      v-model="sms"
      clearable
      label="短信验证码"
      :rules="[{ required: true, message: '请填写验证码' }]"
      class="field"
      /> 
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
name:"vfield",
  data () {
    return {
        value:'',
        tel:'',
        password:'',
        sms:'',
        rightphone:true,
        phonerule:[
            { required: true,message:'请填写手机号',
            validator:(rule,value,callback)=>{
               const a= /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.tel)
               //console.log(this.tel)
               if(a){
                   this.rightphone = false
                   //console.log(a)
               } else{
                   this.$toast('请填写正确手机号')
                   //console.log(a)
               }
            }
        }],
        codetime: 0,
    };
  },

  components: {},

  computed: {},

  methods: {
      check(){
          console.log('kkk')
      },
      onSubmit(values) {
      console.log('submit', values);
    },
    check(){
          if(!this.codetime){
              this.codetime = 10
              const timer = setInterval(()=>{
                  this.codetime--
                  if (this.codetime<=0){
                        clearInterval(timer)
                    }
              },1000)  
          }
      },
  }
}

</script>
<style scoped>
.form{
    margin-top: 10px;
}
.field{
    font-size: 18px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
}
</style>