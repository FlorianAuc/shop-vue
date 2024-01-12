import { defineStore } from 'pinia'

export const useTeamStore = defineStore({
  id: 'team',
  state: () => ({
    team: [
      {
        firstname: 'Pierre',
        lastname: 'Charlier',
        vue: false
      },
      {
        firstname: 'Jean',
        lastname: 'Charlier',
        vue: false
      },
      {
        firstname: 'Michel',
        lastname: 'Charlier',
        vue: false
      },
      {
        firstname: 'Justin',
        lastname: 'Charlier',
        vue: false
      }
    ] //fin de l'array
  }) // fin du state
}) //fin du define
