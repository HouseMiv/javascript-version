<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const accountData = {
  avatarImg: avatar1,
  nickname: 'john',
  name: 'Doe',
  timezone: '(GMT-11:00) International Date Line West',
}

const timezones = [
  '(GMT-11:00) Международная линия дат Западная',
  '(GMT-11:00) Остров Мидуэй',
  '(GMT-10:00) Гавайи',
  '(GMT-09:00) Аляска',
  '(GMT-08:00) Тихоокеанское время (США и Канада)',
  '(GMT-08:00) Тихуана',
  '(GMT-07:00) Аризона',
  '(GMT-07:00) Чиуауа',
  '(GMT-07:00) Ла-Пас',
  '(GMT-07:00) Масатлан',
  '(GMT-07:00) Горное время (США и Канада)',
  '(GMT-06:00) Центральная Америка',
  '(GMT-06:00) Центральное время (США и Канада)',
  '(GMT-06:00) Гвадалахара',
  '(GMT-06:00) Мехико',
  '(GMT-06:00) Монтеррей',
  '(GMT-06:00) Саскачеван',
  '(GMT-05:00) Богота',
  '(GMT-05:00) Восточное время (США и Канада)',
  '(GMT-05:00) Индиана (Восток)',
  '(GMT-05:00) Лима',
  '(GMT-05:00) Кито',
  '(GMT-04:00) Атлантическое время (Канада)',
  '(GMT-04:00) Каракас',
  '(GMT-04:00) Ла-Пас',
  '(GMT-04:00) Сантьяго',
  '(GMT-03:00) Бразилия',
  '(GMT-02:00) Срединно-Атлантический океан',
  '(GMT-01:00) Азорские острова',
  "(GMT+00:00) Лондон",
]

const refInputEl = ref()
const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)


const changeAvatar = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.avatarImg = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Данные пользователя">
        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="accountDataLocal.avatarImg"
          />

          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="refInputEl?.click()"
              >
                <VIcon
                  icon="bx-cloud-upload"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">Загрузить Фото</span>
              </VBtn>

              <input
                ref="refInputEl"
                type="file"
                name="file"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeAvatar"
              >
            </div>

            <p class="text-body-1 mb-0">
              Разрешены JPG, GIF или PNG. Максимальный размер 800 КБ
            </p>
          </form>
        </VCardText>

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 First Name -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.nickname"
                  placeholder="Jesus"
                  label="NickName"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.name"
                  placeholder="John"
                  label="Настоящее имя"
                />
              </VCol>

              <!-- 👉 Timezone -->
              <VCol
                cols="12"
                md="12"
              >
                <VSelect
                  v-model="accountDataLocal.timezone"
                  label="Timezone"
                  placeholder="Select Timezone"
                  :items="timezones"
                  :menu-props="{ maxHeight: 200 }"
                />
              </VCol>


              <!-- 👉 Form Actions -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn>Сохранить</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
