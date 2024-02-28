<template>
    <header id="header">
        <h1 class="header__logo">
            <router-link to="/">STARSHIP SQUARE</router-link>
        </h1>
        <nav class="header__nav">
            <ul>
                <li>
                    <router-link to="/artist">Artist</router-link>
                </li>
                <li>
                    <router-link to="/actor">Actor</router-link>
                </li>
                <li>
                    <router-link to="/product">Product</router-link>
                </li>
                <li>
                    <router-link to="/review">Review</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name:"Header"
    }
</script>

<style lang="scss" scoped>
    #header {
        text-align:center;
        padding:20px; 
        background:#ddd;
        .header__logo { padding:20px }
        .header__nav { 
            ul { display:flex; justify-content:center;
                li { margin:10px 100px; font-size:20px;
                    a { transition:all 0.5s;
                        &:hover { color:#f00 }
                    }
                }
            }
        }
    }
</style>