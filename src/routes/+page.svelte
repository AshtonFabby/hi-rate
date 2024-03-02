<script>
    import Header from '$lib/header.svelte';
    import BigCard from '$lib/big_card.svelte';
    import SmallCard from '$lib/small_card.svelte';
    import BuySection from '$lib/buySection.svelte';
	import SellSection from '$lib/sellSection.svelte';

    let user = 'Fabby';
</script>

<Header />

<div class=" container px-20 mt-10">
<h1 class=" font-medium text-5xl mb-2">Hi, {user}</h1>
<p class=" bg-red ">Welcome to your dashboard</p>
<div class=" grid grid-cols-3 grid-rows-2 h-96 gap-3 mt-20">
    <BigCard />
    <SmallCard cardTitle="Buy"  />
    <SmallCard cardTitle="Sell" />
</div>
<div class="flex gap-3 mt-20">
	<div class=" w-1/2">
		<BuySection />
	</div>
	<div class=" w-1/2">
		<SellSection />
	</div>
</div>
</div>