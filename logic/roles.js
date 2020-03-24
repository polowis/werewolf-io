const ROLES = [
	{
		id: 'lonewolf',
		name: 'Lone Wolf',
		desc: 'You are a werewolf, but you only win if you are the last wolf team member alive.',
		value: 1,
		isUnique: true,
		isWolf: true,
		requiredTeamRoles: ['werewolf']
	},
	{
		id: 'werewolf',
		name: 'Werewolf',
		desc: 'Eat a villager each night.',
		value: 2,
		isRequired: true,
		isWolf: true
	},
	{
		id: 'wolfcub',
		name: 'Wolf Cub',
		desc: 'If you die, the werewolves get two kills the following night.',
		value: 3,
		isUnique: true,
		isWolf: true,
		requiredTeamRoles: ['werewolf']
	},
	{
		id: 'wolfman',
		name: 'Wolf Man',
		desc: 'You wake with the other Werewolves each night, but the Seer sees you as a Villager.',
		value: 4,
		isUnique: true,
		isWolf: true,
		requiredTeamRoles: ['werewolf'],
		requiredOpposingTeamRoles: ['seer']
	},
	{
		id: 'seer',
		name: 'Seer',
		desc: 'Each night, point at a player and learn if they are good or evil.',
		value: 5,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
	{
		id: 'witch',
		name: 'Witch',
		desc: 'Kill or save a player, once each per game.',
		value: 6,
		isSelected: true,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
	{
		id: 'hunter',
		name: 'Hunter',
		desc: 'If you are killed, take someone down with you.',
		value: 7,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
	{
		id: 'priest',
		name: 'Priest',
		desc: 'On the first night, protect a player. The next attempt to kill the player fails. The night after that attempt, you protect a different player.',
		value: 8,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
	{
		id: 'bodyguard',
		name: 'Bodyguard',
		desc: 'Choose a different player each night to protect. That player cannot be killed that night.',
		value: 9,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
	{
		id: 'martyr',
		name: 'Martyr',
		desc: 'Take the place of someone who has been killed before their role is revealed.',
		value: 10,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
	{
		id: 'village',
		name: 'Village Idiot',
		desc: 'Always vote for players to die.',
		value: 11,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
	{
		id: 'ghost',
		name: 'Ghost',
		desc: 'Die the first night, then each day, write one letter clues as a message from the beyond (no names or initials).',
		value: 12,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
	{
		id: 'spellcaster',
		name: 'Spellcaster',
		desc: 'At night, indicate a player who must not use their voice the following day.',
		value: 13,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
	{
		id: 'villager',
		name: 'Villager',
		desc: 'Find the werewolves and lynch them.',
		isRequired: true,
		isWolf: false,
		value: 14
	},
	{
		id: 'lycan',
		name: 'Lycan',
		desc: 'You are a villager, but you appear falsely to be a werewolf to the Seer.',
		value: 15,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['seer']
	},
	{
		id: 'cupid',
		name: 'Cupid',
		desc: 'Choose two players to be lovers. If one of those players dies, the other dies from a broken heart.',
		value: 16,
		isUnique: true,
		isWolf: false,
		requiredTeamRoles: ['villager']
	},
];

module.exports.roles = ROLES