﻿const _localTranslating = {
	webpage_title: `P&D ${teamsCount}P Formation Maker`,
	addition_display: "Additional display",
	title_blank: "Input Formation Title",
	detail_blank: "Input Detail",
	sort_name:{
		sort_none: "Nope",
		sort_id: "Cards Id",
		sort_attrs : "Attribute",
		sort_evoRootId: "Cards Evolution Root",
		sort_evoRoot_Attrs : "Cards Evolution Root's Attribute",
		sort_rarity: "Rarity",
		sort_cost: "Cost",
		sort_skillLv1: "Maximum Skill Turn",
		sort_skillLvMax: "Minimum Skill Turn",
		sort_hpMax120: "Max HP",
		sort_atkMax120: "Max ATK",
		sort_rcvMax120: "Max RCV",
		sort_hpMax120_awoken: "Max HP (+Awoken)",
		sort_atkMax120_awoken: "Max ATK (+Awoken)",
		sort_rcvMax120_awoken: "Max RCV (+Awoken)",
		sort_abilityIndex_awoken: "Maximum Weighted Ability Index (+Awakening)",
	},
	force_reload_data: `Force refresh data`,
	skill_parse: {
		skill: {
			unknown: tp`Unkonwn skill type: ${'type'}`,
			active_turns: tp`${'actionSkill'}, for ${'turns'} turns`,
			random_skills: tp`Random Activates these skills:${'skills'}`,
			damage_enemy: tp`Inflicts ${'times'}${'damage'} ${'attr'} attack on ${'target'}${'totalDamage'}`,
			damage_enemy_times: tp`${'times'} `,
			damage_enemy_count: tp` (${'damage'} in total)`,
			//Inflicts a 50x attack to 1 enemy and recover 100% of the damage. Reduces unmatchable orb status by 9999 turns. 9999 turn awoken bind recovery.
			vampire: tp`${'damage_enemy'} and ${'icon'}recover ${'heal'} of the damage`,
			delay: tp`${'icon'}Delays enemies' next move`,
			mass_attack: tp`${'icon'}Mass attacks`,
			leader_change: tp`${'icon'}Switches ${'target'} with Leader Monster, use again to switch back`,
			no_skyfall: tp`${'icon'}No Skyfall Combos`,
			self_harm: tp`${'icon'}Reduces ${'stats'} by ${'value'}`,
			heal: tp`${'icon'}Recover ${'value'} ${'stats'}`,
			unbind: tp`Recovery ${'stats'} by ${'turns'} turns`,
			unbind_normal: tp`${'icon'}Bind`,
			unbind_awakenings: tp`${'icon'}Awoken bind`,
			unbind_matches: tp`${'icon'}Unmatchable orb`,
			bind_skill: tp`${'icon'}Unable to use skills`,
			defense_break: tp`${'icon'}Reduce enemy defense by ${'value'}`,
			poison: tp`${'icon'}Poisons ${'target'}, reduce ${'stats'} with ${'belong_to'} ${'value'} per turns`,
			time_extend: tp`${'icon'}Orb move time ${'value'}`,
			follow_attack: tp`${'icon'}Bonus attack equal to ${'belong_to'} ${'value'} when matching Orbs (Consider the ${'target'}'s defense)`,
			follow_attack_fixed: tp`inflicts ${'damage'} ${'attr'} damage`,
			auto_heal_buff: tp`${'icon'}Heal ${'value'} ${'stats'} every turn`,
			auto_heal: tp`${'icon'}Heal ${'stats'} by ${'belong_to'} ${'value'} after matching orbs`,
			ctw: tp`${'icon'}Move orbs freely for ${'value'}`,
			gravity: tp`${'icon'}Reduce ${'target'} ${'value'}`,
			resolve: tp`${'icon'}Survive a single hit when ${'stats'}≧${'min'}`,
			board_change: tp`Change all orbs to ${'orbs'}`,
			skill_boost: tp`Team's skills charge ${'icon'}${'turns_min'}${'turns_max'}`,
			skill_boost_range: tp`~${'turns'}`,
			add_combo: tp`Adds ${'value'} combos${'icon'}`,
			fixed_time: tp`[${'icon'}Fixed orb move time: ${'value'}]`,
			min_match_length: tp`[Only able to erase ≥${'matchable'} orbs]`, //matchable, unmatchable
			drop_refresh: tp`Replaces all orbs`,
			drum: tp`Plus a drumming sound is made when Orbs are moved`,
			auto_path: tp`Shows 3 combo path (Norm. Dungeon & 3 linked Orbs only)`,
			board7x6: tp`[${'icon'}7x6 board]`,
			counter_attack: tp`When attacked by an ${'target'}, ${'chance'}${'value'} ${'attr'} ${'icon'}counterattack`,	
			change_orbs: tp`Changes ${'from'} to ${'to'} orbs`,
			generate_orbs: tp`Creates ${'value'} ${'orbs'} orbs each at random ${'exclude'}`,
			fixed_orbs: tp`Changes the ${'position'} to ${'orbs'} orbs`,
			orb_drop_increase: tp`Increases the skyfall of ${'orbs'} to ${'value'}`,
			orb_drop_increase_flag: tp`${'orbs'} skyfall ${'chance'}${'flag'}`,
			orb_drop_increase_chance: tp`by ${'value'}`,
			attr_absorb: tp`${'icon'}Attribute absorption`,
			combo_absorb: tp`${'icon'}Combo absorption`,
			damage_absorb: tp`${'icon'}Damage absorption`,
			damage_void: tp`${'icon'}Damage void`,
			void_enemy_buff: tp`Voids enemies' ${'buff'}`,
			change_attribute: tp`${'target'} Att. changes to ${'attrs'}`,
			set_orb_state_enhanced: tp`${'orbs'} ${'icon'}enhanced (${'value'} per orb)`,
			set_orb_state_locked: tp`${'icon'}Locks ${'value'}${'orbs'}`,
			set_orb_state_unlocked: tp`${'icon'}Unlocks ${'orbs'}`,
			set_orb_state_bound: tp`${'orbs'} are unmatchable`,
			rate_multiply: tp`${'rate'} ${'value'} when entering as leader`,
			rate_multiply_drop: tp`${'icon'}Drop rate`,
			rate_multiply_coin: tp`${'icon'}Coins`,
			rate_multiply_exp: tp`${'icon'}Rank EXP`,
			reduce_damage: tp`${'condition'}${'icon'}Reduces ${'attrs'} damage taken by ${'value'}`,
			power_up: tp`${'condition'}${'targets'}${'value'}${'reduceDamage'}${'addCombo'}${'followAttack'}`,
			power_up_targets: tp`[${'attrs_types'}]'s `, //attrs, types, attrs_types
			henshin: tp`Transforms into ${'card'}`,
			void_poison: tp`Voids ${'poison'} damage`,
			skill_proviso: tp`The follow-up effect can only be activates ${'condition'}`,
			obstruct_opponent: tp`Apply obstruct skill effect to ${'target'}: ${'skills'}`,
			obstruct_opponent_after_me: tp`The opponent ranked lower than me`,
			obstruct_opponent_before_me: tp`The opponent ranked higher than me`,
			obstruct_opponent_designated_position: tp`No.${'positions'} ranked opponents`,
		},
		power: {
			unknown: tp`[ Unkonwn power up: ${'type'} ]`,
			scale_attributes: tp`When matching ${'min'} attr. of ${'orbs'} ${'stats'}${'bonus'}`,
			scale_attributes_bonus: tp`, ${'bonus'} per attr. additional, up to ${'stats_max'} for ${'max'} attr.`,
			scale_combos: tp`When ${'min'} combos ${'stats'}${'bonus'}`,
			scale_combos_bonus: tp`, ${'bonus'} per combos additional, up to ${'stats_max'} for ${'max'} combos`,
			scale_match_attrs: tp`When matching ${'min'} combos in [${'matches'}] ${'stats'}${'bonus'}`,
			scale_match_attrs_bonus: tp`, ${'bonus'} per matches additional，up to ${'stats_max'} for ${'max'} matches`,
			scale_match_length: tp`When matching ${'min'} of ${'orbs'} ${'in_once'}${'stats'}${'bonus'}`,
			scale_match_length_bonus: tp`, ${'bonus'} per orbs additional，up to ${'stats_max'} for ${'max'} orbs`,
			scale_remain_orbs: tp`When ≤ ${'max'} orbs remain on the board ${'stats'}${'bonus'}`,
			scale_remain_orbs_bonus: tp`, ${'bonus'} for each fewer orb, up to ${'stats_max'} for ${'min'} orbs`,
			scale_cross: tp`When matching each cross of 5 ${'orbs'} ${'stats'}`,
			scale_cross_single: tp`When matching a cross of 5 ${'orbs'} ${'stats'}`,
			scale_state_kind_count: tp`${'stats'} for each [${'awakenings'}${'attrs'}${'types'}] in team`,
		},
		cond: {
			unknown: tp`[ Unknown condition ]`,
			hp_equal: tp`When ${'hp'} == ${'min'} `,
			hp_less_or_equal: tp`When ${'hp'} ≤ ${'max'} `,
			hp_greater_or_equal: tp`When ${'hp'} ≥ ${'min'} `,
			hp_belong_to_range: tp`When ${'hp'} ∈ [${'min'},${'max'}] `,
			use_skill: tp`When skills used `,
			multi_player: tp`When in Multiplayer Mode `,
			remain_orbs: tp`When ≤ ${'value'} Orbs on the board `,
			exact_combo: tp`When exactly ${'value'} combos `,
			exact_match_length: tp`When matching exactly ${'value'}${'orbs'} `,
			exact_match_enhanced: tp` orbs including enhanced`,

			compo_type_card: tp`When ${'ids'} are all on team`,
			compo_type_series: tp`When all subs from ${'ids'} collab (Needs at least 1 sub) `,
			compo_type_evolution: tp`When all monsters in team are ${'ids'} `,

			L_shape: tp`When matching an L shape of 5 ${'orbs'} `,
			heal: tp`When healing at least ${'heal'} ${'stats'} with ${'orbs'} `,
		},
		position: {
			top: tp`${'pos'} of top rows`,
			bottom: tp`${'pos'} of bottom rows`,
			left: tp`${'pos'} of left columns`,
			right: tp`${'pos'} of right columns`,
			shape: tp`specified location`,
		},
		value: {
			unknown: tp`[ Unknown value: ${'type'}]`, //type
			const: tp`${'value'} ${'unit'}`,
			const_to: tp`to ${'value'}`,
			mul_percent: tp`${'value'}%`,
			mul_times: tp`×${'value'}`,
			mul_of_percent: tp`${'stats'}'s ${'value'}%`,
			mul_of_times: tp`${'stats'} ×${'value'}`,
			hp_scale: tp`when ${'hp'} == 100% is ${'min'} and ${'hp'} == 1 is ${'max'}`,
			random_atk: tp`${'atk'} ×${'min'}${'max'}`,
			prob: tp`${'value'} chance for `,
			x_awakenings: tp`count of ${'awakenings'} ×${'value'}`,
		},
		target: {
			unknown: tp`Unkown Target`,
			self: tp`card's`,
			team: tp`team`,
			team_last: tp`the lastest member`,
			team_leader: tp`leader`,
			enemy: tp`Enemy`,
			enemy_all: tp`all enemys`,
			enemy_one: tp`1 enemy`,
			enemy_attr: tp`${'attr'} enemy`,
		},
		stats: {
			unknown: tp`[ Unknown: ${'type'}]`, //type
			maxhp: tp`Max HP`,
			hp: tp`HP`,
			chp: tp`current HP`,
			atk: tp`ATK`,
			rcv: tp`RCV`,
			teamhp: tp`Team HP`,
			teamatk: tp`Team ${'attrs'} ATK`,
			teamrcv: tp`Team RCV`,
		},
		unit: {
			orbs: tp``,
			times: tp` times`,
			seconds: tp` seconds`,
			point: tp` point`,
			turns: tp` turns`,
		},
		word: {
			comma: tp`, `,
			slight_pause: tp`, `,
			range_hyphen: tp`~`,
			in_once: tp`in once `,
			evo_type_pixel: tp`Pixel Evo`,
			evo_type_reincarnation: tp`Reinc. or Super Reinc. Evo`,
			evo_type_unknow: tp`Unknown Evo: ${'type'}`,
			affix_attr: tp`${'cotent'} attr.`,
			affix_orb: tp`${'cotent'} orbs`,
			affix_type: tp`${'cotent'} types`,
			affix_awakening: tp`${'cotent'} awoken`,
			affix_exclude: tp`, exclude ${'cotent'}`,
		},
		attrs: {
			[0]: tp`${'icon'}Fire`,
			[1]: tp`${'icon'}Water`,
			[2]: tp`${'icon'}Wood`,
			[3]: tp`${'icon'}Light`,
			[4]: tp`${'icon'}Dark`,
			[5]: tp`${'icon'}Recover`,
			[6]: tp`${'icon'}Null`,
			all: tp`All`,
			self: tp`${'icon'}Self's Attr`,
			fixed: tp`${'icon'}Fixed`,
		},
		orbs: {
			[0]: tp`${'icon'}Fire`,
			[1]: tp`${'icon'}Water`,
			[2]: tp`${'icon'}Wood`,
			[3]: tp`${'icon'}Light`,
			[4]: tp`${'icon'}Dark`,
			[5]: tp`${'icon'}Heal`,
			[6]: tp`${'icon'}Jammer`,
			[7]: tp`${'icon'}Poison`,
			[8]: tp`${'icon'}Lethal Poison`,
			[9]: tp`${'icon'}Bomb`,
			enhanced: tp`${'icon'}Enhanced`,
			locked: tp`${'icon'}Locked`,
			nail: tp`${'icon'}Nail`,
			variation: tp`${'icon'}Roulette (transforms every ${'time'})`,
			_5color: tp`${'icon'}5 Att.`,
			_6color: tp`${'_5color'}+${'orb_rcv'}`,
			all: tp`All`,
			any: tp`Any ${'cotent'}`,
		},
		types: {
			[0]: tp`${'icon'}Evo Material`,
			[1]: tp`${'icon'}Balanced`,
			[2]: tp`${'icon'}Physical`,
			[3]: tp`${'icon'}Healer`,
			[4]: tp`${'icon'}Dragon`,
			[5]: tp`${'icon'}God`,
			[6]: tp`${'icon'}Attacker`,
			[7]: tp`${'icon'}Devil`,
			[8]: tp`${'icon'}Machine`,
			[9]: tp`${'icon'}Special Protection`,
			[12]: tp`${'icon'}Awaken`,
			[14]: tp`${'icon'}Enhance Material`,
			[15]: tp`${'icon'}Redeemable`,
		},
		awokens: {
			[0]: tp`${'icon'}Unknown awoken`,
			[1]: tp`${'icon'}Enhanced HP`,
			[2]: tp`${'icon'}Enhanced Attack`,
			[3]: tp`${'icon'}Enhanced Heal`,
			[4]: tp`${'icon'}Reduce Fire Damage`,
			[5]: tp`${'icon'}Reduce Water Damage`,
			[6]: tp`${'icon'}Reduce Wood Damage`,
			[7]: tp`${'icon'}Reduce Light Damage`,
			[8]: tp`${'icon'}Reduce Dark Damage`,
			[9]: tp`${'icon'}Auto-Heal`,
			[10]: tp`${'icon'}Resistance-Bind`,
			[11]: tp`${'icon'}Resistance-Blind`,
			[12]: tp`${'icon'}Resistance-Jammers`,
			[13]: tp`${'icon'}Resistance-Poison`,
			[14]: tp`${'icon'}Enhanced Fire Orbs`,
			[15]: tp`${'icon'}Enhanced Water Orbs`,
			[16]: tp`${'icon'}Enhanced Wood Orbs`,
			[17]: tp`${'icon'}Enhanced Water Orbs`,
			[18]: tp`${'icon'}Enhanced Dark Orbs`,
			[19]: tp`${'icon'}Extend Time`,
			[20]: tp`${'icon'}Recover Bind`,
			[21]: tp`${'icon'}Skill Boost`,
			[22]: tp`${'icon'}Enhanced Fire Rows`,
			[23]: tp`${'icon'}Enhanced Water Rows`,
			[24]: tp`${'icon'}Enhanced Wood Rows`,
			[25]: tp`${'icon'}Enhanced Water Rows`,
			[26]: tp`${'icon'}Enhanced Dark Rows`,
			[27]: tp`${'icon'}Two-Pronged Attack`,
			[28]: tp`${'icon'}Resistance-Skill Bind`,
			[29]: tp`${'icon'}Enhanced Heal Orbs`,
			[30]: tp`${'icon'}Multi Boost`,
			[31]: tp`${'icon'}Dragon Killer`,
			[32]: tp`${'icon'}God Killer`,
			[33]: tp`${'icon'}Devil Killer`,
			[34]: tp`${'icon'}Machine Killer`,
			[35]: tp`${'icon'}Balanced Killer`,
			[36]: tp`${'icon'}Attacker Killer`,
			[37]: tp`${'icon'}Physical Killer`,
			[38]: tp`${'icon'}Healer Killer`,
			[39]: tp`${'icon'}Evo Killer`,
			[40]: tp`${'icon'}Awaken Killer`,
			[41]: tp`${'icon'}Enhance Killer`,
			[42]: tp`${'icon'}Redeemable Killer`,
			[43]: tp`${'icon'}Enhanced Combos`,
			[44]: tp`${'icon'}Guard Break`,
			[45]: tp`${'icon'}Bonus Attack`,
			[46]: tp`${'icon'}Enhanced Team HP `,
			[47]: tp`${'icon'}Enhanced Team RCV`,
			[48]: tp`${'icon'}Damage Void Piercer`,
			[49]: tp`${'icon'}Awoken Assist`,
			[50]: tp`${'icon'}Super Bonus Attack`,
			[51]: tp`${'icon'}Skill Charge`,
			[52]: tp`${'icon'}Resistance-Bind+`,
			[53]: tp`${'icon'}Extend Time+`,
			[54]: tp`${'icon'}Resistance-Clouds`,
			[55]: tp`${'icon'}Resistance-Immobility`,
			[56]: tp`${'icon'}Skill Boost+`,
			[57]: tp`${'icon'}50% or more HP Enhanced`,
			[58]: tp`${'icon'}50% or less HP Enhanced`,
			[59]: tp`${'icon'}L Damage Reduction`,
			[60]: tp`${'icon'}L Increased Attack`,
			[61]: tp`${'icon'}Super Enhanced Combos`,
			[62]: tp`${'icon'}Combo Orbs`,
			[63]: tp`${'icon'}Skill Voice`,
			[64]: tp`${'icon'}Dungeon Bonus`,
			[65]: tp`${'icon'}Reduced HP`,
			[66]: tp`${'icon'}Reduced Attack`,
			[67]: tp`${'icon'}Reduced RCV`,
			[68]: tp`${'icon'}Resistance-Blind+`,
			[69]: tp`${'icon'}Resistance-Jammers+`,
			[70]: tp`${'icon'}Resistance-Poison+`,
			[71]: tp`${'icon'}Blessing of Jammers`,
			[72]: tp`${'icon'}Blessing of Poison Orbs`,
			[73]: tp`${'icon'}Enhanced Fire Combos`,
			[74]: tp`${'icon'}Enhanced Water Combos`,
			[75]: tp`${'icon'}Enhanced Wood Combos`,
			[76]: tp`${'icon'}Enhanced Light Combos`,
			[77]: tp`${'icon'}Enhanced Dark Combos`,
			[78]: tp`${'icon'}CrossBoost`,
			[79]: tp`${'icon'}Enhanced 3 colors`,
			[80]: tp`${'icon'}Enhanced 4 colors`,
			[81]: tp`${'icon'}Enhanced 5 colors`,
		}
	},
}
deepMerge(localTranslating, _localTranslating);
localisation(localTranslating);