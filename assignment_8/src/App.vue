<template>
<navigation-header></navigation-header>
<RouterView 
:members="members" 
:TeamsList="TeamsList" 
@join-team="joinTeam"/>
</template>
  
<script>
import NavigationHeader from './components/NavigationHeader.vue';

export default {
  components: {
    NavigationHeader
  },
  data() {
    return {
      TeamsList: [], // TeamsList Structure: [ {name: 'team name 1', members: [member1, member2, ...] },  {name: 'team name 2', members: [member3, member4, ...] }, ...]
      members: [
        {
        id: 1,
        name: "Chandler Bing",
        phone: "123 123 1234",
        email: "cBing@gmail.com",
        role: 'Developer',
        team: '',
        },
        {
        id: 2,
        name: "Joey Tribbiani",
        phone: "321 321 4321",
        email: "jtribby@gmail.com",
        role: 'UI/UX',
        team: '',
        },
        {
        id: 3,
        name: "Ross Geller",
        phone: "222 333 4444",
        email: "rgeller@gmail.com",
        role: 'Developer',
        team: '',
        },
        {
        id: 4,
        name: "Monica Bing",
        phone: "123 123 1235",
        email: "mbing@gmail.com",
        role: 'Designer',
        team: '',
        },
        {
        id: 5,
        name: "Rachel Green",
        phone: "876 345 1678",
        email: "rgreen@gmail.com",
        role: 'UI/UX',
        team: '',
        },
        {
        id: 6,
        name: "Phoebe Buffay",
        phone: "678 908 5686",
        email: "pbuff@gmail.com",
        role: 'UI/UX',
        team: '',
        },
        {
        id: 7,
        name: "Stacy Boling",
        phone: "345 679 4212",
        email: "sBoling@gmail.com",
        role: 'Designer',
        team: '',
        },
        {
        id: 8,
        name: "Jake Trimult",
        phone: "443 665 7888",
        email: "jtrim@gmail.com",
        role: 'Developer',
        team: '',
        },
        {
        id: 9,
        name: "Rose Greathouse",
        phone: "345 567 9087",
        email: "rgreat@gmail.com",
        role: 'UI/UX',
        team: '',
        },
        {
        id: 10,
        name: "Mindy Kellum",
        phone: "555 666 7777",
        email: "mKellum@gmail.com",
        role: 'UI/UX',
        team: '',
        },
        {
        id: 11,
        name: "Sarah Miller",
        phone: "987 654 1234",
        email: "smiller@gmail.com",
        role: 'Developer',
        team: '',
        },
        {
        id: 12,
        name: "Caroline Bender",
        phone: "111 222 3456",
        email: "cBend@gmail.com",
        role: 'Designer',
        team: '',
        }
      ]
    }
  },
  methods: {
    joinTeam(id, teamName) {
      let memberFound; // will keep track of the member object found within members array when the join button is pressed on their MemberInfo component

      for (let i = 0; i < (this.members).length; i++) { // loops through members to find the member object with the same id
        if (this.members[i].id === id) {
          this.members[i].team = teamName; // setting the member's team
          memberFound = this.members[i];
        }
      }

      let flag = false; // flag to determine if a team already exists within the TeamsList array with the same team name as the input
      for (let j = 0; j < (this.TeamsList).length; j++) { // loops through TeamsList to find a team name that is the same as the input
        if (this.TeamsList[j].name === teamName) { // if a team already exists with the name
          (this.TeamsList[j].members).push(memberFound); // add the member to the team array
          flag = true; // flag that a team was found
          console.log(this.TeamsList[j]);
          break;
        }
      }
      if (flag === false) { // if a team was not found
        let newTeam = {
          name: teamName,
          members: [memberFound]
        }; // create a new object for a team
        this.TeamsList.push(newTeam); // add this new team to the TeamsList array
        console.log(this.TeamsList);
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
