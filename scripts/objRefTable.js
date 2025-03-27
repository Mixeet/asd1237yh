const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.GamePush_Channels,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.TextBox,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSync,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerGet,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Eponesh_GameScore.Cnds.PlayerCompare,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerAdd,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerWaitForReady
	];
};
self.C3_JsPropNameTable = [
	{GamePush: 0},
	{GamePushChannels: 0},
	{Якорь: 0},
	{Текст: 0},
	{ВводТекста: 0},
	{ВводТекста2: 0},
	{Кнопка: 0},
	{ВводТекста3: 0},
	{ton: 0},
	{tonwallet: 0}
];

self.InstanceType = {
	GamePush: class extends self.IInstance {},
	GamePushChannels: class extends self.IInstance {},
	Текст: class extends self.ITextInstance {},
	ВводТекста: class extends self.ITextInputInstance {},
	ВводТекста2: class extends self.ITextInputInstance {},
	Кнопка: class extends self.IButtonInstance {},
	ВводТекста3: class extends self.ITextInputInstance {}
}