<template>
  <v-app>
    <div class="container" style="padding: 10px;">
      <v-content>
        <Calendario/>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Calendario from './components/Calendario';

export default {
  name: 'App',
  components: {
    Calendario,
  },
  data: () => ({
    //
  }),
};
</script>
