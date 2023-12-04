<script setup>
const formRef = ref()
const form = reactive({
  password: '',
  checkPass: '',
})
const loading = ref(false)

function validatePass(rule, value, callback) {
  if (value === '')
    callback(new Error('请输入密码'))

  else if (!/^[\w@-]{8,20}$/.test(value))
    callback(new Error('密码必须8-20个字母、数字或符号'))

  else
    callback()
}

function checkPass(rule, value, callback) {
  if (value === '')
    callback(new Error('请再次输入密码'))

  else if (value !== form.password)
    callback(new Error('两次输入密码不一致'))

  else
    callback()
}
const rules = reactive({
  password: [{ required: true, validator: validatePass, trigger: 'blur' }],
  checkPass: [{ required: true, validator: checkPass, trigger: 'blur' }],
})

async function submit(formEl) {
  if (!formEl)
    return
  try {
    await formEl.validate()
    loading.value = true
  }
  catch (error) {

  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="py-5">
    <el-form ref="formRef" :model="form" :rules="rules" :inline-message="true">
      <el-form-item prop="password">
        <el-input v-model="form.password" size="large" class="!rounded-lg h-11 w-full" placeholder="新密码">
          <!-- <template #prefix>
            <icon-ic:baseline-key class="text-gray-400 text-base" />
          </template> -->
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input v-model="form.checkPass" size="large" class="!rounded-lg h-11 w-full" placeholder="确认新密码">
          <!-- <template #prefix>
            <icon-ic:baseline-key class="text-gray-400 text-base" />
          </template> -->
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w-full !h-11" :loading="loading" @click="submit(formRef)">
          确定
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<route>
  {
    path: '/setpassword',
    meta: {
      title: '设置密码',
      layout: 'auth',
    }
  }
</route>
