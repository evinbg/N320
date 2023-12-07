<template>
<header>
    <nav>
        <RouterLink to="/" class="page">Sessions</RouterLink>
        <RouterLink to="/mySessions" class="page">My Sessions</RouterLink>
    </nav>
</header>
</template>

<style scoped>
.page {
    width: auto;
    background-color: lightcyan;
    padding: 5px;
    border-radius: 10px;
    margin: 5px;
    margin-right: 10px;
    border-width: 2px;
    border-color: black;
    border-style: solid;
    text-decoration: none;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,.5);
}

.page:visited {
    text-decoration: none;
    color: black;
}

.page:hover {
    cursor: pointer;
}

header {
    margin-bottom: 15px;
    margin-top: 15px;
}

nav {
    text-decoration: none;
}

.router-link-active {
  background-color: darkblue;
  color: white;
}

.router-link-active:visited {
  background-color: darkblue;
  color: white;
}
</style>