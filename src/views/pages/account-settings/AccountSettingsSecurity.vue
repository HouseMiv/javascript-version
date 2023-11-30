<script setup>

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const passwordRequirements = [
  "Длина не менее 8 символов - чем больше, тем лучше",
  "По крайней мере, один символ в нижнем регистре",
  "По крайней мере, одно число, символ или пробел",
]
// const recentDevicesHeaders = [
//   {
//     title: 'BROWSER',
//     key: 'browser',
//   },
//   {
//     title: 'DEVICE',
//     key: 'device',
//   },
//   {
//     title: 'LOCATION',
//     key: 'location',
//   },
//   {
//     title: 'RECENT ACTIVITY',
//     key: 'recentActivity',
//   },
// ]

// const recentDevices = [
//   {
//     browser: 'Chrome on Windows',
//     device: 'HP Spectre 360',
//     location: 'New York, NY',
//     recentActivity: '28 Apr 2022, 18:20',
//     deviceIcon: {
//       icon: 'bxl-windows',
//       color: 'primary',
//     },
//   },
//   {
//     browser: 'Chrome on iPhone',
//     device: 'iPhone 12x',
//     location: 'Los Angeles, CA',
//     recentActivity: '20 Apr 2022, 10:20',
//     deviceIcon: {
//       icon: 'bx-mobile',
//       color: 'error',
//     },
//   },
//   {
//     browser: 'Chrome on Android',
//     device: 'Oneplus 9 Pro',
//     location: 'San Francisco, CA',
//     recentActivity: '16 Apr 2022, 04:20',
//     deviceIcon: {
//       icon: 'bxl-android',
//       color: 'success',
//     },
//   },
//   {
//     browser: 'Chrome on MacOS',
//     device: 'Apple iMac',
//     location: 'New York, NY',
//     recentActivity: '28 Apr 2022, 18:20',
//     deviceIcon: {
//       icon: 'bxl-apple',
//       color: 'secondary',
//     },
//   },
//   {
//     browser: 'Chrome on Windows',
//     device: 'HP Spectre 360',
//     location: 'Los Angeles, CA',
//     recentActivity: '20 Apr 2022, 10:20',
//     deviceIcon: {
//       icon: 'bxl-windows',
//       color: 'primary',
//     },
//   },
//   {
//     browser: 'Chrome on Android',
//     device: 'Oneplus 9 Pro',
//     location: 'San Francisco, CA',
//     recentActivity: '16 Apr 2022, 04:20',
//     deviceIcon: {
//       icon: 'bxl-android',
//       color: 'success',
//     },
//   },
// ]
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard title="Изменение пароля">
        <VForm>
          <VCardText>
            <!-- 👉 Current Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 current password -->
                <VTextField
                  v-model="currentPassword"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'bx-hide' : 'bx-show'"
                  label="Текущий пароль"
                  placeholder="············"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 new password -->
                <VTextField
                  v-model="newPassword"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'bx-hide' : 'bx-show'"
                  label="Новый пароль"
                  placeholder="············"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 confirm password -->
                <VTextField
                  v-model="confirmPassword"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'bx-hide' : 'bx-show'"
                  label="Подтвердите новый пароль"
                  placeholder="············"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->
          <VCardText>
            <p class="text-base font-weight-medium mt-2">
              Требования к паролю:
            </p>

            <ul class="d-flex flex-column gap-y-3">
              <li
                v-for="item in passwordRequirements"
                :key="item"
                class="d-flex"
              >
                <div>
                  <VIcon
                    size="7"
                    icon="bxs-circle"
                    class="me-3"
                  />
                </div>
                <span class="font-weight-medium">{{ item }}</span>
              </li>
            </ul>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn>Сохранить</VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Two-steps verification -->
    <VCol cols="12">
      <VCard title="Two-steps verification">
        <VCardText>
          <p class="font-weight-semibold">
            Двухфакторная аутентификация пока не включена.
          </p>
          <p>
            Двухфакторная аутентификация добавляет дополнительный уровень безопасности вашей учетной записи, поскольку для входа в систему требуется нечто большее, чем просто пароль.
          </p>

          <VBtn>
            Enable 2FA
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->
   
    <!-- !SECTION -->
  </VRow>
</template>
