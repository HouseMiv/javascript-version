<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import { onMounted, ref } from 'vue'

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
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
    bordered
  >
    <VAvatar
      color="primary"
      variant="tonal"
    >
      <VImg :src="user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg` : avatar1" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg :src="user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg` : avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VBannerText
              v-if="user.username"
              :id="user.username"
            />
            <VListItemTitle class="font-weight-semibold">
              {{ user.username }}
            </VListItemTitle>
            <VListItemSubtitle>Admin</VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <!-- 👉 Settings -->
          <VListItem to="/account-settings">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-cog"
                size="22"
              />
            </template>

            <VListItemTitle>Настройка</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem to="/login">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-log-out"
                size="22"
              />
            </template>

            <VListItemTitle>Выйти</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
