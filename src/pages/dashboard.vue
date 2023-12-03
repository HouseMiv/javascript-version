<script setup>
import AnalyticsCongratulations from '@/views/dashboard/AnalyticsCongratulations.vue'
import AnalyticsProfitReport from '@/views/dashboard/AnalyticsProfitReport.vue'
import banner1 from '@images/pages/banner.png'
import News from '../views/dashboard/News.vue'

const user = ref({})

const fetchUserData = async () => {
  try {
    const fragment = new URLSearchParams(window.location.hash.slice(1))
    const accessToken = fragment.get('access_token')
    const tokenType = fragment.get('token_type')

    const response = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch user data')
    }

    user.value = await response.json()

    // Сохраняем данные в localStorage (или sessionStorage, если вам нужно временное хранение)
    localStorage.setItem('user', JSON.stringify(user.value))
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

onMounted(() => {
  // Проверяем, есть ли данные пользователя в localStorage
  const storedUser = localStorage.getItem('user')

  if (storedUser) {
    // Если есть, используем их
    user.value = JSON.parse(storedUser)
  } else {
    // В противном случае, загружаем данные с сервера
    fetchUserData()
  }
})
</script>

<template>
  <VRow class="h-100">
    <!-- 👉 Congratulations -->
    <VCol
      cols="13"
      md="8"
    >
      <AnalyticsCongratulations />
    </VCol>

    <!-- 👉 Profit Report -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <AnalyticsProfitReport />
    </VCol>

    <!-- 👉 User Avatar -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard>
        <VImg :src="user.banner ? `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.jpg` : banner1" />

        <VCardText class="position-relative">
          <!-- User Avatar -->
          <VAvatar
            size="75"
            color="primary"
            variant="tonal"
          >
            <VImg :src="user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg` : '@images/pages/banner.png'" />
          </VAvatar>

          <!-- Title, Subtitle & Action Button -->
          <div class="d-flex justify-space-between flex-wrap pt-8">
            <div class="me-2 mb-2">
              <VCardTitle class="pa-0">
                {{ user.username }}
              </VCardTitle>
              <VCardSubtitle
                class="text-caption pa-0"
                style="color: rgb(255, 0, 106);"
              >
                Developer
              </VCardSubtitle>
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <!-- 👉 Order Statistics -->
    <VCol class="flex-item">
      <News />
    </VCol>

    <!-- 👉 Order Statistics -->
  </VRow>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}
</style>
