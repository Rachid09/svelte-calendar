import './Popover.css.proxy.js';
/* src/Components/Popover.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	binding_callbacks,
	create_slot,
	detach,
	element,
	globals,
	init,
	insert,
	listen,
	run_all,
	safe_not_equal,
	set_style,
	space,
	toggle_class,
	transition_in,
	transition_out,
	update_slot
} from "../../web_modules/svelte/internal.js";

const { window: window_1 } = globals;
import { onMount, createEventDispatcher, tick } from "../../web_modules/svelte.js";
const get_contents_slot_changes = dirty => ({});
const get_contents_slot_context = ctx => ({});
const get_trigger_slot_changes = dirty => ({});
const get_trigger_slot_context = ctx => ({});

function create_fragment(ctx) {
	let div4;
	let div0;
	let t;
	let div3;
	let div2;
	let div1;
	let current;
	let mounted;
	let dispose;
	add_render_callback(/*onwindowresize*/ ctx[14]);
	const trigger_slot_template = /*#slots*/ ctx[13].trigger;
	const trigger_slot = create_slot(trigger_slot_template, ctx, /*$$scope*/ ctx[12], get_trigger_slot_context);
	const contents_slot_template = /*#slots*/ ctx[13].contents;
	const contents_slot = create_slot(contents_slot_template, ctx, /*$$scope*/ ctx[12], get_contents_slot_context);

	return {
		c() {
			div4 = element("div");
			div0 = element("div");
			if (trigger_slot) trigger_slot.c();
			t = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			if (contents_slot) contents_slot.c();
			attr(div0, "class", "trigger");
			attr(div1, "class", "contents-inner svelte-mc1z8c");
			attr(div2, "class", "contents svelte-mc1z8c");
			attr(div3, "class", "contents-wrapper svelte-mc1z8c");
			set_style(div3, "transform", "translate(-50%,-50%) translate(" + /*translateX*/ ctx[8] + "px, " + /*translateY*/ ctx[7] + "px)");
			toggle_class(div3, "visible", /*open*/ ctx[0]);
			toggle_class(div3, "shrink", /*shrink*/ ctx[1]);
			attr(div4, "class", "sc-popover svelte-mc1z8c");
		},
		m(target, anchor) {
			insert(target, div4, anchor);
			append(div4, div0);

			if (trigger_slot) {
				trigger_slot.m(div0, null);
			}

			/*div0_binding*/ ctx[15](div0);
			append(div4, t);
			append(div4, div3);
			append(div3, div2);
			append(div2, div1);

			if (contents_slot) {
				contents_slot.m(div1, null);
			}

			/*div2_binding*/ ctx[16](div2);
			/*div3_binding*/ ctx[17](div3);
			/*div4_binding*/ ctx[18](div4);
			current = true;

			if (!mounted) {
				dispose = [
					listen(window_1, "resize", /*onwindowresize*/ ctx[14]),
					listen(div0, "click", /*doOpen*/ ctx[9])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (trigger_slot) {
				if (trigger_slot.p && dirty & /*$$scope*/ 4096) {
					update_slot(trigger_slot, trigger_slot_template, ctx, /*$$scope*/ ctx[12], dirty, get_trigger_slot_changes, get_trigger_slot_context);
				}
			}

			if (contents_slot) {
				if (contents_slot.p && dirty & /*$$scope*/ 4096) {
					update_slot(contents_slot, contents_slot_template, ctx, /*$$scope*/ ctx[12], dirty, get_contents_slot_changes, get_contents_slot_context);
				}
			}

			if (!current || dirty & /*translateX, translateY*/ 384) {
				set_style(div3, "transform", "translate(-50%,-50%) translate(" + /*translateX*/ ctx[8] + "px, " + /*translateY*/ ctx[7] + "px)");
			}

			if (dirty & /*open*/ 1) {
				toggle_class(div3, "visible", /*open*/ ctx[0]);
			}

			if (dirty & /*shrink*/ 2) {
				toggle_class(div3, "shrink", /*shrink*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(trigger_slot, local);
			transition_in(contents_slot, local);
			current = true;
		},
		o(local) {
			transition_out(trigger_slot, local);
			transition_out(contents_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div4);
			if (trigger_slot) trigger_slot.d(detaching);
			/*div0_binding*/ ctx[15](null);
			if (contents_slot) contents_slot.d(detaching);
			/*div2_binding*/ ctx[16](null);
			/*div3_binding*/ ctx[17](null);
			/*div4_binding*/ ctx[18](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	const dispatch = createEventDispatcher();

	let once = (el, evt, cb) => {
		function handler() {
			cb.apply(this, arguments);
			el.removeEventListener(evt, handler);
		}

		el.addEventListener(evt, handler);
	};

	let popover;
	let w;
	let triggerContainer;
	let contentsAnimated;
	let contentsWrapper;
	let translateY = 0;
	let translateX = 0;
	let { open = false } = $$props;
	let { shrink } = $$props;
	let { trigger } = $$props;

	const close = () => {
		$$invalidate(1, shrink = true);

		once(contentsAnimated, "animationend", () => {
			$$invalidate(1, shrink = false);
			$$invalidate(0, open = false);
			dispatch("closed");
		});
	};

	function checkForFocusLoss(evt) {
		if (!open) return;
		let el = evt.target;

		// eslint-disable-next-line
		do {
			if (el === popover) return;
		} while (el = el.parentNode); // eslint-disable-next-line

		close();
	}

	onMount(() => {
		document.addEventListener("click", checkForFocusLoss);
		if (!trigger) return;
		triggerContainer.appendChild(trigger.parentNode.removeChild(trigger));

		// eslint-disable-next-line
		return () => {
			document.removeEventListener("click", checkForFocusLoss);
		};
	});

	const getDistanceToEdges = async () => {
		if (!open) {
			$$invalidate(0, open = true);
		}

		await tick();
		let rect = contentsWrapper.getBoundingClientRect();

		return {
			top: rect.top + -1 * translateY,
			bottom: window.innerHeight - rect.bottom + translateY,
			left: rect.left + -1 * translateX,
			right: document.body.clientWidth - rect.right + translateX
		};
	};

	const getTranslate = async () => {
		let dist = await getDistanceToEdges();
		let x;
		let y;

		if (w < 480) {
			y = dist.bottom;
		} else if (dist.top < 0) {
			y = Math.abs(dist.top);
		} else if (dist.bottom < 0) {
			y = dist.bottom;
		} else {
			y = 0;
		}

		if (dist.left < 0) {
			x = Math.abs(dist.left);
		} else if (dist.right < 0) {
			x = dist.right;
		} else {
			x = 0;
		}

		return { x, y };
	};

	const doOpen = async () => {
		const { x, y } = await getTranslate();
		$$invalidate(8, translateX = x);
		$$invalidate(7, translateY = y);
		$$invalidate(0, open = true);
		dispatch("opened");
	};

	function onwindowresize() {
		$$invalidate(3, w = window_1.innerWidth)
	}

	function div0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			triggerContainer = $$value;
			$$invalidate(4, triggerContainer);
		});
	}

	function div2_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			contentsAnimated = $$value;
			$$invalidate(5, contentsAnimated);
		});
	}

	function div3_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			contentsWrapper = $$value;
			$$invalidate(6, contentsWrapper);
		});
	}

	function div4_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			popover = $$value;
			$$invalidate(2, popover);
		});
	}

	$$self.$$set = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("shrink" in $$props) $$invalidate(1, shrink = $$props.shrink);
		if ("trigger" in $$props) $$invalidate(10, trigger = $$props.trigger);
		if ("$$scope" in $$props) $$invalidate(12, $$scope = $$props.$$scope);
	};

	return [
		open,
		shrink,
		popover,
		w,
		triggerContainer,
		contentsAnimated,
		contentsWrapper,
		translateY,
		translateX,
		doOpen,
		trigger,
		close,
		$$scope,
		slots,
		onwindowresize,
		div0_binding,
		div2_binding,
		div3_binding,
		div4_binding
	];
}

class Popover extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			open: 0,
			shrink: 1,
			trigger: 10,
			close: 11
		});
	}

	get close() {
		return this.$$.ctx[11];
	}
}

export default Popover;