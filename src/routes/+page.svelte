<script lang="ts">
	import PokemonCard from '$lib/blocks/pokemon-card/pokemon-card.svelte';
	import * as Card from '$lib/components/ui/card';
</script>

<h1>Welcome to SvelteKit</h1>

<Card.Root>
	<Card.Header>
		<Card.Title>Card Title</Card.Title>
		<Card.Description>Card Description</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>
			Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
		</p>
	</Card.Content>
</Card.Root>

<PokemonCard name="pikachu" />
