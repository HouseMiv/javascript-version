<script setup>
import DemoFormLayoutHorizontalFormWithIcons from '@/views/pages/form-layouts/DemoFormLayoutHorizontalFormWithIcons.vue'
import DemoSimpleTableBasics from '@/views/pages/tables/DemoSimpleTableBasics.vue'
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="12"
    >
      <!-- 👉 Horizontal Form with Icons -->
      <VCard title="Оставить заяление на отпуск">
        <VCardText>
          <DemoFormLayoutHorizontalFormWithIcons />
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Список отпусков">
        <DemoSimpleTableBasics />
      </VCard>
    </VCol>
  </VRow>
</template>
