<template>
    <nav class="navbar">
        <div class="logo">MySite</div>
        <button class="menu-toggle" @click="toggleMenu">
            <span v-if="!menuOpen">☰</span>
            <span v-else>✖</span>
        </button>
        <ul :class="{ 'menu-open': menuOpen }">
            <li><router-link to="/" active-class="active-link">Home</router-link></li>
            <li><router-link to="/contact" active-class="active-link">Contact</router-link></li>
            <li><router-link to="/services" active-class="active-link">Services</router-link></li>
            <li><router-link to="/about" active-class="active-link">About</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar",
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            if (window.innerWidth <= 768) { // 只在手機版啟用
                this.menuOpen = !this.menuOpen;
            }
        },
    },
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
    position: relative;
    /* 確保選單相對導航欄定位 */
    z-index: 1000;
}

.navbar .logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar ul {
    list-style: none;
    display: none;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    /* 確保選單定位於導航欄內 */
    top: 60px;
    /* 根據導航欄高度調整 */
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #444;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* 添加陰影效果 */
}

.navbar ul.menu-open {
    display: flex;
    /* 顯示選單 */
}

.navbar li a {
    text-decoration: none;
    color: white;
}

.navbar li a.active {
    font-weight: bold;
    color: yellow;
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    position: relative;
    z-index: 1100;
}

@media (min-width: 769px) {
    .navbar ul {
        display: flex;
        flex-direction: row;
        position: static;
        background-color: transparent;
        box-shadow: none;
        padding: 0;
    }

    .menu-toggle {
        display: none;
    }
}

@media (max-width: 768px) {
    .navbar ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background-color: #444;
        padding: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    .navbar ul.menu-open {
        display: flex;
    }

    .menu-toggle {
        display: block;
    }
}
</style>
