<template>
    <div id="wave">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
</template>

<script>

</script>

<style lang='scss' scoped>
div#wave {
	position:relative;
	text-align:center;

	.dot {
		display:inline-block;
		width:8px;
		height:8px;
		border-radius:50%;
		margin-right:3px;
		background:#7A2BCF;
		animation: wave 1.3s linear infinite;

		&:nth-child(2) {
			animation-delay: -1.1s;
		}

		&:nth-child(3) {
			animation-delay: -0.9s;
		}
	}
}

@keyframes wave {
	0%, 60%, 100% {
		transform: initial;
	}

	30% {
		transform: translateY(-15px);
	}
}
</style>