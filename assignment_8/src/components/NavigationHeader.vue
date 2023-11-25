<template>
<header>
    <nav>
        <RouterLink to="/" class="page">Home</RouterLink>
        <RouterLink to="/teams" class="page">Teams</RouterLink>
    </nav>
</header>
</template>

<style scoped>
.page {
    width: auto;
    padding: 5px;
    background-color: beige;
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
</style>