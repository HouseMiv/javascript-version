<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import logo from '@images/logo.svg'
import pages1 from '@images/pages/1.png'
import pages2 from '@images/pages/2.png'
import pages3 from '@images/pages/3.png'

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
]

const isCardDetailsVisible = ref(false)
</script>

<template>
  <VRow>
    <!-- 👉 Robert Meyer -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard>
        <VImg :src="pages2" />

        <VCardText class="position-relative">
          <!-- User Avatar -->
          <VAvatar
            size="75"
            class="avatar-center"
            :image="logo"
          />

          <!-- Title, Subtitle & Action Button -->
          <div class="d-flex justify-space-between flex-wrap pt-8">
            <div class="me-2 mb-2">
              <VCardTitle class="pa-0">
                Создано разработчиками сайта
              </VCardTitle>
              <VCardSubtitle class="text-caption pa-0">
                Самый удобный биндер для администрирования
              </VCardSubtitle>
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    
    <!-- 👉 Influencing The Influencer -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard>
        <VImg
          :src="pages1"
          cover
        />

        <VCardItem>
          <VCardTitle>Для чего нужен биндер?</VCardTitle>
        </VCardItem>

        <VCardText>
          Биндер создан для того, чтобы сделать ваш опыт администрирования сервера более удобным, 
          эффективным и увлекательным. Управляйте сервером профессионально с помощью этого инструмента!
        </VCardText>
      </VCard>
    </VCol>



    <!-- 👉 Popular Uses Of The Internet -->
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCard>
        <VImg
          :src="pages3"
          cover
          max-height="280"
        />

        <VCardItem>
          <VCardTitle>Инструкция использования биндера</VCardTitle>
        </VCardItem>

        <VCardText>
          <div class="mb-4">
            Перейдя по ссылке ниже, будет предоставлен видеоматериал о том, как пользоваться биндером
          </div>

          <VBtn
            variant="text"
            density="comfortable"
            @click="isCardDetailsVisible = !isCardDetailsVisible"
          >
            Перейти
          </VBtn>
        </VCardText>

        <VExpandTransition>
          <div v-show="isCardDetailsVisible">
            <VDivider />
            <VCardText>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </VCardText>
          </div>
        </VExpandTransition>
      </VCard>
    </VCol>
    
    

    <!-- 👉 Support -->
    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <VCard class="text-center">
        <VCardText class="d-flex flex-column justify-center align-center">
          <VAvatar
            color="primary"
            variant="tonal"
            size="50"
            class="mb-4"
          >
            <VIcon
              size="2rem"
              icon="bx-help-circle"
            />
          </VAvatar>

          <h6 class="text-h6">
            Тех. поддержка
          </h6>
        </VCardText>

        <VCardText>
          <p>
            В случае, если у вас возникли какие-то проблемы с биндером - свяжитесь с нами.
          </p>
        </VCardText>
        <VCardText>
          <VBtn variant="elevated">
            Связаться
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <VCard class="text-center">
        <VCardText class="d-flex flex-column justify-center align-center">
          <VAvatar
            color="primary"
            variant="tonal"
            size="50"
            class="mb-4"
          >
            <VIcon
              size="2rem"
              icon="bxs-download"
            />
          </VAvatar>

          <h6 class="text-h6">
            Скачать Биндер
          </h6>
        </VCardText>

        <VCardText>
          <p>
            "Что-нибудь добавить"
          </p>
        </VCardText>
        <VCardText>
          <VBtn variant="elevated">
            Скачать
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 0 solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
