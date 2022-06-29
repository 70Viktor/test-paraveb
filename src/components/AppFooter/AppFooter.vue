<template>
    <footer class="footer__wrap">
        <div class="container">
            <ul class="footer__links">
                <li class="footer__links-logo"><a href="#"><img src="@/assets/logo-footer.svg" alt=""></a></li>
                <li class="footer__links-item"><a href="#">Готовые решения</a></li>
                <li class="footer__links-item"><a href="#">О нас</a></li>
                <li class="footer__links-item"><a href="#">Блог</a></li>
                <li class="footer__links-item"><a href="#">Контакты</a></li>
            </ul>
            <ul class="footer__social">
                <li class="footer__social-copy"><small>&copy; ООО «Лого», 2008—2022</small></li>
                <li class="footer__social-item"><a href="#"><img src="@/assets/icon-social-1.svg" alt=""></a></li>
                <li class="footer__social-item"><a href="#"><img src="@/assets/icon-social-2.svg" alt=""></a></li>
                <li class="footer__social-item"><a href="#"><img src="@/assets/icon-social-3.svg" alt=""></a></li>
                <li class="footer__social-item"><a href="#"><img src="@/assets/icon-social-4.svg" alt=""></a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>