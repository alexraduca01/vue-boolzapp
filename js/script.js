const { createApp } = Vue;
const dateTime = luxon.DateTime;

createApp({
    data() {
        return {
          contacts: [
            {
              id: 1,
              name: "Rosinante",
              avatar: "./img/avatar_1.jpg",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  message: "Perchè te ne sei andato?",
                  status: "sent",
                },
                {
                  date: "10/01/2020 15:50:00",
                  message: "Mi manchi...",
                  status: "sent",
                },
                {
                  date: "10/01/2020 16:15:22",
                  message: "Eh sai, sono morto!",
                  status: "received",
                },
              ],
            },
            {
              id: 2,
              name: "Bepo",
              avatar: "./img/avatar_2.jpg",
              visible: true,
              messages: [
                {
                  date: "20/03/2020 16:30:00",
                  message: "Ciao come stai?",
                  status: "sent",
                },
                {
                  date: "20/03/2020 16:30:55",
                  message: "Bene grazie! Stasera ci vediamo?",
                  status: "received",
                },
                {
                  date: "20/03/2020 16:35:00",
                  message: "Si. Dobbiamo invadare Onigashima",
                  status: "sent",
                },
              ],
            },
            {
              id: 3,
              name: "Rufy",
              avatar: "./img/avatar_3.jpg",
              visible: true,
              messages: [
                {
                  date: "28/03/2020 10:10:40",
                  message: "Sanji è pronto il pranzo ?",
                  status: "received",
                },
                {
                  date: "28/03/2020 10:20:10",
                  message: "Sicuro di non aver sbagliato chat?",
                  status: "sent",
                },
                {
                  date: "28/03/2020 16:15:22",
                  message: "Oops, errore mio!",
                  status: "received",
                },
              ],
            },
            {
              id: 4,
              name: "Buggy",
              avatar: "./img/avatar_4.jpg",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  message: "Ti darò la caccia e diventerò io imperatore!",
                  status: "sent",
                },
                {
                  date: "10/01/2020 15:50:00",
                  message: "Non volevo diventare imperatore! Risparmiami ti prego!",
                  status: "received",
                },
              ],
            },
            {
              id: 5,
              name: "Crocodile",
              avatar: "./img/avatar_5.png",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  message: "Dopo Buggy toccherà a te",
                  status: "sent",
                },
                {
                  date: "10/01/2020 15:50:00",
                  message: "AHAHAHAHAHA",
                  status: "received",
                },
              ],
            },
            {
              id: 6,
              name: "Kidd",
              avatar: "./img/avatar_6.jpeg",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  message: "Devi attenerti al piano! Non caricare a testa bassa",
                  status: "sent",
                },
                {
                  date: "10/01/2020 15:50:00",
                  message: "No",
                  status: "received",
                },
                {
                  date: "10/01/2020 15:51:00",
                  message: "Sei proprio un idiota",
                  status: "sent",
                },
              ],
            },
            {
              id: 7,
              name: "Zoro",
              avatar: "./img/avatar_7.jpg",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  message: "Devi occuparti di King il più velocemente possibile e poi aiutare Rufy",
                  status: "sent",
                },
                {
                  date: "10/01/2020 15:50:00",
                  message: "Non prendo ordini da te, non sei il mio capitano",
                  status: "received",
                },
              ],
            },
            {
              id: 8,
              name: "Killer",
              avatar: "./img/avatar_8.jpg",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  message: "Puoi dire a me il piano ? forse riesco a convincere Kidd",
                  status: "received",
                },
                {
                  date: "10/01/2020 15:50:00",
                  message: "Dovete intrattenere Big mom finchè non arrivo io per il colpo finale",
                  status: "sent",
                },
                {
                  date: "10/01/2020 15:51:00",
                  message: "OK!!",
                  status: "received",
                },
              ],
            },
          ],
          filterContacts: '',
          userMessage: '',
          activeIndex: 0,
          messageIndex: null,
          dropdownClass: '',
          iaResponse: ['"Mi rifiuto!" disse il netturbino.', 'Le mie figlie hanno sposato due salumieri. Quindi ho due... generi alimentari!', 'Tutti i bambini avevano un nome tranne... ?', "Due mandarini litigano furiosamente e uno dice all'altro: 'guarda che ti spicchio!!'", "Ma d'inverno si leggono più libri perché hanno la copertina?", 'Cosa fa una fabbrica di carta igienica che fallisce? Va a rotoli.'],
          showChat: false,
          randomNames: ['pippo', 'pluto', 'paolino', 'topolino', 'sergione', 'riccardo'],
        };
    },
    methods: {
      changeChat(id){
          for(let i = 0; i < this.contacts.length; i++){
              if(this.contacts[i].id === id){
                  this.activeIndex = i;
                  this.dropdownClass = '';
              }
          }
          this.showChat = true;
      },
      activeChat(id) {
        if(this.contacts[this.activeIndex].id === id){
          return 'active';
        }
      },
      sendMessage(){
        if(this.userMessage !== ''){
          this.contacts[this.activeIndex].messages.push({
            date: dateTime.now().setLocale('it').toLocaleString(dateTime.TIME_SIMPLE),
            message: this.userMessage,
            status: "sent",
          });
          this.$nextTick(() => {
            this.$refs.lastMex[this.$refs.lastMex.length - 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
          });
          setTimeout(() => {
            this.contacts[this.activeIndex].messages.push({
              date: dateTime.now().setLocale('it').toLocaleString(dateTime.TIME_SIMPLE),
              message: this.iaResponse[this.getRndInteger(0, this.iaResponse.length - 1)],
              status: "received",
            });
            this.$nextTick(() => {
              this.$refs.lastMex[this.$refs.lastMex.length - 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
            });
        }, 1001);
        };
        this.userMessage = "";
      },
      contactsFilter(){
          const filteredContacts = this.contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(this.filterContacts.toLowerCase());
          });
          return filteredContacts;
      },
      dropdownToggle(index){
        this.messageIndex = index;
        if(this.dropdownClass === ''){
          this.dropdownClass = 'show';
        }else{
          this.dropdownClass = '';
        }
      },
      deleteMessage(index){
        this.contacts[this.activeIndex].messages.splice(index, 1);
      },
      dynamicDate(user){
        if(user.messages.length > 0){
          return user.messages[user.messages.length - 1].date;
        } else{
          return 'No last access'
        }
      },
      lastAccess(element){
        if(element.messages.length > 0){
          return 'Ultimo accesso:'+ ' ' + element.messages[element.messages.length - 1].date;
        } else{
          return 'No last access';
        }
      },
      lastMessage(user){
        if(user.messages.length > 0){
          return user.messages[user.messages.length - 1].message;
        }
      },
      getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },
      addContact(){
        const newContact = {
          id: this.contacts.length + 1,
          name: this.randomNames[this.getRndInteger(0, this.randomNames.length - 1)],
          avatar: "https://picsum.photos/200",
          visible: true,
          messages: [
            {
              date: '',
              message: '',
              status: '',
            },
          ],
        };
        this.contacts.push(newContact);
      },
    },
}).mount('#app');