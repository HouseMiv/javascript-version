<script setup>
import {
  useDisplay,
  useTheme,
} from 'vuetify'



const vuetifyTheme = useTheme()
const display = useDisplay()
</script>

<template>
  <VCard class="text-center text-sm-start">
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="8"
        order="2"
        order-sm="1"
      >
        <VCardItem>
          <VCardTitle class="text-md-h5 text-primary">
            Новости 🔔
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <span>
            Здесь должны быть новости ГА/зГА
            <br>
          </span>
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        sm="4"
        order="1"
        order-sm="2"
        class="text-center"
      />
    </VRow>
  </VCard>
</template>
