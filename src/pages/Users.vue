    <template>
  <master-layout pageTitle="Users">
    <div>
      <ion-button expand="full" @click="showUsers()">Show Users</ion-button>
      <ion-card v-for="user in allUsers" :key="user.id">
        <ion-card-content>
          <ion-card-title>{{ user.name }}</ion-card-title>
        </ion-card-content>
        <ion-item> <ion-label>Email</ion-label>{{ user.email }} </ion-item>
      </ion-card>
    </div>
  </master-layout>
</template>
    <script>
import { mapGetters, mapActions } from "vuex";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonItem,
  IonLabel,
} from "@ionic/vue";
export default {
  components: {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonLabel,
  },
  computed: {
    ...mapGetters("users", {
      allUsers: "allUsers",
    }),
  },
  methods: {
    ...mapActions("users", {
      fetchUsers: "fetchUsers",
    }),
    async showUsers() {
      await this.fetchUsers();
    },
  },
};
</script>