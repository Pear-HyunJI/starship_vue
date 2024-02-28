<template>
    <footer id="footer">
        <div class="footer__nav">
            <router-link to="/aboutus">회사소개</router-link>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="http://www.naver.com" target="_blank">사업자정보확인</a>
            <router-link to="/notice">공지사항</router-link>
        </div>
        <pre>

회사명 : (주)스타쉽엔터테인먼트 |대표 : 이훈희, 이진성
사업자등록번호 : 114-86-65214 | 통신판매업신고 : 제 2017-서울강남-00780호
주소 : 서울시 강남구 삼성로146길 4-5 스타쉽ENT (06070)
전화번호 : 070-5158-9176 |이메일 : starshipsquare@gmail.com
개인정보책임자 서승연 / starshipsquare@gmail.com
호스팅제공자 (주)코리아센터(메이크샵)
Copyright STARSHIP ENTERTAINMENT. All rights reserved.</pre>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #footer {
        background:#000; color:#fff;
        padding:50px; 
        .footer__nav {
            border-bottom:1px solid #fff; 
            padding-bottom:20px; 
            a { margin-right:50px }
        }
    }
</style>