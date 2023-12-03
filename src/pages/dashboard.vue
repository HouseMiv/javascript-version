<script setup>
import AnalyticsCongratulations from '@/views/dashboard/AnalyticsCongratulations.vue'
import AnalyticsProfitReport from '@/views/dashboard/AnalyticsProfitReport.vue'
import nightavatar from '@images/avatars/nightavatar.jpg'
import banner1 from '@images/pages/banner.png'
import News from '../views/dashboard/News.vue'
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
        <VImg :src="banner1" />

        <VCardText class="position-relative">
          <!-- User Avatar -->
          <VAvatar
            size="75"
            class="avatar-center"
            :image="nightavatar"
          />

          <!-- Title, Subtitle & Action Button -->
          <div class="d-flex justify-space-between flex-wrap pt-8">
            <div class="me-2 mb-2">
              <VCardTitle class="pa-0">
                HouseMiv
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
