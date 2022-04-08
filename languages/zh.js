﻿const _localTranslating = {
	webpage_title: `智龙迷城${teamsCount}人队伍图制作`,
	title_blank: "输入队伍标题",
	detail_blank: "输入说明",
	sort_name:{
		sort_none: "无",
		sort_id: "怪物ID",
		sort_attrs: "属性",
		sort_evoRootId: "进化树",
		sort_evoRoot_Attrs : "进化根怪物的属性",
		sort_rarity: "稀有度",
		sort_cost: "消耗",
		sort_mp: "MP",
		sort_skillLv1: "技能最大冷却时间",
		sort_skillLvMax: "技能最小冷却时间",
		sort_hpMax120: "最大 HP",
		sort_atkMax120: "最大攻击",
		sort_rcvMax120: "最大回复",
		sort_hpMax120_awoken: "最大 HP（+觉醒）",
		sort_atkMax120_awoken: "最大攻击（+觉醒）",
		sort_rcvMax120_awoken: "最大回复（+觉醒）",
		sort_abilityIndex_awoken: "最大加权能力指数（+觉醒）",
	},
	force_reload_data: "强制刷新数据",
	skill_parse: {
		skill: {
			unknown: tp`未知的技能类型：${'type'}`, //type
			active_turns: tp`${'turns'} 回合内，${'actionSkill'}`, //turns, actionSkill
			random_skills: tp`随机发动以下技能：${'skills'}`, //skills
			evolved_skills: tp`技能使用后会进化为下一阶段：${'skills'}`, //skills
			evolved_skills_loop: tp`${`icon`}使用后返回第一阶段`,
			damage_enemy: tp`对${'target'}造成${'damage'}的${'attr'}伤害${'times'}${'totalDamage'}`, //target, damage, attr
			damage_enemy_times: tp`×${'times'}`,
			damage_enemy_count: tp`(共${'damage'})`,
			vampire: tp`${'damage_enemy'}，并${'icon'}回复伤害值${'heal'}的HP`, //target, damage, attr
			delay: tp`延迟敌人的攻击${'icon'}`, //icon
			mass_attack: tp`所有攻击变为${'icon'}全体攻击`,
			leader_change: tp`${'icon'}将${'target'}换为队长，再次使用则换回来`,
			no_skyfall: tp`${'icon'}天降的宝珠不会消除`,
			self_harm: tp`${'icon'}${'stats'}减少${'value'}`,
			heal: tp`${'icon'}回复 ${'value'} 的 ${'stats'}`,
			unbind: tp`${'stats'}状态减少 ${'turns'} 回合`,
			unbind_normal: tp`${'icon'}封锁`,
			unbind_awakenings: tp`${'icon'}觉醒无效`,
			unbind_matches: tp`${'icon'}无法消除宝珠`,
			bind_skill: tp`${'icon'}自身无法使用技能`,
			defense_break: tp`${'icon'}敌方的防御力减少${'value'}`,
			poison: tp`${'icon'}使${'target'}中毒，每回合损失${'belong_to'} ${'value'} 的 ${'stats'}`,
			time_extend: tp`${'icon'}宝珠移动时间 ${'value'}`,
			follow_attack: tp`${'icon'}消除宝珠的回合，以${'belong_to'}${'value'}的伤害追打${'target'}（计算防御力）`,
			follow_attack_fixed: tp`追加${'damage'}的${'attr'}伤害`,
			auto_heal_buff: tp`行动结束后${'icon'}回复${'value'}的${'stats'}`,
			auto_heal: tp`${'icon'}消除宝珠的回合，回复${'belong_to'}${'value'}的${'stats'}`,
			ctw: tp`${'icon'}${'value'}内时间停止，可以任意移动宝珠`,
			gravity: tp`${'icon'}造成${'target'}${'value'}的伤害`,
			resolve: tp`${'icon'}如${'stats'}≧${'min'}，受到单一次致命攻击时，将会以1点 HP 生还`,
			board_change: tp`全画面的宝珠变为${'orbs'}`,
			skill_boost: tp`自身以外成员的技能冷却储备${'icon'}${'turns_min'}${'turns_max'}`,
			skill_boost_range: tp`~${'turns'}`,
			add_combo: tp`结算时连击数增加${'value'}${'icon'}`,
			fixed_time: tp`【${'icon'}操作时间固定${'value'}】`,
			min_match_length: tp`【限定≥${'matchable'}珠才能消除】`,
			drop_refresh: tp`全板刷新`,
			drum: tp`宝珠移动和消除的声音变成太鼓达人的音效`,
			auto_path: tp`显示3连击的转珠路径（只匹配3珠，并只适用于普通地下城）`,
			board7x6: tp`【${'icon'}7×6版面】`,
			counter_attack: tp`受到${'target'}攻击时，${'chance'}进行受到伤害${'value'}的${'attr'}${'icon'}反击`,	
			change_orbs: tp`${'from'}→${'to'}`,
			generate_orbs: tp`${'exclude'}生成${'orbs'}各${'value'}个`,
			fixed_orbs: tp`在${'position'}产生${'orbs'}`,
			orb_drop_increase: tp`${'orbs'}的掉落率提高到${'value'}`,
			orb_drop_increase_flag: tp`${'chance'}掉落${'flag'}${'orbs'}`,
			attr_absorb: tp`${'icon'}属性吸收`,
			combo_absorb: tp`${'icon'}连击吸收`,
			damage_absorb: tp`${'icon'}伤害吸收`,
			damage_void: tp`${'icon'}伤害无效`,
			void_enemy_buff: tp`敌人的 ${'buff'} 无效化`,
			change_attribute: tp`将${'target'}变为${'attrs'}`,
			set_orb_state_enhanced: tp`${'icon'}强化${'orbs'}（每颗宝珠效力增加${'value'}）`,
			set_orb_state_locked: tp`将${'orbs'}${'icon'}锁定${'value'}`,
			set_orb_state_unlocked: tp`${'icon'}解除${'orbs'}的锁定状态`,
			set_orb_state_bound: tp`无法消除${'orbs'}`,
			rate_multiply: tp`作为队长进入地下城时，${'rate'}变为${'value'}`,
			rate_multiply_drop: tp`${'icon'}怪物蛋掉落率`,
			rate_multiply_coin: tp`${'icon'}金币掉落率`,
			rate_multiply_exp: tp`${'icon'}等级经验倍率`,
			reduce_damage: tp`${'condition'}受到的${'attrs'}伤害${'chance'}${'icon'}减少${'value'}`,
			power_up: tp`${'condition'}${'targets'}${'target'}${'value'}${'reduceDamage'}${'addCombo'}${'followAttack'}`,
			power_up_targets: tp`${'attrs_types'}的 `,
			henshin: tp`变身为${'cards'}`,
			random_henshin: tp`随机变身为${'cards'}`,
			void_poison: tp`消除${'poison'}时不会受到毒伤害`,
			skill_proviso: tp`${'condition'}才能发动后续效果`,
			obstruct_opponent: tp`对${'target'}施加敌对技能效果：${'skills'}`,
			obstruct_opponent_after_me: tp`排名比自身低的对手`,
			obstruct_opponent_before_me: tp`排名比自身高的对手`,
			obstruct_opponent_designated_position: tp`第${'positions'}排位的对手`,
		},
		power: {
			unknown: tp`[ 未知能力提升: ${'type'} ]`,
			scale_attributes: tp`${'orbs'}中${'min'}种属性同时攻击时${'stats'}${'bonus'}`,
			scale_attributes_bonus: tp`，每多1种${'bonus'}，最大${'max'}种时${'stats_max'}`,
			scale_combos: tp`${'min'}连击以上时${'stats'}${'bonus'}`,
			scale_combos_bonus: tp`，每多1连击${'bonus'}，最大${'max'}连击时${'stats_max'}`,
			scale_match_attrs: tp`${'matches'}中${'min'}串匹配时${'stats'}${'bonus'}`,
			scale_match_attrs_bonus: tp`，每多1串${'bonus'}，最大${'max'}串时${'stats_max'}`,
			scale_match_length: tp`${'in_once'}相连消除${'min'}个${'orbs'}时${'stats'}${'bonus'}`,
			scale_match_length_bonus: tp`，每多1个${'bonus'}，最大${'max'}个时${'stats_max'}`,
			scale_remain_orbs: tp`剩余宝珠 ≤ ${'max'} 时${'stats'}${'bonus'}`,
			scale_remain_orbs_bonus: tp`，每少1个${'bonus'}，最少${'min'}个时${'stats_max'}`,
			scale_cross: tp`每以十字形式消除5个${'orbs'}1次时${'stats'}`,
			scale_cross_single: tp`以十字形式消除5个${'orbs'}时${'stats'}`,
			scale_state_kind_count: tp`以队伍中[${'awakenings'}${'attrs'}${'types'}]的数量提升，每个${'stats'}`,
		},
		cond: {
			unknown: tp`[ 未知条件 ]`,
			hp_equal: tp`${'hp'} == ${'min'} 时`,
			hp_less_or_equal: tp`${'hp'} ≤ ${'max'} 时`,
			hp_greater_or_equal: tp`${'hp'} ≥ ${'min'} 时`,
			hp_belong_to_range: tp`${'hp'} ∈ [${'min'},${'max'}] 时`,
			use_skill: tp`使用技能时`,
			multi_player: tp`协力时`,
			remain_orbs: tp`剩余宝珠 ≤ ${'value'} 时`,
			exact_combo: tp`刚好${'value'}连击时`,
			exact_match_length: tp`相连消除刚好${'value'}${'orbs'}时`,
			exact_match_enhanced: tp`并且其中包含至少一个强化宝珠`,
			exact_match_length_multiple: tp`每相连消除刚好${'value'}${'orbs'}1次时`,

			compo_type_card: tp`队伍中同时存在 ${'ids'} 时`,
			compo_type_series: tp`队员组成全为 ${'ids'} 合作时`,
			compo_type_evolution: tp`队员组成全为 ${'ids'} 进化时`,
			compo_type_rarity: tp`队伍的总★稀有度 ≤${'rarity'} 时`,

			stage_less_or_equal: tp`${'stage'} ≤ ${'max'} 时`, //地下城层数
			stage_greater_or_equal: tp`${'stage'} ≥ ${'min'} 时`,

			L_shape: tp`以L字形式消除5个${'orbs'}时`,
			heal: tp`以${'orbs'}回复${'heal'}${'stats'}时`,
		},
		position: {
			top: tp`上方第${'pos'}横行`,
			bottom: tp`下方第${'pos'}横行`,
			left: tp`左方第${'pos'}竖列`,
			right: tp`右方第${'pos'}竖列`,
			shape: tp`指定位置`,
		},
		value: {
			unknown: tp`[ 未知数值: ${'type'}]`, //type
			const: tp`${'value'}${'unit'}`,
			const_to: tp`到${'value'}`,
			mul_percent: tp`${'value'}%`,
			mul_times: tp`×${'value'}倍`,
			mul_of_percent: tp`${'stats'}的${'value'}%`,
			mul_of_times: tp`${'stats'}×${'value'}倍`,
			hp_scale: tp`${'hp'}为100%时${'min'}，${'hp'}为1时${'max'}`,
			random_atk: tp`${'atk'}×${'min'}${'max'}倍`,
			prob: tp`有${'value'}几率`,
			x_awakenings: tp`${'awakenings'}数量×${'value'}`,
		},
		target: {
			unknown: tp`未知目标`,
			self: tp`角色自身`,
			team: tp`队伍`,
			team_last: tp`队伍最后一位队员`,
			team_leader: tp`队长`,
			sub_members: tp`队员`,
			leader_self: tp`左边队长`,
			leader_helper: tp`右边队长`,
			enemy: tp`敌人`,
			enemy_all: tp`敌方全体`,
			enemy_one: tp`敌方1体`,
			enemy_attr: tp`${'attr'}敌人`,
		},
		stats: {
			unknown: tp`[ 未知状态: ${'type'}]`, //type
			maxhp: tp`最大HP`,
			hp: tp`HP`,
			chp: tp`当前HP`,
			atk: tp`攻击力`,
			rcv: tp`回复力`,
			teamhp: tp`队伍总HP`,
			teamatk: tp`队伍${'attrs'}总攻击力`,
			teamrcv: tp`队伍回复力`,
			cstage: tp`当前地下城层数`,
		},
		unit: {
			orbs: tp`个`,
			times: tp`次`,
			seconds: tp`秒`,
			point: tp`点`,
			turns: tp`回合`,
		},
		word: {
			comma: tp`，`, //逗号
			slight_pause: tp`、`, //顿号
			range_hyphen: tp`~`, //范围连字符
			in_once: tp`同时`,
			evo_type_pixel: tp`像素进化`,
			evo_type_reincarnation: tp`转生或超转生进化`,
			evo_type_unknow: tp`未知进化: ${'type'}`,
			affix_attr: tp`${'cotent'}属性`, //词缀-属性
			affix_orb: tp`${'cotent'}宝珠`, //词缀-宝珠
			affix_type: tp`${'cotent'}类型`, //词缀-类型
			affix_awakening: tp`${'cotent'}觉醒`, //词缀-觉醒
			affix_exclude: tp`${'cotent'}以外`, //词缀-属性
		},
		attrs: {
			[0]: tp`${'icon'}火`,
			[1]: tp`${'icon'}水`,
			[2]: tp`${'icon'}木`,
			[3]: tp`${'icon'}光`,
			[4]: tp`${'icon'}暗`,
			[5]: tp`${'icon'}回复力`,
			[6]: tp`${'icon'}空`,
			all: tp`所有`,
			self: tp`${'icon'}自身属性`,
			fixed: tp`${'icon'}无视防御固定`,
		},
		orbs: {
			[0]: tp`${'icon'}火`,
			[1]: tp`${'icon'}水`,
			[2]: tp`${'icon'}木`,
			[3]: tp`${'icon'}光`,
			[4]: tp`${'icon'}暗`,
			[5]: tp`${'icon'}回复`,
			[6]: tp`${'icon'}干扰`,
			[7]: tp`${'icon'}毒`,
			[8]: tp`${'icon'}剧毒`,
			[9]: tp`${'icon'}炸弹`,
			enhanced: tp`${'icon'}强化`,
			locked: tp`${'icon'}锁定`,
			nail: tp`${'icon'}钉子`,
			variation: tp`${'icon'}变换珠（每${'time'}变换）`,
			_5color: tp`${'icon'}5色`,
			_6color: tp`${'_5color'}+${'orb_rcv'}`,
			all: tp`所有`,
			any: tp`任何${'cotent'}`,
		},
		types: {
			[0]: tp`${'icon'}进化用`,
			[1]: tp`${'icon'}平衡`,
			[2]: tp`${'icon'}体力`,
			[3]: tp`${'icon'}回复`,
			[4]: tp`${'icon'}龙`,
			[5]: tp`${'icon'}神`,
			[6]: tp`${'icon'}攻击`,
			[7]: tp`${'icon'}恶魔`,
			[8]: tp`${'icon'}机械`,
			[9]: tp`${'icon'}特别保护`,
			[12]: tp`${'icon'}能力觉醒用`,
			[14]: tp`${'icon'}强化合成用`,
			[15]: tp`${'icon'}贩卖用`,
		},
		awokens: {
			[0]: tp`${'icon'}未知觉醒`,
			[1]: tp`${'icon'}HP+`,
			[2]: tp`${'icon'}攻击+`,
			[3]: tp`${'icon'}回复+`,
			[4]: tp`${'icon'}火盾`,
			[5]: tp`${'icon'}水盾`,
			[6]: tp`${'icon'}木盾`,
			[7]: tp`${'icon'}光盾`,
			[8]: tp`${'icon'}暗盾`,
			[9]: tp`${'icon'}自回`,
			[10]: tp`${'icon'}防封`,
			[11]: tp`${'icon'}防暗`,
			[12]: tp`${'icon'}防废`,
			[13]: tp`${'icon'}防毒`,
			[14]: tp`${'icon'}火+`,
			[15]: tp`${'icon'}水+`,
			[16]: tp`${'icon'}木+`,
			[17]: tp`${'icon'}光+`,
			[18]: tp`${'icon'}暗+`,
			[19]: tp`${'icon'}手指`,
			[20]: tp`${'icon'}心解`,
			[21]: tp`${'icon'} B`,
			[22]: tp`${'icon'}火横`,
			[23]: tp`${'icon'}水横`,
			[24]: tp`${'icon'}木横`,
			[25]: tp`${'icon'}光横`,
			[26]: tp`${'icon'}暗横`,
			[27]: tp`${'icon'}U`,
			[28]: tp`${'icon'}SX`,
			[29]: tp`${'icon'}心+`,
			[30]: tp`${'icon'}协力`,
			[31]: tp`${'icon'}龙杀`,
			[32]: tp`${'icon'}神杀`,
			[33]: tp`${'icon'}恶魔杀`,
			[34]: tp`${'icon'}机杀`,
			[35]: tp`${'icon'}平衡杀`,
			[36]: tp`${'icon'}攻击杀`,
			[37]: tp`${'icon'}体力杀`,
			[38]: tp`${'icon'}回复杀`,
			[39]: tp`${'icon'}进化杀`,
			[40]: tp`${'icon'}觉醒杀`,
			[41]: tp`${'icon'}强化杀`,
			[42]: tp`${'icon'}卖钱杀`,
			[43]: tp`${'icon'}7c`,
			[44]: tp`${'icon'}5色破防`,
			[45]: tp`${'icon'}心追`,
			[46]: tp`${'icon'}全体 HP `,
			[47]: tp`${'icon'}全体回复`,
			[48]: tp`${'icon'}破无效`,
			[49]: tp`${'icon'}武器`,
			[50]: tp`${'icon'}方块心追`,
			[51]: tp`${'icon'}5色溜`,
			[52]: tp`${'icon'}大防封`,
			[53]: tp`${'icon'}大手指`,
			[54]: tp`${'icon'}防云`,
			[55]: tp`${'icon'}防封条`,
			[56]: tp`${'icon'}大SB`,
			[57]: tp`${'icon'}上血`,
			[58]: tp`${'icon'}下血`,
			[59]: tp`${'icon'}L盾`,
			[60]: tp`${'icon'}L解锁`,
			[61]: tp`${'icon'}10c`,
			[62]: tp`${'icon'}c珠`,
			[63]: tp`${'icon'}语音`,
			[64]: tp`${'icon'}奖励增加`,
			[65]: tp`${'icon'}HP -`,
			[66]: tp`${'icon'}攻击-`,
			[67]: tp`${'icon'}回复-`,
			[68]: tp`${'icon'}大防暗`,
			[69]: tp`${'icon'}大防废`,
			[70]: tp`${'icon'}大防毒`,
			[71]: tp`${'icon'}掉废`,
			[72]: tp`${'icon'}掉毒`,
			[73]: tp`${'icon'}火串`,
			[74]: tp`${'icon'}水串`,
			[75]: tp`${'icon'}木串`,
			[76]: tp`${'icon'}光串`,
			[77]: tp`${'icon'}暗串`,
			[78]: tp`${'icon'}十字`,
			[79]: tp`${'icon'}3色`,
			[80]: tp`${'icon'}4色`,
			[81]: tp`${'icon'}5色`,
			[82]: tp`${'icon'}12珠`,
		}
	},
};
deepMerge(localTranslating, _localTranslating);
localisation(localTranslating);

//大数字缩短长度
Number.prototype.bigNumberToString = function() {
	const negative = this < 0;

	let numTemp = negative ? Math.abs(this) : this.valueOf();
	if (!numTemp) return "0";
	const grouping = 1e4;
	const unit = ['', '万', '亿', '兆', '京', '垓'];
	const numParts = [];
	do {
		numParts.push(numTemp % grouping);
		numTemp = Math.floor(numTemp / grouping);
	} while (numTemp > 0 && numParts.length < (unit.length - 1))
	if (numTemp > 0) {
		numParts.push(numTemp);
	}
	let numPartsStr = numParts.map((num, idx) => {
		if (num > 0) {
			return (num < 1e3 ? "零" : "") + num + unit[idx];
		} else
			return "零";
	});

	numPartsStr.reverse(); //反向
	let outStr = numPartsStr.join("");
	outStr = outStr.replace(/(^零+|零+$)/g, ''); //去除开头的零
	outStr = outStr.replace(/零{2,}/g, '零'); //去除多个连续的零
	return (negative ? "-" : "") + outStr;
}