<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { cache } from './cache';
	import { getPokemon } from './pokemon';

	type PokemonCardProps = {
		class?: string;
		name: string;
	};

	let { name, class: className }: PokemonCardProps = $props();

	const cachedPokemon = cache(getPokemon);

	function getCachedPokemon(name: string) {
		return cachedPokemon(name);
	}
</script>

{#await getCachedPokemon(name) then pokemon}
	{#if pokemon}
		<Card.Root class={className}>
			<Card.Content class="flex w-full flex-col items-center p-2">
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
					alt={pokemon.name}
				/>
				<div class="text-center font-medium">{pokemon.name}</div>
				<div class="flex w-full items-center justify-center gap-2">
					{#each pokemon.types as type}
						{@const typeId = type.type.url.match(/\/(\d+)\/?$/)?.[1]}
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-and-shining-pearl/${typeId}.png`}
							alt={`${pokemon.name} type`}
							class="h-4"
						/>
					{/each}
				</div>
			</Card.Content>
		</Card.Root>
	{/if}
{/await}
