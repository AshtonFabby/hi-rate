<script>
	import 'iconify-icon';
	import Icon from '@iconify/svelte';
	let buyerName = 'Buyer';
	let amount = '$35.00';
</script>

<h1 class="text-3xl mb-10">Want To Buy</h1>

<div class="card mb-3 rounded-lg bg-white">
	<div class="flex justify-between">
		<div class="flex items-center p-4">
			<div class="flex-shrink-0 bg-orange-200 p-2 rounded-full">
				<Icon icon="majesticons:money-line" />
			</div>
			<div class="ml-4">
				<h5 class="text-lg font-medium">{buyerName}</h5>
				<p class="text-gray-500">Ecocash</p>
			</div>
		</div>
		<div class="text-red-400 font-semibold items-center pt-8 px-4 text-right">{amount}</div>
	</div>
</div>
<div class="card mb-3 rounded-lg bg-white">
	<div class="flex justify-between">
		<div class="flex items-center p-4">
			<div class="flex-shrink-0 bg-orange-200 p-2 rounded-full">
				<Icon icon="majesticons:money-line" />
			</div>
			<div class="ml-4">
				<h5 class="text-lg font-medium">{buyerName}</h5>
				<p class="text-gray-500">Ecocash</p>
			</div>
		</div>
		<div class="text-red-400 font-semibold items-center pt-8 px-4 text-right">{amount}</div>
	</div>
</div>
<div class="card mb-3 rounded-lg bg-white">
	<div class="flex justify-between">
		<div class="flex items-center p-4">
			<div class="flex-shrink-0 bg-orange-200 p-2 rounded-full">
				<Icon icon="majesticons:money-line" />
			</div>
			<div class="ml-4">
				<h5 class="text-lg font-medium">{buyerName}</h5>
				<p class="text-gray-500">Ecocash</p>
			</div>
		</div>
		<div class="text-red-400 font-semibold items-center pt-8 px-4 text-right">{amount}</div>
	</div>
</div>
<div class="card mb-3 rounded-lg bg-white">
	<div class="flex justify-between">
		<div class="flex items-center p-4">
			<div class="flex-shrink-0 bg-orange-200 p-2 rounded-full">
				<Icon icon="majesticons:money-line" />
			</div>
			<div class="ml-4">
				<h5 class="text-lg font-medium">{buyerName}</h5>
				<p class="text-gray-500">Ecocash</p>
			</div>
		</div>
		<div class="text-red-400 font-semibold items-center pt-8 px-4 text-right">{amount}</div>
	</div>
</div>
