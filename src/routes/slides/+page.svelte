<script lang="ts">
	import { onMount } from 'svelte';
	const nextSlide = () => {
		const slideNum = Math.round(window.scrollY / window.innerHeight);
		console.log(slideNum);
		window.scrollTo({
			top: (slideNum + 1) * window.innerHeight
		});
	};
	const prevSlide = () => {
		const slideNum = Math.round(window.scrollY / window.innerHeight);
		console.log(slideNum);
		window.scrollTo({ top: (slideNum - 1) * window.innerHeight });
	};
	const onKeyUp = (e: KeyboardEvent) => {
		if (e.key === 'ArrowRight') {
			nextSlide();
		}
		if (e.key === 'ArrowLeft') {
			prevSlide();
		}
	};
	//import logo from '$lib/logo.png';
	let codepenHeight = 800;
	onMount(() => {
		codepenHeight = window.innerHeight - 100;
		const frameDiv = document.getElementById('frameframe');
		if (frameDiv) {
			frameDiv.scrollTop = 34000;
		}
	});
</script>

<div
	class="bg-gray-800 w-full h-full flex flex-col text-gray-300
overflow-x-hidden"
>
	<section class="h-screen flex items-center justify-center border-green-500">
		<h1 class="pb-4 mt-[-20%]">Web Colors</h1>
	</section>

	<section
		class="h-screen flex flex-col gap-4 items-center justify-center
border-blue-500"
	>
		<h1>What you'll Learn</h1>
		<ul>
			<li>Why colors matter</li>
			<li>A little color history</li>
			<li>What's in the NEW Colors 4 spec!</li>
		</ul>
	</section>

	<section class="h-screen flex items-center justify-center border-red-500">
		<h1 class="pb-4 mt-[-20%]">Why?</h1>
	</section>

	<section class="h-screen flex items-center justify-center border-blue-500">
		<h1 class="pb-4 mt-[-20%]">CSS hasn't kept up with screens 😭</h1>
	</section>

	<section class="h-screen flex items-center justify-center border-cyan-500">
		<h1 class="pb-4 mt-[-20%]">Chrome 111 supports CSS Color 4!!!</h1>
	</section>

	<section class="h-screen flex items-center justify-center border-indigo-500">
		<h1 class="pb-4 mt-[-20%]">A <small class="text-sm">little</small> color history</h1>
	</section>

	<section class="border-amber-500">
		<h1>sRGB ("standard" rgb)</h1>
		<article class="flex gap-8">
			<img class="w-1/2" src="most-popular-color-formats.avif" alt="most popular color formats" />
			<div class="w-1/2 flex flex-col gap-4 self-start">
				<p>sRGB is a color <em>Gamut</em> Introduced Nov. 5, 1996</p>
				<p>These are the <em>Spaces</em> that ALL use the sRGB <em>Gamut</em></p>
				<ul>
					<li>Only shows 30% of HVS (human visible system) <em>Gamut</em></li>
					<li>RGB <code>rgba(20, 255, 80, 0.2)</code></li>
					<li>Hex <code>#ffcc22</code></li>
					<li>HSL (hue, saturation, lightness) <code>hsl(89, 74%, 50%)</code></li>
					<li>HWB (hue, whiteness, blackness) <code>hwb(40 20% 10%)</code></li>
				</ul>
				<div />
			</div>
		</article>
	</section>

	<section class="border-lime-500">
		<h1>What is a <em>Gamut</em>?</h1>
		<article class="flex gap-8">
			<img class="w-1/2" src="chromaticity.png" alt="mixing" />

			<ul>
				<li>How many millions of colors of the HVS (human visible) does it use?</li>

				<li>sRGB: All CSS (until now)</li>
				<li>
					HVS (Human Visible Standard) (all colors theoretically possible for humans to discern)
				</li>
				<li>... most birds can also see UV light</li>
				<li>... octopuses can differentiate polarized light</li>
				<li>
					... mantis shrimp have compound eyes with 16 types of photo receptors! They can see all of
					the above AND wide range UV light AND circularly polarized light AND each eye can
					independently move and determine depth
				</li>
			</ul>
		</article>
	</section>

	<section class="border-sky-500">
		<h1>What is a <em>Color Space</em>?</h1>
		<article class="flex gap-8">
			<img class="w-1/2" src="color-space.png" alt="mixing" />
			<div>
				<p>A <em>Color Space</em> is HOW you move through the <em>Gamut</em></p>
				<ul>
					<li><em>Gamut</em> is the range of colors</li>
					<li>
						<em>Space</em> how we specify a single color, and how we interpolate from one color to the
						next
					</li>
				</ul>
			</div>
		</article>
	</section>

	<section class="h-screen flex items-center justify-center border-green-500">
		<h1 class="pb-4 mt-[-20%]">So What's the Problem?</h1>
	</section>

	<section class="border-purple-500">
		<h1>Banding</h1>
		<article class="flex gap-8">
			<img class="w-1/2" src="banding.png" alt="most popular color formats" />
			<div class="w-1/2 flex flex-col gap-4 self-start" />
		</article>
	</section>

	<section class="border-rose-500">
		<h1>Mixing</h1>
		<article class="flex gap-8">
			<img class="w-1/2" src="mixing.png" alt="mixing" />
		</article>
	</section>

	<section class="border-blue-500">
		<h1>Lightness vs Luminance</h1>
		<article class="flex gap-8">
			<img class="w-3/5" src="lightness.png" alt="most popular color formats" />
		</article>
	</section>

	<section class="border-teal-500">
		<h1>Gradient "dead" Zone</h1>
		<article class="flex gap-8 w-screen">
			<div class="w-1/2">
				<img class="object-contain" src="dead-zone1.png" alt="dead-zone" />
				<img class="object-contain" src="dead-zone2.png" alt="dead-zone2" />
			</div>
			<img class="w-1/2 object-contain" src="dead-zone3.png" alt="dead-zone3" />
		</article>
	</section>

	<section class="border-red-500 justify-center align-middle items-center">
		<div id="frameframe" class="w-screen h-screen overflow-y-scroll">
			<iframe
				class="colorsIframe"
				height="10000%"
				width="90%"
				src="https://ciechanow.ski/color-spaces/#:~:text=you%20can%20drag%20the%20slider%20to%20see%20how%20the%20extent%20of%20the%20chromaticity%20triangle%20corresponds%20to%20the%20representable%20colors."
				title="css color 4"
			/>
		</div>
	</section>

	<section class="h-screen flex items-center justify-center border-green-500">
		<h1 class="pb-4 mt-[-20%]">Let's Solve ALL the Issues! 🧹</h1>
	</section>

	<section class="border-yellow-500">
		<h1>
			<a class="underline text-blue-100" href="https://www.w3.org/TR/css-color-4/"
				>CSS Color 4 Spec</a
			>
		</h1>
		<article class="flex gap-8">
			<iframe
				height="500vh"
				width="50%"
				src="https://www.w3.org/TR/css-color-4/"
				title="css color 4"
			/>
			<div class="w-1/2 flex flex-col gap-4 self-start">
				<ul>
					<li>Written by Lea Verou and Chris Liley 💖💖💖</li>
				</ul>
				<div />
			</div>
		</article>
	</section>

	<section class="border-red-500">
		<h1>✨4 NEW <em>Gamuts</em>✨</h1>
		<article class="flex gap-8">
			<img class="w-1/2" src="gamuts.png" alt="mixing" />
			<div class="flex flex-col gap-8">
				<table class="">
					<tr>
						<th class="text-left">Gamut</th>
						<th class="text-left">Volume (million lab units)</th>
					</tr>
					<tr><td>sRGB</td><td>0.820</td></tr>
					<tr><td>display-p3</td><td>1.233</td></tr>
					<tr><td>a98-rgb</td><td>1.310</td></tr>
					<tr><td>prophoto-rgb</td><td>2.896</td></tr>
					<tr><td>rec2020</td><td>2.042</td></tr>
				</table>
				<p>ProPhoto has almost 3x more colors than RGB!</p>
			</div>
		</article>
	</section>

	<section class="border-indigo-500">
		<h1>✨12 NEW <em>Spaces</em>✨</h1>
		<article class="flex gap-8">
			<ul>
				<li>sRGB Linear</li>
				<li>LCH</li>
				<li>okLHC</li>
				<li>LAB</li>
				<li>okLAB</li>
				<li>Display p3</li>
				<li>Rec2020</li>
				<li>a98 rgb</li>
				<li>ProPhoto rgb</li>
				<li>XYZ</li>
				<li>XYZ d50</li>
				<li>XYZ d65</li>
			</ul>
		</article>
	</section>

	<section>
		<h1>Browser Support</h1>
		<article>
			<ul>
				<li>Chrome 111 (live!)</li>
				<li>Firefox 113 (preview)</li>
				<li>Opera 97 (preview)</li>
				<li>Safari 15 (live!)</li>
			</ul>
			<p>Check in JS via <code>CSS.supports('background: oklch(0 0 0)')</code></p>
		</article>
	</section>

	<section>
		<p
			class="codepen"
			data-height={codepenHeight}
			data-theme-id="dark"
			data-default-tab="result"
			data-slug-hash="zdgXJj"
			data-user="meodai"
			style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
		>
			<span
				>See the Pen <a href="https://codepen.io/meodai/pen/zdgXJj">
					Visual representation of color names in different color models</a
				>
				by David Aerne (<a href="https://codepen.io/meodai">@meodai</a>) on
				<a href="https://codepen.io">CodePen</a>.</span
			>
		</p>
		<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
	</section>

	<section>
		<p
			class="codepen"
			data-height={codepenHeight}
			data-theme-id="dark"
			data-default-tab="result"
			data-slug-hash="LYBNbzp"
			data-user="web-dot-dev"
			style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
		>
			<span
				>See the Pen <a href="https://codepen.io/web-dot-dev/pen/LYBNbzp">
					CSS Color Syntax Mega List</a
				>
				by web.dev (<a href="https://codepen.io/web-dot-dev">@web-dot-dev</a>) on
				<a href="https://codepen.io">CodePen</a>.</span
			>
		</p>
	</section>

	<section class="h-screen flex items-center justify-center border-green-500">
		<h1 class="pb-4 mt-[-20%]">How is this possible?</h1>
	</section>

	<section class="border-blue-500">
		<h1>From 32-bit to 16-bit 🫤</h1>
		<article class="flex gap-8 flex-col">
			<p>Before, each color was represented by a 32-bit integer (8 bits per rgba channel)</p>
			<p>Now each channel gets 16 bits (64 bits total)!! That's a lot of nibbles</p>
		</article>
	</section>

	<section class="h-screen flex items-center justify-center border-green-500">
		<h1 class="pb-4 mt-[-20%]">SILKY SMOOTH GRADIENTS!!</h1>
	</section>

	<section>
		<p
			class="codepen"
			data-height={codepenHeight}
			data-theme-id="dark"
			data-default-tab="result"
			data-slug-hash="yLqOgda"
			data-user="web-dot-dev"
			style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
		>
			<span
				>See the Pen <a href="https://codepen.io/web-dot-dev/pen/yLqOgda">
					Interactive color space interpolation results</a
				>
				by web.dev (<a href="https://codepen.io/web-dot-dev">@web-dot-dev</a>) on
				<a href="https://codepen.io">CodePen</a>.</span
			>
		</p>
	</section>

	<section class="border-blue-500">
		<h1>New Spaces Avoid the Dead Zone</h1>
		<article class="flex flex-wrap gap-8 w-screen">
			<img class="w-2/5 object-contain" src="dead-zone4.png" alt="dead-zone4" />
			<img class="w-2/5 object-contain" src="dead-zone5.png" alt="dead-zone5" />
		</article>
	</section>

	<section class="border-blue-500">
		<h1>CIE Spaces</h1>
		<article class="flex gap-8 flex-col">
			<ul>
				<li>
					<p>
						All of the CIE <em>Gamut</em> spaces are theoretically capable of prepresenting any color
						in the HVS (LCH, okLCH, LAB, okLAB)
					</p>
				</li>

				<li>
					<p>This means it's up to you to keep them in the <em>Gamut</em> of the display</p>
				</li>

				<li>
					<p>CSS has accelerated past screen tech! (and human tech)</p>
				</li>

				<li>
					<code>background: lch(58% 32 241deg);</code>
				</li>
				<li>
					<p>
						Cylindrical space L: lightness, C: chroma (roughly), H: 0-360deg angle of approach on
						the hue axis
					</p>
				</li>
				<li>
					<code>background: lab(58% 32 241deg);</code>
				</li>
				<li>
					<p>L: 0-100% lightness, A: -100-100% location on "a" axis, B: same for "b" axis</p>
				</li>
				<li>
					<p>
						the "ok" versions of these are the same but act on the polar coordinates of the axis
					</p>
				</li>
			</ul>
		</article>
	</section>

	<section class="h-screen flex items-center justify-center border-green-500">
		<h1 class="pb-4 mt-[-20%]">
			<a href="https://oklch.com/#70,0.1,85,100">A Modern Color picker 🎨🧑‍🎨</a>
		</h1>
	</section>

	<section class="border-blue-500">
		<h1>Always use OKLAB over LAB</h1>
		<article class="flex gap-8 flex-col">
			<ul>
				<li>Considered the "fix" to LAB</li>
				<li>Default space for animations and interpolations</li>
				<li>Perceptually linear lightness!</li>
				<li>No <a href="https://codepen.io/web-dot-dev/pen/JjBXEQL">hue shift</a> (unlike LAB)</li>
				<li>Perceptually consistent gradients!</li>
			</ul>
		</article>
	</section>

	<section class="border-blue-500">
		<h1>Always use Rec2020 over display-p3</h1>
		<article class="flex gap-8">
			<ul>
				<li>display-p3 has great support for HDR (apple) displays</li>
				<li>New CIE Rec2020 is the upgrade version of this</li>
			</ul>
		</article>
	</section>

	<section class="border-blue-500">
		<h1>ProPhoto is... weird</h1>
		<article class="flex gap-8">
			<ul>
				<li>Created by Kodak</li>
				<li>Ultra wide primary color space</li>
				<li>About 13% is <em>outside</em> HVS</li>
			</ul>
		</article>
	</section>

	<section class="border-blue-500">
		<h1>XYZ, XYZ-d50, XYZ-d65</h1>
		<article class="flex gap-8 flex-nowrap">
			<ul class="w-1/2">
				<li>Optimized for humans/machines - most human perceptable colors</li>
				<li>d50 and d65 refer to the white point</li>
				<li>White point is where "true white" exists in the space</li>
				<li>d65 is most common for displays (refers to 6500 kelvin)</li>
				<li>
					When converting colors, you want white point to match so the "warmness" is not changed
				</li>
			</ul>
			<div class="w-1/2">
				<p class="mb-4">
					White is measured in kelvin because old light bulbs with filaments had a direct connection
					between the heat used and the white value output
				</p>

				<img src="bulb.png" alt="most popular color formats" />
			</div>
		</article>
	</section>

	<section class="h-screen flex items-center justify-center border-green-500">
		<h1 class="pb-4 mt-[-20%]">✨NEW Tools✨</h1>
	</section>

	<section class="border-gray-500">
		<h1>color()</h1>
		<article class="flex gap-8 flex-col">
			<p>
				Translates rgb channels into any space that is compatable (anything but HSL, HWB, LCH,
				okLHC, or okLAB)
			</p>
			<code>background: color(display-p3 1 1 1); </code>
		</article>
	</section>

	<section class="border-fuchsia-500">
		<h1><a href="https://codepen.io/web-dot-dev/pen/eYjKMVV">color-mix()</a></h1>
		<article class="flex gap-8 flex-col">
			<p>Lets you specify which space to use to mix</p>
			<code>background: color-mix(in oklab, red, white); </code>
		</article>
	</section>

	<section class="border-blue-500">
		<h1><a href="https://www.w3.org/TR/css-color-5/#relative-colors">Relative Color Syntax</a></h1>
		<article class="flex gap-8 flex-col">
			<p>Translate colors between spaces</p>
			<p>This goes from any color to lch with half "lightness"</p>
			<code>background: lch(from var(--color) calc(l/2) c h); </code>
		</article>
	</section>

	<section class="h-screen flex items-center justify-center border-green-500">
		<h1 class="pb-4 mt-[-20%]">One more thing...</h1>
	</section>

	<section class="h-screen flex items-center justify-center border-green-500">
		<h1 class="pb-4 mt-[-20%]">CSS Color 5 Spec 🚀</h1>
	</section>

	<section class="border-purple-500">
		<h1>Color 5 Custom Spaces</h1>
		<article class="flex gap-8 flex-col">
			<p>Outlines file format <code>.icc</code> for providing your own custom color space!</p>
			<small>(someone please make a `th` color space 😂)</small>
		</article>
	</section>

	<section class="border-green-500">
		<h1>References</h1>
		<article class="flex gap-8">
			<ul>
				<li>
					<a href="https://raphlinus.github.io/color/2021/01/18/oklab-critique.html"
						>Play with oklab</a
					>
				</li>
				<li><a href="https://colorjs.io/docs/interpolation.html">Best Color JS Lib</a></li>
				<li><a href="https://svelte.dev/">These slides made with Svelte</a></li>
				<li>
					<a href="https://developer.chrome.com/articles/high-definition-css-color-guide/"
						>Comprehensive Color Guide</a
					>
				</li>
				<li><a href="https://bottosson.github.io/posts/oklab/">oklab spec</a></li>
			</ul>
		</article>
	</section>
</div>
<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>
</style>
