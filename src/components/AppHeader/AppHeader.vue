<template>
    <header class="header">
        <div class="container">
            <nav class="header__nav nav">
                <img src="@/assets/logo.svg" alt="" class="nav__logo">
                <ul class="nav__links">
                    <li class="nav__links-item link"><a href="tel:88000000000">8 800 000 00 00</a></li>
                    <li class="nav__links-item link"><a href="mailto:sales@logo.ru">sales@logo.ru</a></li>
                    <li class="nav__links-item phone"><a href="tel:88000000000"><img src="@/assets/phone.svg" alt=""></a></li>
                    <li class="nav__links-item mail"><a href="mailto:sales@logo.ru"><img src="@/assets/mail.svg" alt=""></a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>