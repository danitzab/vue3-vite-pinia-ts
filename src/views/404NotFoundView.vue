<template>
  <div class="container text-center">
    <router-link :to="{ name: 'home' }" class="inline-flex">
      <img class="h-50 w-auto" src="@/assets/images/404-not-found.gif" alt="notFound" loading="lazy" />
    </router-link>
  </div>
  <div>
    <div class="text-center">
      <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
        {{ $t(`${I18N_PATH}.title`) }}
      </h1>
      <p class="mt-2 text-base text-gray-500">
        {{ $t(`${I18N_PATH}.message`) }}
      </p>
      <div class="mt-6">
        <router-link
          :to="{ name: 'home' }"
          class="text-base font-medium text-primary hover:text-indigo-500"
        >
          {{ $t(`${I18N_PATH}.goBackHome`) }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// #region - Imports
// Constants
import { ROOT_VIEWS_NOT_FOUND as I18N_PATH } from '@/constants/i18n.constants';
// #endregion
</script>
