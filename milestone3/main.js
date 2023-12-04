'use strict'

const { createApp } = Vue;

createApp({

    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '../img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            Status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            Status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            Status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '../img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            Status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            Status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            Status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '../img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            Status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            Status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            Status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '../img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            Status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            Status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '../img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            Status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            Status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '../img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            Status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            Status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            Status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '../img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            Status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            Status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '../img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            Status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            Status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            Status: 'received'
                        }
                    ],
                }
            ],

            currentMessages: [],
            newMessage: '',
            currentContact: '',
            searchQuery: ''


        }
    },
    methods: {

        viewMessages(index) {
            if (this.contacts[index].messages) {
                this.currentMessages = this.contacts[index].messages.map(message => ({ message: message.message, Status: message.Status, date: message.date.substr(10, 6) }));



            }
        },
        messageAdd() {
            if (this.newMessage.trim() !== null) {

                this.currentMessages.push({
                    message: this.newMessage,
                    Status: 'sent',
                });
                this.newMessage = '';
                setTimeout(() => this.currentMessages.push({
                    message: 'Ok!',
                    Status: 'received'
                }), 1000);

            }
        },

        setCurrentContact(contact) {
            this.currentContact = contact;
        },
        filteredContact() {
            if (this.searchQuery.trim() !== '') {
                return this.contacts.filter((contacts) =>
                    contacts.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                )
                    .map((contacts) => {
                        return {
                            ...contacts,
                            name: contacts.name
                        };
                    });
            }
            else {
                return this.contacts
            }
        }
    }




}).mount('#app');






