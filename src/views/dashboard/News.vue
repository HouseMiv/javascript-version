<script setup>
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const orders = [
  {
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Senior Administrator',
    avatarIcon: 'bx-user',
    text: 'Здесь каждый .',
    time: '23.01.2023 23:15',
  },
  {
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Senior Administrator',
    avatarIcon: 'bx-user',
    text: 'Здесь каждый раздел призван сделать ваше пребывание у нас полезным, увлекательным и насыщенным положительным опытом.',
    time: '23.01.2023 23:15',
  },
  {
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Senior Administrator',
    avatarIcon: 'bx-user',
    text: 'Здесь каждый раздел призван сделать ваше пребывание у нас полезным, увлекательным и насыщенным положительным опытом. Здесь каждый раздел призван сделать ваше пребывание у нас полезным, увлекательным и насыщенным положительным опытом. Здесь каждый раздел призван сделать ваше пребывание у нас полезным, увлекательным и насыщенным положительным опытом.',
    time: '23.01.2023 23:15',
  },
  {
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Senior Administrator',
    avatarIcon: 'bx-user',
    text: 'Здесь каждый раздел призван сделать ваше пребывание у нас полезным, увлекательным и насыщенным положительным опытом.',
    time: '23.01.2023 23:15',
  },
  {
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Senior Administrator',
    avatarIcon: 'bx-user',
    text: 'Здесь каждый раздел призван сделать ваше пребывание у нас полезным, увлекательным и насыщенным положительным опытом.',
    time: '23.01.2023 23:15',
  },
]
</script>

<template>
  <VCard>
    <VCardItem class="pb-1">
      <VCardTitle class="mb-1">
        Новости
      </VCardTitle>
    </VCardItem>

    <VCardText>
      <VList class="card-list mt-7">
        <VListItem 
          v-for="order in orders"
          :key="order.title"
        >
          <template #prepend>
            <VAvatar
              rounded
              variant="tonal"
              :color="order.avatarColor"
            >
              <VIcon :icon="order.avatarIcon" />
            </VAvatar>
          </template>

          <VListItemTitle class="mb-1">
            {{ order.title }}
          </VListItemTitle>
          <VListItemSubtitle>
            {{ order.subtitle }} 
          </VListItemSubtitle>
          <VBannerText style="margin-top: 5px;">
            {{ order.text }}
          </VBannerText>
          <VListItemSubtitle style=" display: flex; justify-content: end;margin-top: 5px; font-size: 12px;">
            {{ order.time }} 
          </VListItemSubtitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 20px;
}

.flex-grow-1 {
  margin-block-end: 0; /* Установите нужное значение отступа */
}

.no-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
