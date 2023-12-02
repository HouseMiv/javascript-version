<script setup>
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const orders = [
  {
    amount: '82.5k',
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Senior Administrator',
    avatarIcon: 'bx-user',
  },
  {
    amount: '23.8k',
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Administrator',
    avatarIcon: 'bx-user',
  },
  {
    amount: 849,
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Administrator',
    avatarIcon: 'bx-user',
  },
  {
    amount: 99,
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Senior Administrator',
    avatarIcon: 'bx-user',
  },
  {
    amount: 51,
    title: 'Nickname',
    avatarColor: 'primary',
    subtitle: 'Senior Administrator',
    avatarIcon: 'bx-user',
  },
]
</script>

<template>
  <VCard>
    <VCardItem class="pb-1">
      <VCardTitle class="mb-1">
        Общий рейтинг
      </VCardTitle>
    </VCardItem>

    <VCardText>
      <div class="d-flex align-center justify-space-between mb-1">
        <div class="flex-grow-1 no-ellipsis">
          <!-- Добавлен класс no-ellipsis -->
          <h4 class="text-h4 mb-10">
            8,258
          </h4>
          <span class="mb-10">Топ рейтинга</span>
        </div>
      </div>

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
          <VListItemSubtitle class="text-disabled">
            {{ order.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <span>{{ order.amount }}</span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 21px;
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
