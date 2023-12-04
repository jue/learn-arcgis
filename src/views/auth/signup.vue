<script setup>
const formRef = ref(null)
const form = reactive({
  mobile: '13148407990',
  password: 'np123456',
})
const loading = ref(false)

const rules = reactive({
  mobile: [
    { required: true, validator: validateMobilePhone, trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 20, message: '必需8～20个字母、数字或符号', trigger: 'blur' },
  ],
})

async function submit(formEl) {
  if (!formEl)
    return
  try {
    await formEl.validate()
    loading.value = true

    const res = await http.post('/user/signup', form)
    console.log(res)
  }
  catch (error) {

  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <el-form ref="formRef" :model="form" :rules="rules" :inline-message="true">
    <el-form-item prop="mobile">
      <el-input v-model="form.mobile" size="large" class="!rounded-lg h-11 w-full" placeholder="请输入手机号码">
        <template #prefix>
          <icon-ic:baseline-phone-iphone class="text-gray-400 text-base" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="form.password" size="large" class="!rounded-lg h-11 w-full" placeholder="请输入密码">
        <template #prefix>
          <icon-ic:baseline-key class="text-gray-400 text-base" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="w-full !rounded-lg !h-11" :loading="loading" @click="submit(formRef)">
        注册用户
      </el-button>
    </el-form-item>
  </el-form>
  <div class="text-center">
    <el-link href="/auth/forgot" type="primary" :underline="false">
      忘记密码？
    </el-link>
  </div>
</template>

<route>
  {
    path: '/signup',
    meta: {
      title: '用户注册',
      layout: 'auth',
    }
  }
</route>
